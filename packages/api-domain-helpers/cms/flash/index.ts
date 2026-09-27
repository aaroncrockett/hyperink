import type { Client } from "@hyperink/service-providers";
import { createFlash, type FlashUIRow } from "@hyperink/api/flash";
import { uploadFile, removeFile } from "@hyperink/api";

const BUCKET = "user-images";

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
