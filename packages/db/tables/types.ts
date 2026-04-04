import type { Database } from "../supabase/types/";

type PlainRows<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends { Row: infer R } ? R : never;
};

type AppTables = PlainRows<Database["public"]["Tables"]>;

export type Profile = AppTables["profile"];
export type Tattoo = AppTables["tattoos"];
export type UserImage = AppTables["user_images"];
