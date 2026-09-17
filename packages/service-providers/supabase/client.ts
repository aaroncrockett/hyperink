import type { SupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient as createClient } from "@supabase/ssr";
import type { Database } from "./types";

let client: SupabaseClient<Database>;

export const createBrowserClient = (
  publicURL: string,
  publicKey: string,
): SupabaseClient<Database> => {
  if (!client) {
    client = createClient<Database>(publicURL, publicKey);
  }

  return client;
};

export type { SupabaseClient };
