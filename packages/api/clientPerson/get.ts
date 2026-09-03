// Local
import { type Client, getBy, get } from "@hyperinkstudio/services";
import { TABLE_CLIENT_PERSON } from "./consts";

export async function getClientPersonBy(client: Client, email: string) {
  return await getBy(
    client,
    TABLE_CLIENT_PERSON,
    [],
    [
      {
        field: "email",
        value: email,
      },
    ],
  );
}

export async function getClientPersons(client: Client) {
  return await get(client, TABLE_CLIENT_PERSON, []);
}
