import type {
  FlashRecord,
  TattooImage,
  Client,
} from "@hyperinkstudio/backend-services";

type ImageTable = {
  tattoo_image: TattooImage;
  flash: FlashRecord;
};

export async function storeImageData(
  authedClient: Client,
  table: "tattoo_image" | "flash",
  path: string,
  userId: string,
  params: Partial<FlashRecord | TattooImage>,
) {
  const { error } = await authedClient
    .from(table)
    .insert({ ...params, user_id: userId, path } as never);

  return error;
}
