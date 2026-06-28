import {
  getProfileTattooOptionsByGroups,
  getProfileTattooOptionsByTags,
  getProfileTattooOptionsByCollections,
  getProfileTattooOptionsByStyles,
} from "@inktree/db";
import type { Client } from "@inktree/db";

export async function getImageInputs(formData: FormData) {
  const file = formData.get("file") as File;
  const fileName = file.name;
  const styles = formData.getAll("styles");
  const collections = formData.getAll("collections");
  const groups = formData.getAll("groups");
  const tags = formData.getAll("tags");

  if (!file) throw new Error("No file");

  return { file, fileName, styles, collections, groups, tags };
}

export function getUserTattooOptionsByGroups(authedClient: Client) {
  return getProfileTattooOptionsByGroups(authedClient);
}

export function getUserTattooOptionsByTags(authedClient: Client) {
  return getProfileTattooOptionsByTags(authedClient);
}

export function getUserTattooOptionsByCollections(authedClient: Client) {
  return getProfileTattooOptionsByCollections(authedClient);
}

export function getUserTattooOptionsByStyles(authedClient: Client) {
  return getProfileTattooOptionsByStyles(authedClient);
}
