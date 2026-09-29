import type { Client } from "@hyperink/service-providers";
import { getPublicUrl } from "@hyperink/service-providers";
//
import {
  createFlash,
  type FlashUIRow,
  getFlashLimitByRecent,
} from "@hyperink/api/flash";
import {
  getOptions as getOptsSrc,
  type TagOpts,
  type OptionsUIRow,
} from "@hyperink/api/options";
import { uploadFile, removeFile } from "@hyperink/api";
//
import { capitalizeTagOpts } from "../options";
//
import type { DBKeyValue } from "../../types";

const BUCKET = "user-images";

export const getUsersFlashAndTagOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
) => {
  const { data, error } = await getOptsSrc(
    client,
    ["tag_opts", "flash_opts"],
    [{ profile_id: id }],
  );
  if (!data) return { data, error };

  const tagOpts = capitalizeTagOpts(data.tag_opts) ?? {};
  const optionsData = {
    tagOpts: tagOpts,
    flashOpts: data.flash_opts ?? {},
  };

  return { data: tagOpts, error };
};

export const getFlash = async (
  client: Client,
  selectKeys: (keyof FlashUIRow)[],
  where: DBKeyValue<FlashUIRow>[],
) => {
  const { data, error: flashError } = await getFlashLimitByRecent(
    client,
    selectKeys,
    where,
  );

  const flashData = data satisfies FlashUIRow[] as FlashUIRow[];

  if (flashError)
    return {
      data: null,
      error: { message: "error getting flash" },
    };

  const fullData = await Promise.all(
    flashData.map(async (data) => {
      const { data: url } = await getPublicUrlForFlash(client, data.path);

      return {
        ...data,
        public_url: url.publicUrl,
      };
    }),
  );
  return {
    error: null,
    data: fullData,
  };
};
export const uploadFlash = async (
  client: Client,
  userId: string,
  inserts: Partial<FlashUIRow> & { file: File },
) => {
  const path = `${userId}/${crypto.randomUUID()}-${inserts.file.name}`;
  const { data: uploadData, error: uploadError } = await uploadFile(client, {
    bucket: BUCKET,
    path: path,
    file: inserts.file,
  });
  if (uploadError) return { error: uploadError, data: null };

  const { file, ...flashInserts } = inserts;

  const { data: flashData, error: flashError } = await createFlash(
    client,
    {
      ...flashInserts,
      path,
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

export const getPublicUrlForFlash = async (client: Client, path: string) =>
  await getPublicUrl(client, { bucket: BUCKET, path });
