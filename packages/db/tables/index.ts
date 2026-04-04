import type { UserImage } from "./types";

type TattooStyle = NonNullable<UserImage["styles"]>[number];
type TattooCollection = NonNullable<UserImage["collection"]>;
type TattooGroup = NonNullable<UserImage["groups"]>[number];
type TattooTag = NonNullable<UserImage["tags"]>[number];

export const tattooStyles: TattooStyle[] = [
  "traditional",
  "illustrational",
  "blackwork",
  "micro",
  "photo-realism",
].map((item) => item.toLowerCase() as TattooStyle);

export const tattooCollections: TattooCollection[] = [
  "Queer & Spicey - Filtered",
  "Queery & Spicey - Collage",
  "Neo-expressionist",
  "Pixel Tatts",
  "Gaymer/Anime",
  "Just Whatever",
].map((item) => item.toLowerCase() as TattooCollection);

export const tattooTags: TattooTag[] = [
  "color",
  "blackwork",
  "black & gray",
  "photo-based illustrational",
].map((item) => item.toLowerCase() as TattooTag);

export const tattooGroups: TattooGroup[] = [
  "flash",
  "tattoos",
  "portfolio-tattoos",
  "hp",
].map((item) => item.toLowerCase() as TattooGroup);
