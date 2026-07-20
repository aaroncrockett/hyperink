// create or get client
import type { SupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient as createClient } from "@supabase/ssr";

let client: SupabaseClient | undefined;

export const createBrowserClient = (
  publicURL: string,
  publicKey: string,
): SupabaseClient => {
  if (!client) {
    client = createClient(publicURL, publicKey);
  }

  return client;
};

export type { SupabaseClient };
