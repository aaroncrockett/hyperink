// Example on how to override a col for the UI
// export type FlashUIRow = Omit<FlashRow, "total_availability"> & {
//   total_avail: number | null;
// };
// Example on how to map the two
// export const flashMapping = {
//   toUi: {
//     total_avail: "total_availability",
//   },
//   toDb: {
//     total_availability: "total_avail",
//   },
// };

import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";

export type FlashTagging = string[] | null;

export type FlashRow = MergeDeep<
  DatabaseGenerated["public"]["Tables"]["flash"]["Row"],
  {
    styles: FlashTagging;
    tags: FlashTagging;
  }
>;

export type FlashUIRow = FlashRow;
