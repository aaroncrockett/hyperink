"use server";
import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { uploadUserImage } from "@/utils/db/server";
import { getImageInputs } from "../../ImageInputs";
export async function uploadImage(formData: FormData) {
  const { file, fileName, styles, collections, groups, tags } =
    await getImageInputs(formData);

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);
  if (!user) throw new Error("Unauthorized");

  return await uploadUserImage(authedClient, file, {
    groups,
    styles,
    collections,
    name: fileName,
    tags,
    user_id: user.id,
  });
}
