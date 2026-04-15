"use server";

import { createServerClientAndAuth, getUser } from "@/utils/supabase/server";
import { uploadImage as uploadImageUtil } from "@/utils/supabase/server";
import type {
  TattooStyle,
  TattooCollection,
  TattooGroup,
  TattooTag,
} from "@inktree/db";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  const fileName = file.name;
  const styles = formData.getAll("styles");
  const collections = formData.getAll("collections");

  const groups = formData
    .getAll("groups")
    .map((v) => v.toString()) as TattooGroup[];

  const tags = formData.getAll("tags").map((v) => v.toString()) as TattooTag[];

  if (!file) throw new Error("No file");

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getUser(authedClient);
  if (!user) throw new Error("Unauthorized");

  return await uploadImageUtil(
    authedClient,
    "user-images",
    "user_images",
    file,
    {
      collections,
      file,
      groups,
      name: fileName,
      styles,
      tags,
      user_id: user.id,
    },
  );
}
