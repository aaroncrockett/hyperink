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

type TattooStyle = NonNullable<UserImage["styles"]>[number];
type TattooCollection = NonNullable<UserImage["collection"]>;
type TattooGroup = NonNullable<UserImage["groups"]>[number];
type TattooTag = NonNullable<UserImage["tags"]>[number];

export const tattooStyles: TattooStyle[] = [
  "traditional",
  "illustrational",
  "blackwork",
  "micro",
  "photo-realism",
].map((item) => item.toLowerCase() as TattooStyle);

export const tattooCollections: TattooCollection[] = [
  "Queer & Spicey - Filtered",
  "Queery & Spicey - Collage",
  "Neo-expressionist",
  "Pixel Tatts",
  "Gaymer/Anime",
  "Just Whatever",
].map((item) => item.toLowerCase() as TattooCollection);

export const tattooTags: TattooTag[] = [
  "color",
  "blackwork",
  "black & gray",
  "photo-based illustrational",
].map((item) => item.toLowerCase() as TattooTag);

export const tattooGroups: TattooGroup[] = [
  "flash",
  "tattoos",
  "portfolio-tattoos",
  "hp",
].map((item) => item.toLowerCase() as TattooGroup);

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
  clientType: "server" | "client";
  publicKey: string;
  publicUrl: string;
  cookieMethods: Cookies;
}

export type Vendor = "supabase";

export type VendorConfigMap = {
  supabase: SupabaseConfig;
};

export type CreateClient = <K extends Vendor>(
  vendor: K,
  config: VendorConfigMap[K],
) => Promise<Client>;
