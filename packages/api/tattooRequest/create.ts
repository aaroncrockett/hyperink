import type { Client, TattooRequest } from "@hyperinkstudio/services";
import { insert } from "@hyperinkstudio/services";
import { TABLE_TATTOO_REQUEST as TABLE } from "./consts";

export async function createTattooRequest(
  client: Client,
  values: Partial<TattooRequest>,
  returnType?: "select" | "single",
) {
  if (returnType) {
    return insert(client, TABLE, values, returnType);
  }

  return insert(client, TABLE, values);
}
