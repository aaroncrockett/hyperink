import type {
  Client,
  TattooRequest,
  By,
  SBOptions,
} from "@hyperinkstudio/services";
import { update } from "@hyperinkstudio/services";
import { TABLE_TATTOO_REQUEST as TABLE } from "./consts";

export async function updateTattooRequest(
  client: Client,
  values: Partial<TattooRequest>,
  by: By<"tattoo_request">[],
  opts?: SBOptions,
) {
  if (opts?.returnType) {
    return update(client, TABLE, values, by, opts);
  }

  return update(client, TABLE, values, by);
}
