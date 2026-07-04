"use server";
import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { uploadUserImage } from "@/utils/db/server";
import { getImageFormInputs } from "../../ImageInputs";
import { randomUUID } from "crypto";

export async function uploadImage(formData: FormData) {
  const {
    files,
    styles,
    collections,
    groups,
    tags,
    coverIndex,
    readableNames,
  } = await getImageFormInputs(formData);

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);
  if (!user) throw new Error("Unauthorized");

  const uploads = files.map((file, index) => {
    const isCover =
      typeof coverIndex === "number" ? index === coverIndex : index === 0;
    const readableName = readableNames[index] || file.name;

    const isImgSet = files.length > 1;

    return uploadUserImage(authedClient, file, {
      groups,
      styles,
      collections,
      tags,
      readable_name: readableName,
      name: file.name,
      user_id: user.id,
      is_cover: isCover,
      set_order: isImgSet ? index : null,
      set_id: isImgSet ? randomUUID() : null,
    });
  });

  return await Promise.all(uploads);
}
