// hyperink backend-services
import { uploadFile, removeFile } from "@hyperinkstudio/backend-services";
import type {
  FlashRecord,
  TattooImage,
  Client,
} from "@hyperinkstudio/backend-services";
// local
import { storeImageData } from "../imageData";

// its possible we have multipe buckets but should be able to determine that based on the table passed in.
const BUCKET = "user-images";

export async function uploadImageAndCreateMetadata(
  authedClient: Client,
  file: File,
  table: "tattoo_image" | "flash",
  userId: string,
  params: Partial<FlashRecord | TattooImage>,
) {
  const path = `${userId}/${crypto.randomUUID()}`;

  const { error } = await uploadFile(authedClient, {
    bucket: BUCKET,
    file,
    path,
  });

  if (error) return { error };

  const dbError = await storeImageData(
    authedClient,
    table,
    path,
    userId,
    params,
  );

  if (dbError) {
    await removeFile(authedClient, { bucket: BUCKET, path });

    return { error: dbError };
  }

  return { error: null };
}
