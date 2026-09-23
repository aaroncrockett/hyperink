import type { OptionsUIRow, TagOpts } from "@hyperink/api/options";
import type { UIRowMeta, UIMetaData } from "@hyperink/api";

export type OptsUIData = Pick<OptionsUIRow, "profile_id" | "tag_opts">;
export type TagOptsUIData = Pick<TagOpts, "collections" | "styles" | "tags">;

export const FKEY_ID: UIMetaData<OptsUIData, "profile_id"> = {
  id: "profile_id",
  label: "Profile Id",
  readOnly: true,
};

export const OPTS_METADATA: UIRowMeta<OptsUIData> = {
  tag_opts: {
    id: "tag_opts",
    label: "Tagging Options",
    readOnly: false,
  },
  profile_id: FKEY_ID,
};
