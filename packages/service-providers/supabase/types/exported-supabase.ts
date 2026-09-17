import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";
import type { Database as DatabaseSrc, Tables } from "./supabase";

export type Client = SupabaseClient<Database>;
export type AuthUser = User;

export type Database = DatabaseSrc;

export interface Cookies {
  cookies: {
    getAll: () => Array<{
      name: string;
      value: string;
      options?: Record<string, unknown>;
    }>;

    setAll: (
      cookiesToSet: Array<{
        name: string;
        value: string;
        options?: Record<string, unknown>;
      }>,
    ) => void;
  };
}

export interface SupabaseConfig {
  publicKey: string;
  publicUrl: string;
  cookieMethods: Cookies;
}

export type Vendor = "supabase";

export type VendorConfigMap = {
  supabase: SupabaseConfig;
};

export type CreateClient = <K extends Vendor>(
  config: VendorConfigMap[K],
) => Promise<Client>;
