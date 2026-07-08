const table = "profile_tagging_options";

import type { Client } from "../../../../index";

export async function getProfileTaggingOptionsByTags(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("tags")
    .single();

  if (error) throw error;

  return data.tags;
}

export async function getProfileTaggingOptionsByCategories(
  authedClient: Client,
) {
  const { data, error } = await authedClient
    .from(table)
    .select("categories")
    .single();

  if (error) throw error;

  return data.categories;
}

export async function getProfileTaggingOptionsByStyles(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("styles")
    .single();

  if (error) throw error;

  return data.styles;
}
export async function getProfileTaggingOptionsByGroups(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("groups")
    .single();

  if (error) throw error;

  return data.groups;
}
