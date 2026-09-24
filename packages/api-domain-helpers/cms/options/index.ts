import type { Client } from "@hyperink/service-providers";

import {
  getOptions,
  createTagOpts,
  type OptionsUIRow,
  type TagOpts,
} from "@hyperink/api/options";

export const getUsersTagOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
) => {
  const { data, error } = await getOptions(
    client,
    ["tag_opts"],
    [{ profile_id: id }],
  );

  return { data, error };
};

// export const initCollectionTagsAndResetRemaining = async (
//   client: Client,
//   inserts: Pick<TagOpts, "collections">,
//   id: OptionsUIRow["profile_id"],
// ): Promise<
//   | { data: Partial<TagOpts>; error: null }
//   | { data: null; error: Record<string, any> }
// > => {
//   const tagOpts = {
//     collections: inserts.collections,
//     styles: [],
//     tags: [],
//   };
//   return await createTagOpts(client, tagOpts, id);
// };
