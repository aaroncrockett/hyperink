import type { CreateClient, SupabaseConfig, Database } from "./types";

import { createServerClient as createClient } from "@supabase/ssr";

export const createServerClient: CreateClient = async (
  config: SupabaseConfig,
) => {
  return createClient<Database>(config.publicUrl, config.publicKey, {
    cookies: config.cookieMethods.cookies,
  });
};
