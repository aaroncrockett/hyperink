// Local
import { type Client, getBy, get } from "@hyperinkstudio/services";
import { TABLE_CLIENT_PERSON } from "./consts";
// Utils
import { getYearDateRange } from "@hyperinkstudio/utils";

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

export async function getClientPersons(client: Client, limit = 10) {
  return await get(client, TABLE_CLIENT_PERSON, []);
}
