import { createSupabaseGetQueries } from "@hyperink/api";
import type { Client } from "@hyperink/service-providers";

import { type TattooUIRow } from "@hyperink/api/tattoo";

import type { DBKeyValue } from "../../types";

const baseGetTatttos = createSupabaseGetQueries("tattoo_image", null);

export const getTattoos = async (
  client: Client,
  selectKeys: (keyof TattooUIRow)[],
  where: DBKeyValue<TattooUIRow>[],
) => {
  const execute = {
    method: "select",
    keys: selectKeys,
  } as const;

  return baseGetTatttos.sbGetWhere<TattooUIRow>(client, where, execute);
};

// export const getTattoosWithin = async (
//   client: Client,
//   selectKeys: (keyof TattooUIRow)[],
//   within: DBKeyValue<TattooUIRow>[],
// ) => {
//   const execute = {
//     method: "select",
//     keys: selectKeys,
//   } as const;

//   return baseGetTatttos.sbGetWithin<TattooUIRow>(client, within, execute);
// };

export const getTattoosLimitByRecent = async (
  client: Client,
  selectKeys: (keyof TattooUIRow)[],
  where: DBKeyValue<TattooUIRow>[],
) => {
  const execute = {
    method: "select",
    keys: selectKeys as string[],
  } as const;

  return baseGetTatttos.sbGetWhere<any>(client, where, execute, (query) =>
    query.order("created_at", { ascending: false }).limit(30),
  );
};
