//create or get client
import type { SupabaseClient } from "@supabase/supabase-js";
let client: undefined | SupabaseClient = undefined;

import type { CreateClient, SupabaseConfig } from "../types";

import { createServerClient as createSupabaseServerClient } from "@supabase/ssr";

const createServerClient: CreateClient = async (config: SupabaseConfig) => {
  return createSupabaseServerClient(
    config.publicKey,
    config.publicUrl,
    config.cookieMethods,
  );
};

export const createOrGetClient = async (config?: SupabaseConfig) => {
  if (client) return client;

  if (!config) {
    throw new Error("Supabase config is required to create a client");
  }

  return await createServerClient(config);
};

export * from "./auth";
