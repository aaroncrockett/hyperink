import type { Client, TattooRequest } from "@hyperinkstudio/services";
import { TABLE_TATTOO_REQUEST as TABLE } from "./consts";
import { get, getBy } from "@hyperinkstudio/services";

export async function getRecentlyCreatedRequests(
  client: Client,
  select: Partial<TattooRequest>[] = [],
  limit = 10,
) {
  const { data, error } = await get(client, TABLE, select, { limit });

  return { data, error };

  // Keep for a a while in case abstraction doesnt work - 9/1/26
  // const { data, error } = await client
  //   .from(TABLE)
  //   .select("*")
  //   .order("updated_at", { ascending: false })
  //   .limit(limit);
}

export async function getTattooRequestById(client: Client, id: string) {
  const { data: dataArray, error } = await getBy(
    client,
    TABLE,
    [],
    [
      {
        field: "id",
        value: id,
      },
    ],
  );

  const data = dataArray ? dataArray[0] : null;

  return { data, error };
}
