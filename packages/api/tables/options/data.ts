import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";
//
export const OPTIONS_TABLE = "options";

type TagOptsCollections = {};

export type TagOpts = {
  collections?: string[];
  styles?: string[];
  tags?: string[];
};

export type OptionsRow = MergeDeep<
  DatabaseGenerated["public"]["Tables"]["options"]["Row"],
  {
    tag_opts: TagOpts;
  }
>;

export type OptionsUIRow = OptionsRow;
