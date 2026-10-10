import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";

export type TattooTagging = string[] | null;

export type TattooRow = MergeDeep<
  DatabaseGenerated["public"]["Tables"]["tattoo_image"]["Row"],
  {
    styles: TattooTagging;
    tags: TattooTagging;
  }
>;

export type TattooUIRow = TattooRow;
