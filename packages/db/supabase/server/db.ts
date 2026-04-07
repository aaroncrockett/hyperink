import { SupabaseClient } from "@supabase/supabase-js";

const table = "user-images"

export function addImage() {

}


 export  async function insertRow(client: SupabaseClient,{ table, values }) {
    const { data, error } = await client.from(table).insert(values);
    return { data, error };
 }
  export async function selectFrom(client: SupabaseClient,{ table, values }) {
    const { data, error } = await client
      .from(table)
      .select(values.select)
      .contains(values.contains.key, values.contains.value)
      .order(values.order.key, values.order.value);

    return { data, error };
  },