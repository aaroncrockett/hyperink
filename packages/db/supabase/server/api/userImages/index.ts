import { removeFile, uploadFile, getPublicUrl } from "../../../../index";

const table = "user_images";
const bucket = "user-images";

type QueryOptions = {
  pinned?: boolean;
};

import type { Client, UserImage } from "../../../../index";

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

export async function getUserImagesByGroupsContaining(
  authedClient: Client,
  type?: string,
  number?: number,
  opts?: QueryOptions,
) {
  if (!type) return [];

  let query = authedClient.from(table).select("*").or(`groups.cs.["${type}"]`);

  if (opts?.pinned) {
    query = query.order("pinned", { ascending: true });
  }

  const { data: images, error } =
    number !== undefined ? await query.limit(number) : await query;

  if (error) {
    console.error(error);
    return [];
  }

  if (!images) return [];

  return Promise.all(
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
}

export function getUserImagesByGroups(authedClient: Client) {
  return authedClient.from(table).select("groups");
}

export async function storeUserImageData(
  authedClient: Client,
  path: string,
  params: Partial<UserImage>,
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
  params: Partial<UserImage>,
) {
  const path = `${params.user_id}/${crypto.randomUUID()}`;
  const { error } = await uploadFile(authedClient, {
    bucket,
    file,
    path: path,
  });

  if (error) throw error;

  const dbError = await storeUserImageData(authedClient, path, params);

  if (dbError) {
    await removeFile(authedClient, { bucket, path });
    throw dbError;
  }
}
