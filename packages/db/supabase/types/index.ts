// Hard coded table consts for UI layer

import type { SupabaseClient } from "@supabase/supabase-js";

export type Client = SupabaseClient<Database>;

import type { Database } from "./tables";

type PlainRows<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends { Row: infer R } ? R : never;
};

type AppTables = PlainRows<Database["public"]["Tables"]>;

export type Profile = AppTables["profile"];
export type Tattoo = AppTables["tattoos"];
export type UserImage = AppTables["user_images"];

export type TattooStyle = NonNullable<UserImage["styles"]>[number];
export type TattooCollection = NonNullable<UserImage["collections"]>;
export type TattooGroup = NonNullable<UserImage["groups"]>[number];
export type TattooTag = NonNullable<UserImage["tags"]>[number];

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
