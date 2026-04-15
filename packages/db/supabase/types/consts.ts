import type {
  TattooStyle,
  TattooCollection,
  TattooTag,
  TattooGroup,
} from "./index";

export const TattooStyles: TattooStyle[] = [
  "traditional",
  "illustrational",
  "blackwork",
  "micro",
  "photo-realism",
].map((item) => item.toLowerCase() as TattooStyle);

export const TattooCollections: TattooCollection[] = [
  "Queer & Spicey - Filtered",
  "Queery & Spicey - Collage",
  "Neo-expressionist",
  "Pixel Tatts",
  "Gaymer/Anime",
  "Just Whatever",
].map((item) => item.toLowerCase() as TattooCollection);

export const TattooTags: TattooTag[] = [
  "color",
  "blackwork",
  "black & gray",
  "photo-based illustrational",
].map((item) => item.toLowerCase() as TattooTag);

export const TattooGroups: TattooGroup[] = [
  "flash",
  "tattoos",
  "portfolio-tattoos",
  "hp",
].map((item) => item.toLowerCase() as TattooGroup);
