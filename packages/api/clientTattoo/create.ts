import type { Client, ClientTattoo } from "@hyperinkstudio/services";
import { insert } from "@hyperinkstudio/services";
import { TABLE_CLIENT_TATTOO } from "./consts";

export async function createClientTattoo(
  client: Client,
  params: Partial<ClientTattoo>,
) {
  return insert(client, TABLE_CLIENT_TATTOO, params, "single");
}
