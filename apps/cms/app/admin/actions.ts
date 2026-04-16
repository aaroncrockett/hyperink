"use server";

import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { uploadUserImage } from "@/utils/db/server";
import type { TattooGroup, TattooTag } from "@inktree/db";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  const fileName = file.name;
  // const styles = formData.getAll("styles");
  // const collections = formData.getAll("collections");

  const groups = formData
    .getAll("groups")
    .map((v) => v.toString()) as TattooGroup[];

  const tags = formData.getAll("tags").map((v) => v.toString()) as TattooTag[];

  if (!file) throw new Error("No file");

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);
  if (!user) throw new Error("Unauthorized");

  return await uploadUserImage(authedClient, file, {
    groups,
    name: fileName,
    tags,
    user_id: user.id,
  });
}
