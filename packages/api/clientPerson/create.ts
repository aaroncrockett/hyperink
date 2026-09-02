import type { Client, ClientAsClientPerson } from "@hyperinkstudio/services";
import { insert } from "@hyperinkstudio/services";

import { TABLE_CLIENT_PERSON } from "./consts";

export async function createClientPerson(
  client: Client,
  params: Partial<ClientAsClientPerson>,
) {
  const { data, error } = await insert(
    client,
    TABLE_CLIENT_PERSON,
    params,
    "single",
  );

  return { data, error };
}
