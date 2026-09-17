// Example on how to override a col for the UI
// export type FlashUIRow = Omit<CustomFlashRow, "total_availability"> & {
//   total_avail: number | null;
// };

import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";

export type FlashTagging = string[] | null;

export type CustomFlashRow = MergeDeep<
  DatabaseGenerated["public"]["Tables"]["flash"]["Row"],
  {
    styles: FlashTagging;
    tags: FlashTagging;
  }
>;

// Example on how to override a col for the
// export type FlashUIRow = Omit<CustomFlashRow, "total_availability"> & {
//   total_avail: number | null;
// };

export type FlashUIRow = CustomFlashRow;
