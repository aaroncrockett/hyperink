import * as Types from "./types";
import * as BASE from "./base";

export const TAGGING_OPTS_BASE_FORM = {
  avail_tattoo_sizes: BASE.AVAIL_SIZES,
  collections: BASE.COLLECTIONS,
  placement_locations: BASE.PLACEMENT_LOCATIONS,
  studio_locations: BASE.STUDIO_LOCATIONS,
  styles: BASE.STYLES,
  tags: BASE.TAGS,
} as const satisfies Partial<
  Record<Types.ProfileTaggingOptionsKey, Types.ProfileTaggingOptionsData>
>;
