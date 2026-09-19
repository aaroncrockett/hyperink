import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";
import type { Database as DatabaseSrc } from "./supabase";

export type Client = SupabaseClient<DatabaseSrc>;
export type AuthUser = User;
export type Database = DatabaseSrc;
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

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
