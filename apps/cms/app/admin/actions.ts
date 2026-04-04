"use server";

import { createClient } from "@/utils/supabase/server";
import { uploadImage as uploadImageUtil } from "@/utils";
import type {} from "@inktree/db";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  const fileName = file.name;
  const styles = formData.getAll("styles");
  const collections = formData.getAll("collections");
  const groups = formData.getAll("groups");
  const tags = formData.getAll("tags");

  if (!file) throw new Error("No file");

  const client = await createClient();

  const {
    data: { user },
  } = await client.getUser();
  if (!user) throw new Error("Unauthorized");

  return await uploadImageUtil({
    bucket: "user-images",
    client,
    collections,
    file,
    groups,
    name: fileName,
    styles,
    table: "user_images",
    tags,
    userId: user.id,
  });
}
