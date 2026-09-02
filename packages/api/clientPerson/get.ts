// Local
import { type Client, getBy, get } from "@hyperinkstudio/services";
import { TABLE_CLIENT_PERSON } from "./consts";
// Utils
import { getYearDateRange } from "@hyperinkstudio/utils";

export async function getClientPersonBy(client: Client, email: string) {
  const { data, error } = await getBy(
    client,
    TABLE,
    [],
    [
      {
        field: "email",
        value: email,
      },
    ],
  );
  // const { data, error } = await authedClient
  //   .from(TABLE)
  //   .select("*")
  //   .eq("email", email);

  // return { data, error };
}

export async function getClientPersons(client: Client, limit = 10) {
  const { data, error } = await get(client, TABLE_CLIENT_PERSON, []);
}
