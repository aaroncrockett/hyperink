import type { SBOptions } from "./types";

export const handleOrder = <T extends { order: Function }>(
  query: T,
  opts: SBOptions,
) => {
  if (opts?.order) {
    query = query.order(opts.order.name, opts.order.opts as any);
  } else {
    query = query.order("updated_at", { ascending: false });
  }

  return query;
};

export const handleLimit = <T extends { limit: Function }>(
  query: T,
  opts: SBOptions,
) => {
  if (opts?.limit) {
    query = query.limit(opts.limit);
  }

  return query;
};
