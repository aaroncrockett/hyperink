import { type TagOpts } from "@hyperink/api/options";
import {
  normalizeToKabobCase,
  denormalizeFromKabobCase,
} from "@hyperink/utils";

export const capitalizeTagOpts = (tagOpts: TagOpts): TagOpts => {
  return {
    ...tagOpts,
    ...(tagOpts.collections && {
      collections: tagOpts.collections.map((tag) =>
        denormalizeFromKabobCase(tag),
      ),
    }),
    ...(tagOpts.tags && {
      tags: tagOpts.tags.map((tag) => denormalizeFromKabobCase(tag)),
    }),
    ...(tagOpts.styles && {
      styles: tagOpts.styles.map((tag) => denormalizeFromKabobCase(tag)),
    }),
  };
};

export const normalizeTagOpts = (tagOpts: TagOpts): TagOpts => {
  return {
    ...tagOpts,
    ...(tagOpts.collections && {
      collections: tagOpts.collections.map((tag) => normalizeToKabobCase(tag)),
    }),
    ...(tagOpts.tags && {
      tags: tagOpts.tags.map((tag) => normalizeToKabobCase(tag)),
    }),
    ...(tagOpts.styles && {
      styles: tagOpts.styles.map((tag) => normalizeToKabobCase(tag)),
    }),
  };
};
