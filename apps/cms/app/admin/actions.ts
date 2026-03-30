// app/actions/uploadImage.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { uploadImage as uploadImageUtil } from "@/utils";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file");

  const client = await createClient();

  const {
    data: { user },
  } = await client.getUser();
  if (!user) throw new Error("Unauthorized");

  return await uploadImageUtil({
    client,
    bucket: "user-images",
    table: "user_images",
    file,
    userId: user.id,
  });
}
