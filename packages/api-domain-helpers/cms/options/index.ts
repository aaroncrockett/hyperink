import type { Client } from "@hyperink/service-providers";
//
import { capitalizeWords } from "@hyperink/utils";
//
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

  if (!data) return { data, error };

  const tagOpts = data.tag_opts satisfies TagOpts as TagOpts;

  tagOpts.collections = tagOpts.collections.map((value: string) =>
    capitalizeWords(value),
  );
  tagOpts.tags = tagOpts.tags.map((value: string) => capitalizeWords(value));

  tagOpts.styles = tagOpts.styles.map((value: string) =>
    capitalizeWords(value),
  );

  return { data: tagOpts, error };
};

export const initCollectionTagsAndResetRemaining = async (
  client: Client,
  inserts: Pick<TagOpts, "collections">,
  id: OptionsUIRow["profile_id"],
): Promise<
  | { data: Partial<TagOpts>; error: null }
  | { data: null; error: Record<string, any> }
> => {
  const tagOpts = {
    collections: inserts.collections,
    styles: [],
    tags: [],
  };
  type CreateTagInsert = {
    profile_id?: OptionsUIRow["profile_id"];
    tag_opts?: OptionsUIRow["tag_opts"];
  };
  return await createTagOpts(client, tagOpts, id);
};
