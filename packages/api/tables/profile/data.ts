import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "@hyperink/service-providers";
//
export const PROFILE_TABLE = "profile";
export type ProfileToVerify = string[] | null;

export type ProfileRow = MergeDeep<
  DatabaseGenerated["public"]["Tables"]["profile"]["Row"],
  {
    to_verify: ProfileToVerify;
  }
>;

export type ProfileUIRow = ProfileRow;
