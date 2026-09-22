import type { Client } from "@hyperink/service-providers";

import { getTagOpts, type OptionsUIRow } from "@hyperink/api/options";
import { execute, single } from "../../internal-helpers/";
export const getUsersTagOptions = async (
  client: Client,
  selectKeys: (keyof OptionsUIRow)[],
  id: OptionsUIRow["profile_id"],
) => {
  return await single(getTagOpts, client, selectKeys, [
    { columnKey: "profile_id", value: id },
  ]);
};
