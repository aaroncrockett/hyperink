import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/tables";

export async function insertRow<
  T extends keyof Database["public"]["Tables"],
  V extends Database["public"]["Tables"][T]["Insert"],
>(authedClient: SupabaseClient, table: T, values: V | V[]) {
  const { data, error } = await authedClient.from(table).insert(values);

  return { data, error };
}
