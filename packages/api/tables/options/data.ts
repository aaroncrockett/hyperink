import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";
//
export const OPTIONS_TABLE = "options";

export type FlashOpts = {
  default_collection: string;
};

export type TagOpts = {
  collections: string[];
  styles: string[];
  tags: string[];
};

export type OptionsRow = MergeDeep<
  DatabaseGenerated["public"]["Tables"]["options"]["Row"],
  {
    tag_opts: TagOpts;
    flash_opts: FlashOpts;
  }
>;

export type TagOptsUI = TagOpts;
export type FlashOptsUI = FlashOpts;
export type OptionsUIRow = OptionsRow;
