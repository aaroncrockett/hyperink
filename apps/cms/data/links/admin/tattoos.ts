import { ADMIN_ROOT } from "./root";

const TATTOO_ID = "tattoos";
export const ROOT = {
  href: `${ADMIN_ROOT}/${TATTOO_ID}`,
  icon: "image",
  id: TATTOO_ID,
  name: "Tattoos",
  order: 1,
};

const UPLOAD_ID = "upload";
export const UPLOAD = {
  href: `${ADMIN_ROOT}/${TATTOO_ID}/${UPLOAD_ID}`,
  icon: UPLOAD_ID,
  id: UPLOAD_ID,
  name: "Upload",
  order: 2,
};

const PREFS_ID = "preferences";
export const PREFERENCES = {
  href: `${ADMIN_ROOT}/${TATTOO_ID}/${PREFS_ID}`,
  icon: "settings",
  id: PREFS_ID,
  name: "Prefs",
  order: 3,
};

// ALL TATTOO LINKS
export const TATTOOS_LINKS = {
  tattoos: ROOT,
  upload: UPLOAD,
  preferences: PREFERENCES,
};
