const table = "profile_tattoo_options";

import type { Client } from "../../../../index";

export async function getProfileTattooOptionsByTags(authedClient: Client) {
  const { data, error } = await authedClient
    .from(table)
    .select("tags")
    .single();

  if (error) throw error;

  return data.tags;
}

export async function getProfileTattooOptionsByCategories(
  authedClient: Client,
) {
  const { data, error } = await authedClient
    .from(table)
    .select("categories")
    .single();

  if (error) throw error;

  return data.categories;
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
