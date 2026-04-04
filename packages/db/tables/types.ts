// import {
//   tattooCollections,
//   tattooGroups,
//   tattooStyles,
//   tattooTags,
// } from "./index";

import type { Database } from "../supabase/types/";

// export type TattooCollection = (typeof tattooCollections)[number];
// export type TattooGroup = (typeof tattooGroups)[number];
// export type TattooStyle = (typeof tattooStyles)[number];
// export type TattooTag = (typeof tattooTags)[number];

type PlainRows<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends { Row: infer R } ? R : never;
};

type AppTables = PlainRows<Database["public"]["Tables"]>;

export type Profile = AppTables["profile"];
export type Tattoo = AppTables["tattoos"];
export type UserImage = AppTables["user_images"];
