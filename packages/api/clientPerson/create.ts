import type { Client, ClientAsClientPerson } from "@hyperinkstudio/services";
import { insert } from "@hyperinkstudio/services";

import { TABLE_CLIENT_PERSON } from "./consts";

export async function createClientPerson(
  client: Client,
  params: Partial<ClientAsClientPerson>,
  user_id: string,
) {
  const values = { user_id: user_id, ...params };
  const { data, error } = await insert(
    client,
    TABLE_CLIENT_PERSON,
    values,
    "single",
  );
  const clientData = data as ClientAsClientPerson;

  return { data: clientData, error };
}
