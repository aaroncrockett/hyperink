import { removeFile, uploadFile, getPublicUrl } from "@inktree/db";

const table = "user_images";
const bucket = "user-images";

type QueryOptions = {
  pinned?: boolean;
};

type UserImageLists = {
  name: "groups" | "tags" | "styles" | "collections";
  value: string[];
};

import type { Client, UserImage } from "@inktree/db";

export async function storeUserImageData(
  authedClient: Client,
  path: string,
  params: Partial<UserImage> & { user_id: string },
) {
  const { error } = await authedClient.from(table).insert({
    ...params,
    path,
  });

  return error;
}

export async function uploadUserImage(
  authedClient: Client,
  file: File,
  params: Partial<UserImage> & { user_id: string },
) {
  const path = `${params.user_id}/${crypto.randomUUID()}`;

  const { error } = await uploadFile(authedClient, {
    bucket,
    file,
    path,
  });

  if (error) throw error;

  const dbError = await storeUserImageData(
    authedClient,
    path,
    params as Omit<typeof params, "user_id"> & { user_id: string },
  );

  if (dbError) {
    await removeFile(authedClient, { bucket, path });
    throw dbError;
  }
}

export async function getUserImages(authedClient: Client, number?: number) {
  let query = authedClient.from(table).select("*");

  if (number !== undefined) {
    query = query.limit(number);
  }

  const { data: images } = await query;
  if (!images) return [];

  const imagesWithUrls = await Promise.all(
    images.map(async (img) => {
      const { data } = await getPublicUrl(authedClient, {
        bucket,
        path: img.path,
      });

      return {
        ...img,
        url: data.publicUrl,
      };
    }),
  );

  return imagesWithUrls;
}

export async function getUserImagesFromList(
  authedClient: Client,
  list: UserImageLists,
  number?: number,
  opts?: QueryOptions,
) {
  let query = authedClient
    .from(table)
    .select("*")
    .contains(list.name, list.value);

  if (opts?.pinned) {
    query = query.order("pinned", { ascending: true });
  }

  const { data: images } =
    number !== undefined ? await query.limit(number) : await query;

  if (!images) return [];

  const imagesWithUrls = await Promise.all(
    images.map(async (img) => {
      const { data } = await getPublicUrl(authedClient, {
        bucket,
        path: img.path,
      });

      return {
        ...img,
        url: data.publicUrl,
      };
    }),
  );

  return imagesWithUrls;
}
