import type { UserImage } from "./index";
export const TATTOO_OPTIONS = [
  "styles",
  "collections",
  "groups",
  "tags",
] as const satisfies readonly (keyof UserImage)[];
