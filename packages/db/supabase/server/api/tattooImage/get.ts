import { getPublicUrl } from "../../../../index";
import { TABLE_TATTOO_IMAGE as TABLE, BUCKET } from "./consts";

type QueryOptions = {
  pinned?: boolean;
};

import type { Client, TattooImage } from "../../../../index";

export async function getUserImages(authedClient: Client, number?: number) {
  let query = authedClient.from(TABLE).select("*");

  if (number !== undefined) {
    query = query.limit(number);
  }

  const { data: images } = await query;
  if (!images) return [];

  const imagesWithUrls = await Promise.all(
    images.map(async (img) => {
      const { data } = await getPublicUrl(authedClient, {
        bucket: BUCKET,
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

// export async function getTattooImagesContaining(
//   authedClient: Client,
//   type?: string,
//   number?: number,
//   opts?: QueryOptions,
// ) {
//   if (!type) return [];

//   let query = authedClient.from(TABLE).select("*").or(`groups.cs.["${type}"]`);

//   if (opts?.pinned) {
//     query = query.order("pinned", { ascending: true });
//   }

//   const { data: images, error } =
//     number !== undefined ? await query.limit(number) : await query;

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   if (!images) return [];

//   return Promise.all(
//     images.map(async (img) => {
//       const { data } = await getPublicUrl(authedClient, {
//         bucket: BUCKET,
//         path: img.path,
//       });

//       return {
//         ...img,
//         url: data.publicUrl,
//       };
//     }),
//   );
// }
