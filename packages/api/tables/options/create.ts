import { createSupabaseCreateQueries } from "@hyperink/api";
import { type OptionsUIRow, TagOpts } from "@hyperink/api/options";
//
import type { Client } from "@hyperink/service-providers";
//
import { normalizeToKabobCase } from "@hyperink/utils";

const baseCreateTagOpts = createSupabaseCreateQueries("options", null);

export const createTagOpts = (
  client: Client,
  inserts: Partial<TagOpts>,
  id: OptionsUIRow["profile_id"],
) => {
  const normalizeToArray = (value?: string | string[]) =>
    (Array.isArray(value) ? value : value ? [value] : []).map(
      normalizeToKabobCase,
    );

  const normalizedCollections = normalizeToArray(inserts.collections);
  const normalizedStyles = normalizeToArray(inserts.styles);
  const normalizedTags = normalizeToArray(inserts.tags);

  const tagOpts = {
    tag_opts: {
      collections: normalizedCollections,
      styles: normalizedStyles,
      tags: normalizedTags,
    },
  };
  const internalInserts = {
    profile_id: id,
    tag_opts: tagOpts.tag_opts,
  };

  return baseCreateTagOpts.create(client, internalInserts);
};
