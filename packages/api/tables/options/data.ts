import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";
//
export const OPTIONS_TABLE = "options";

export const NULL_COLLECTION_VALUE = "-- none --";

export type TattooOpts = {
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
    flash_opts: TattooOpts;
  }
>;

export type TagOptsUI = TagOpts;
export type TattooOptsUI = TattooOpts;
export type OptionsUIRow = OptionsRow;
