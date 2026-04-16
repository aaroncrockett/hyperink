import type {
  TattooStyle,
  TattooCollection,
  TattooTag,
  TattooGroup,
} from "./index";

export const TATTOO_STYLES: TattooStyle[] = [
  "traditional",
  "illustrational",
  "blackwork",
  "micro",
  "photo-realism",
] satisfies readonly TattooStyle[];

export const TATTOO_COLLECTIONS: TattooCollection[] = [
  "queer & spicey - filtered",
  "queery & spicey - collage",
  "neo-expressionist",
  "pixel tatts",
  "gaymer/anime",
  "just whatever",
] satisfies readonly TattooCollection[];

export const TATTOO_TAGS: TattooTag[] = [
  "color",
  "blackwork",
  "black & gray",
  "photo-based illustrational",
] satisfies readonly TattooTag[];

export const TATTOO_GROUPS: TattooGroup[] = [
  "flash",
  "tattoos",
  "portfolio-tattoos",
  "hp",
].map((item) => item.toLowerCase() as TattooGroup);
