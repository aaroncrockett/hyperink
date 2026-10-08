// Example on how to override a col for the UI
// export type FlashUIRow = Omit<FlashRow, "total_availability"> & {
//   total_avail: number | null;
// };
// Example on how to map the two
// export const flashMapping = {
//   toUi: {
//     proflie_tattoo_id: "profile_id",
//   },
//   toDb: {
//     profile_id: "proflie_tattoo_id",
//   },
// };

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
