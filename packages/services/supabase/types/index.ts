// Hard coded table consts for UI layer

import type { SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";

export type Client = SupabaseClient<Database>;
export type AuthUser = User;

import type { Database as DatabaseSrc } from "./supabase";

export type Database = DatabaseSrc;

type PlainRows<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends { Row: infer R } ? R : never;
};

export type AppTables = PlainRows<Database["public"]["Tables"]>;

export type ClientAsClientPerson = AppTables["client"];
export type ClientTattoo = AppTables["client_tattoo"];
export type Profile = AppTables["profile"];
export type ProfileTaggingOptions = AppTables["profile_tagging_options"];
export type TattooImage = AppTables["tattoo_image"];
export type TattooRequest = AppTables["tattoo_request"];
export type FlashRecord = AppTables["flash"];
export type FlashOptions = AppTables["flash_options"];

// Create Client

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

export type AllowedTable = keyof AppTables;

export type AppInserts = {
  [K in AllowedTable]: Partial<AppTables[K]>;
};

export type SBOrder = {
  name: string;
  opts?: {
    ascending?: boolean;
    nullsFirst?: boolean;
    foreignTable?: string;
    [key: string]: unknown;
  };
};

export type SBOptions = {
  limit?: number;
  order?: SBOrder;
  returnType?: "select" | "single";
  [key: string]: unknown;
};
