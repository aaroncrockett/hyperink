import type { Client } from "@hyperink/service-providers";
import { getPublicUrl } from "@hyperink/service-providers";
//
import {
  createTattoos,
  type TattooUIRow,
  getTattoosLimitByRecent,
  getTattoos as getTattoosSrc,
  updateTattoos as updateTattooSrc,
} from "@hyperink/api/tattoo";
import {
  getOptions as getOptionsSrc,
  type OptionsUIRow,
} from "@hyperink/api/options";
import { capitalizeTagOpts } from "@hyperink/api-domain-helpers/options";
import { uploadFile, removeFile } from "@hyperink/api";

//
import type { DBKeyValue } from "../../types";
import {
  denormalizeFromKabobCase,
  normalizeToKabobCase,
} from "@hyperink/utils";

const BUCKET = "user-images";

// GETS
export const getTattooById = async (
  client: Client,
  selectKeys: (keyof TattooUIRow)[],
  id: string,
) => {
  const { data, error: tattooError } = await getTattoosSrc(client, selectKeys, [
    { id: id },
  ]);

  if (tattooError)
    return {
      error: { message: tattooError.message ?? "error getting tattoo by id" },
      data: null,
    };

  const tattoo = data[0] as TattooUIRow;

  const { data: url } = await getPublicUrlForTattoo(client, tattoo.path);

  const tattooData = {
    ...tattoo,
    public_url: url.publicUrl,
  };

  return {
    data: tattooData,
    error: null,
  };
};

export const getTattoos = async (
  client: Client,
  selectKeys: (keyof TattooUIRow)[],
  where: DBKeyValue<TattooUIRow>[],
) => {
  where = where.map((item) => {
    if (item.collection) {
      return {
        ...item,
        collection: normalizeToKabobCase(item.collection),
      };
    }

    return item;
  });

  const { data, error: tattooError } = await getTattoosLimitByRecent(
    client,
    selectKeys,
    where,
  );

  const tattooData = data satisfies TattooUIRow[] as TattooUIRow[];

  if (tattooError) {
    return {
      data: null,
      error: { message: "error getting tattoos" },
    };
  }

  if (!tattooData) {
    return {
      error: null,
      data: [],
    };
  }

  const fullData = await Promise.all(
    tattooData.map(async (data) => {
      const { data: url } = await getPublicUrlForTattoo(client, data.path);

      return {
        ...data,
        ...(data.collection && {
          collection: denormalizeFromKabobCase(data.collection),
        }),
        public_url: url.publicUrl,
      };
    }),
  );
  return {
    error: null,
    data: fullData,
  };
};

export const getPublicUrlForTattoo = async (client: Client, path: string) =>
  await getPublicUrl(client, { bucket: BUCKET, path });

// UPDATES

export const updateTattoos = (
  client: Client,
  inserts: Partial<TattooUIRow>,
  where: Partial<TattooUIRow>[],
  selectKeys?: null | (keyof TattooUIRow)[],
) => {
  const normalizedInserts = {
    ...inserts,
    collection: normalizeToKabobCase(inserts?.collection ?? ""),
  };
  return updateTattooSrc(client, normalizedInserts, where, selectKeys);
};

// OTHERS

// *FLAG* This can be dangerous so flagging for testing or rethinking.
// If there is a failure in logic and we miss pinned tattoo, the orders will not work as expected.
// This currently depends on never accidently tagging more than 3 items.
// It also denpends on the tattoo functionality accurently grabbing the three tattoo items which should be pinned.
// If any of this breaks or doesn't work as intended, there could be a mess.
// This is fine for right now, for alpha/beta mvp.
export const resetAndUpdatePinnedTattoos = async (
  client: Client,
  tattoos: Partial<TattooUIRow>[],
  items: Partial<TattooUIRow>[],
) => {
  const resetResults = await Promise.all(
    tattoos.map((item) =>
      updateTattooSrc(client, { pinned_order: null }, [{ id: item?.id ?? "" }]),
    ),
  );

  const resetError = resetResults.find((result) => result.error);

  if (resetError) {
    return {
      error:
        resetError?.message ?? "There is an error resetting the pinned order",
      data: null,
    };
  }

  const updateResults = await Promise.all(
    items
      .filter((item) => item.pinned_order != null && item.id !== "")

      .map((item) =>
        updateTattooSrc(client, { pinned_order: item.pinned_order }, [
          { id: item?.id ?? "" },
        ]),
      ),
  );

  const updateError = updateResults.find((result) => result.error);

  if (updateError) {
    return {
      error:
        resetError?.message ?? "There is an error setting the pinned order",
      data: null,
    };
  }

  return {
    error: null,
    data: null,
  };
};

export const uploadTattoos = async (
  client: Client,
  userId: string,
  inserts: Partial<TattooUIRow> & { file: File },
) => {
  const path = `${userId}/${crypto.randomUUID()}-${inserts.file.name}`;
  const { data: uploadData, error: uploadError } = await uploadFile(client, {
    bucket: BUCKET,
    path: path,
    file: inserts.file,
  });
  if (uploadError) return { error: uploadError, data: null };

  const { file, collection, ...tattooInserts } = inserts;

  const normalizedCollection = collection
    ? normalizeToKabobCase(collection)
    : undefined;

  const { data: tattooData, error: tattooError } = await createTattoos(
    client,
    {
      ...tattooInserts,
      path,
      ...(collection ? { collection: normalizeToKabobCase(collection) } : {}),
    },
    userId,
  );

  if (tattooError) {
    removeFile(client, {
      bucket: BUCKET,
      path: path,
    });
    return {
      error: { message: tattooError.message },
      data: null,
    };
  }
  const data = {
    ...tattooData,
    ...uploadData,
  };
  return { data, error: null };
};
