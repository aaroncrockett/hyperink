import { ADMIN_ROOT } from "../consts";

// create the ID per object to help ensure the last href segment always matches the ID. Parts of the app depend on this relationship (Admin Navs for instance).

const FLASH_ID = "flash";
export const ROOT = {
  href: `${ADMIN_ROOT}/${FLASH_ID}`,
  icon: "zap",
  id: FLASH_ID,
  name: "Flash",
  order: 1,
};

const UPLOAD_ID = "upload";
export const UPLOAD = {
  href: `${ADMIN_ROOT}/flash/${UPLOAD_ID}`,
  icon: UPLOAD_ID,
  id: UPLOAD_ID,
  name: "Upload",
  order: 2,
};

const PREFS_ID = "preferences";
export const PREFERENCES = {
  href: `${ADMIN_ROOT}/flash/${PREFS_ID}`,
  icon: "settings",
  id: PREFS_ID,
  name: "Prefs",
  order: 3,
};

// ALL FLASH LINKS
export const FLASH_LINKS = {
  flash: ROOT,
  upload: UPLOAD,
  preferences: PREFERENCES,
};
