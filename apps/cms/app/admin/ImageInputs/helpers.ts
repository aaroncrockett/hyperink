import {
  getProfileTattooOptionsByGroups,
  getProfileTattooOptionsByTags,
  getProfileTattooOptionsByCategories,
  getProfileTattooOptionsByStyles,
} from "@inktree/db";
import type { Client } from "@inktree/db";

export async function getImageFormInputs(formData: FormData) {
  const files = formData.getAll("files") as File[];
  const readableNames = formData.getAll("readableName") as string[];

  const styles = formData.getAll("styles") as string[];
  const collections = formData.getAll("collections") as string[];
  const groups = formData.getAll("groups") as string[];
  const tags = formData.getAll("tags") as string[];

  const coverIndex = Number(formData.get("coverIndex"));

  if (files.length === 0) {
    throw new Error("No files");
  }

  return {
    files,
    readableNames,
    styles,
    collections,
    groups,
    tags,
    coverIndex,
  };
}
export function getUserTattooOptionsByGroups(authedClient: Client) {
  return getProfileTattooOptionsByGroups(authedClient);
}

export function getUserTattooOptionsByTags(authedClient: Client) {
  return getProfileTattooOptionsByTags(authedClient);
}

export function getUserTattooOptionsByCategories(authedClient: Client) {
  return getProfileTattooOptionsByCategories(authedClient);
}

export function getUserTattooOptionsByStyles(authedClient: Client) {
  return getProfileTattooOptionsByStyles(authedClient);
}
