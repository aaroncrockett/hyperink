import { removeFile, uploadFile, getPublicUrl } from "@inktree/db";

const table = "user_images";
const bucket = "user-images";

type QueryOptions = {
  pinned?: boolean;
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

async function selectAllContaining(
  authedClient: Client,
  arrayName: string,
  containing: string[],
) {
  const { data } = await authedClient
    .from(table)
    .select("*")
    .contains(arrayName, containing);

  return data;
}

async function getQueryWithLimit(query, limit?: number) {
  return limit !== undefined ? await query.limit(limit) : await query;
}

export async function getUserImagesByGroupType(
  authedClient: Client,
  number?: number,
  type?: string,
  opts?: QueryOptions,
) {
  let query = selectAllContaining(authedClient, "groups", type);

  if (opts?.pinned) {
    query = query.order("pinned", { ascending: true });
  }

  const { data: images } = await getQueryWithLimit(query, number);

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
