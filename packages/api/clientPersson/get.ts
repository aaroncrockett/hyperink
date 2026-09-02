// Local
import { type Client, getBy } from "@hyperinkstudio/services";
import { TABLE_CLIENT_PERSON as TABLE } from "./consts";
// Utils

export async function getClientsPersonsByEmail(client: Client, email: string) {
  // const { data, error } = await authedClient
  //   .from(TABLE)
  //   .select("*")
  //   .eq("email", email);

  const { data, error } = await getBy(
    client,
    TABLE,
    [],
    [{ field: "email", value: email }],
  );

  return { data, error };
}

// export async function getClientPersonsByEmailOrPhone(
//   client: Client,
//   email: string,
//   phone: string,
// ) {
//   return client
//     .from(TABLE)
//     .select("*")
//     .or(`email.eq.${email},phone.eq.${phone}`);
// }

// replace
export async function getClientPersonsRecentlyUpdated(
  authedClient: Client,
  limit = 10,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(limit);

  return { data, error };
}
