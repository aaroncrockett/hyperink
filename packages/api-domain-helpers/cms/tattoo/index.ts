import type { Client } from "@hyperink/service-providers";
import { getPublicUrl } from "@hyperink/service-providers";
//
import {
  createTattoos,
  type TattooUIRow,
  //   getFlashLimitByRecent,
  //   getWithin,
  //   getFlash as getFlashSrc,
  //   updateFlash as updateTattooSrc,
  //   updateFlashWithin as updateFlashWithinSrc,
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
import { capitalizeFlashOpts } from "../options/helpers";

const BUCKET = "user-images";

// GETS

export const getUsersTagAndTattooOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
) => {
  const { data, error } = await getOptionsSrc(
    client,
    ["tag_opts", "flash_opts"],
    [{ profile_id: id }],
  );
  if (!data) return { data, error };

  const tagOpts = capitalizeTagOpts(data.tag_opts) ?? {};
  const tattooOpts = capitalizeFlashOpts(data.flash_opts) ?? {};

  const optionsData = {
    tagOpts: tagOpts,
    tattooOpts: tattooOpts,
  };

  return { data: optionsData, error };
};

// export const getFlashById = async (
//   client: Client,
//   selectKeys: (keyof TattooUIRow)[],
//   id: string,
// ) => {
//   const { data, error: flashError } = await getFlashSrc(client, selectKeys, [
//     { id: id },
//   ]);

//   if (flashError)
//     return {
//       error: { message: flashError.message ?? "error getting flash by id" },
//       data: null,
//     };

//   const flash = data[0] as TattooUIRow;

//   const { data: url } = await getPublicUrlForFlash(client, flash.path);

//   const flashData = {
//     ...flash,
//     public_url: url.publicUrl,
//   };

//   return {
//     data: flashData,
//     error: null,
//   };
// };

// export const getTattoos = async (
//   client: Client,
//   selectKeys: (keyof TattooUIRow)[],
//   where: DBKeyValue<TattooUIRow>[],
// ) => {
//   where = where.map((item) => {
//     if (item.collection) {
//       return {
//         ...item,
//         collection: normalizeToKabobCase(item.collection),
//       };
//     }

//     return item;
//   });

//   const { data, error: flashError } = await getFlashLimitByRecent(
//     client,
//     selectKeys,
//     where,
//   );

//   const flashData = data satisfies TattooUIRow[] as TattooUIRow[];

//   if (flashError) {
//     return {
//       data: null,
//       error: { message: "error getting flash" },
//     };
//   }

//   if (!flashData) {
//     return {
//       error: null,
//       data: [],
//     };
//   }

//   const fullData = await Promise.all(
//     flashData.map(async (data) => {
//       const { data: url } = await getPublicUrlForFlash(client, data.path);

//       return {
//         ...data,
//         ...(data.collection && {
//           collection: denormalizeFromKabobCase(data.collection),
//         }),
//         public_url: url.publicUrl,
//       };
//     }),
//   );
//   return {
//     error: null,
//     data: fullData,
//   };
// };

// export const getFlashWithin = async (
//   client: Client,
//   selectKeys: (keyof TattooUIRow)[],
//   within: DBKeyValue<TattooUIRow>[],
// ) => {
//   const normalizedWithin = within.map((item) => {
//     if (item?.collection) {
//       return {
//         ...item,
//         collection: item.collection.map((i: string) => normalizeToKabobCase(i)),
//       };
//     }

//     return item;
//   });

//   const { data, error: flashError } = await getWithin(
//     client,
//     selectKeys,
//     normalizedWithin,
//   );

//   if (flashError)
//     return {
//       data: null,
//       error: { message: "error getting flash" },
//     };

//   const flashData = data satisfies TattooUIRow[] as TattooUIRow[];

//   const fullData = await Promise.all(
//     flashData.map(async (data) => {
//       const { data: url } = await getPublicUrlForFlash(client, data.path);

//       return {
//         ...data,
//         ...(data.collection && {
//           collection: denormalizeFromKabobCase(data.collection),
//         }),
//         public_url: url.publicUrl,
//       };
//     }),
//   );
//   return {
//     error: null,
//     data: fullData,
//   };
// };

export const getPublicUrlForFlash = async (client: Client, path: string) =>
  await getPublicUrl(client, { bucket: BUCKET, path });

// UPDATES
// export const updateFlashWithin = updateFlashWithinSrc;

// export const updateFlash = updateTattooSrc;

// export const updateFlash = (
//   client: Client,
//   inserts: Partial<TattooUIRow>,
//   where: Partial<TattooUIRow>[],
//   selectKeys?: null | (keyof TattooUIRow)[],
// ) => {
//   const normalizedInserts = {
//     ...inserts,
//     collection: normalizeToKabobCase(inserts?.collection ?? ""),
//   };
//   return updateTattooSrc(client, normalizedInserts, where, selectKeys);
// };

// OTHERS

// *FLAG* This can be dangerous so flagging for testing or rethinking.
// If there is a failure in logic and we miss pinned flash, the orders will not work as expected.
// This currently depends on never accidently tagging more than 3 items.
// It also denpends on the flash functionality accurently grabbing the three flash items which should be pinned.
// If any of this breaks or doesn't work as intended, there could be a mess.
// This is fine for right now, for alpha/beta mvp.
export const resetAndUpdatePinnedTattoos = async (
  client: Client,
  flash: Partial<TattooUIRow>[],
  items: Partial<TattooUIRow>[],
) => {
  const resetResults = await Promise.all(
    flash.map((item) =>
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

  const { file, collection, ...flashInserts } = inserts;

  const normalizedCollection = collection
    ? normalizeToKabobCase(collection)
    : undefined;

  const { data: flashData, error: flashError } = await createTattoos(
    client,
    {
      ...flashInserts,
      path,
      ...(collection ? { collection: normalizeToKabobCase(collection) } : {}),
    },
    userId,
  );

  if (flashError) {
    removeFile(client, {
      bucket: BUCKET,
      path: path,
    });
    return {
      error: { message: flashError.message },
      data: null,
    };
  }
  const data = {
    ...flashData,
    ...uploadData,
  };
  return { data, error: null };
};
