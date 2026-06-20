import type { Client } from "../../../../index";

export function selectAllContaining(
  authedClient: Client,
  table: string,
  arrayName: string,
  containing: string[],
) {
  return authedClient.from(table).select("*").contains(arrayName, containing);
}
export async function getQueryWithLimit(query: any, limit?: number) {
  return limit !== undefined ? await query.limit(limit) : await query;
}
