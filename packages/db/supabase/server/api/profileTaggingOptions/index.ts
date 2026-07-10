const table = "profile_tagging_options";
import { tags, styles } from "./consts";

import type { Client } from "../../../../index";

export async function getProfileTaggingOptionsByTags(authedClient: Client) {
  // const { data, error } = await authedClient
  //   .from(table)
  //   .select("tags")
  //   .single();

  // if (error) throw error;

  return tags;

  return tags;
}

// export async function getProfileTaggingOptionsByCategories(
//   authedClient: Client,
// ) {
//   const { data, error } = await authedClient
//     .from(table)
//     .select("collections")
//     .single();

//   if (error) throw error;

//   return data.categories;
// }

export async function getProfileTaggingOptionsByStyles(authedClient: Client) {
  // const { data, error } = await authedClient
  //   .from(table)
  //   .select("styles")
  //   .single();

  // if (error) throw error;

  return styles;
}
