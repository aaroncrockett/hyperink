// import { removeFile, uploadFile, getPublicUrl } from "../../../../index";

const table = "profile_tattoo_options";

import type { Client } from "../../../../index";

// export async function getProfileTattooOptions(
//   authedClient: Client,
//   number?: number,
// ) {
//   let query = authedClient.from(table).select("*");

//   if (number !== undefined) {
//     query = query.limit(number);
//   }
//   const { data: options } = await query;
//   if (!options) return [];

//   return options;
// }

export async function getProfileTattooOptionsByTags(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("tags")
    .single();

  if (error) throw error;

  return data.tags;
}

export async function getProfileTattooOptionsByCollections(
  authedClient: Client,
) {
  const { data, error } = await authedClient
    .from(table)
    .select("collections")
    .single();

  if (error) throw error;

  return data.collections;
}

export async function getProfileTattooOptionsByStyles(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("styles")
    .single();

  if (error) throw error;

  return data.styles;
}
export async function getProfileTattooOptionsByGroups(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("groups")
    .single();

  if (error) throw error;

  return data.groups;
}
