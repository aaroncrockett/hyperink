"use server";
import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { uploadUserImage } from "@/utils/db/server";
import { getImageFormInputs } from "./helpers";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export async function uploadImage(formData: FormData) {
  const { files, styles, collections, groups, tags, setOrder, readableNames } =
    await getImageFormInputs(formData);

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);
  if (!user) throw new Error("Unauthorized");

  const isImgSet = files.length > 1;
  const setId = isImgSet ? randomUUID() : null;

  const uploads = files.map((file, index) => {
    return uploadUserImage(authedClient, file, {
      groups,
      styles,
      collections,
      tags,
      readable_name: readableNames[index],
      name: file.name,
      user_id: user.id,
      is_cover: index === 0,
      set_order: isImgSet ? setOrder[index] : null,
      set_id: setId,
    });
  });

  redirect("/admin/upload-images");
  return await Promise.all(uploads);
}
