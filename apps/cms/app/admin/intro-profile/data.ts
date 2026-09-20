import type { ProfileUIRow } from "@hyperink/api/profile";
import type { UIRowMeta } from "@hyperink/api";

type IntroProfileForm = Pick<
  ProfileUIRow,
  | "bsky_id"
  | "first_name"
  | "last_name"
  | "preferred_name"
  | "email"
  | "instagram_id"
>;

type ProfileId = Pick<ProfileUIRow, "id">;

export const PROFILE_ID: UIRowMeta<ProfileId> = {
  id: {
    id: "id",
    label: "Id",
  },
};

export const PROFILE_METADATA: UIRowMeta<IntroProfileForm> = {
  bsky_id: {
    id: "bsky_id",
    label: "Bluesky ID",
  },
  first_name: {
    id: "first_name",
    label: "First name",
  },
  last_name: {
    id: "last_name",
    label: "Last name",
  },
  preferred_name: {
    id: "preferred_name",
    label: "Preferred name",
  },
  email: {
    id: "email",
    label: "Email",
  },
  instagram_id: {
    id: "instagram_id",
    label: "Instagram ID",
  },
};

export const PROFILE_METADATA_LIST = Object.values(PROFILE_METADATA);

export const CHECK_LIST = [
  { id: "use-instagram", match: "instagram_id", label: "instagram" },
  { id: "use-email", match: "email", label: "email" },
  { id: "use-bsky", match: "bsky_id", label: "blue sky" },
];
