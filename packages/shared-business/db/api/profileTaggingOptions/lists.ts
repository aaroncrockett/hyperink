//
// Lists -- Forms in an Array.
//

import { TAGGING_OPTS_BASE_FORM } from "./index";

export const TAGGING_OPTS_BASE_FORM_LIST = Object.entries(
  TAGGING_OPTS_BASE_FORM,
).map(([key, value]) => ({
  key,
  ...value,
}));
