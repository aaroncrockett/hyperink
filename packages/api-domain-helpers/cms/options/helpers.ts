import { type TagOpts } from "@hyperink/api/options";
import { capitalizeWords, normalizeToKabobCase } from "@hyperink/utils";

export const capitalizeTagOpts = (tagOpts: TagOpts): TagOpts => {
  return {
    ...tagOpts,
    collections: tagOpts.collections.map(capitalizeWords),
    tags: tagOpts.tags.map(capitalizeWords),
    styles: tagOpts.styles.map(capitalizeWords),
  };
};

export const normalizeTagOpts = (tagOpts: TagOpts): TagOpts => {
  return {
    ...tagOpts,
    collections: tagOpts.collections.map(normalizeToKabobCase),
    tags: tagOpts.tags.map(normalizeToKabobCase),
    styles: tagOpts.styles.map(normalizeToKabobCase),
  };
};
