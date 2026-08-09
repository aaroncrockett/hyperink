import * as Types from "./types";
import * as BASE from "./base";

export const TAGGING_OPTS_BASE_FORM = {
  collections: BASE.COLLECTIONS,
  styles: BASE.STYLES,
  studio_locations: BASE.STUDIO_LOCATIONS,
  placement_locations: BASE.AVAIL_SIZES,
} as const satisfies Partial<
  Record<Types.ProfileTaggingOptionsKey, Types.ProfileTaggingOptionsData>
>;
