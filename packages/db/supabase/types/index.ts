import {
  tattooCollections,
  tattooGroups,
  tattooStyles,
  tattooTags,
} from "../constants";

export type TattooCollection = (typeof tattooCollections)[number];
export type TattooGroup = (typeof tattooGroups)[number];
export type TattooStyle = (typeof tattooStyles)[number];
export type TattooTag = (typeof tattooTags)[number];
