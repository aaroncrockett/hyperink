import { Dock, DoorOpen, Tag, Zap } from "lucide-react";

const ADMIN_ROOT = "/admin";

export const ADMIN = {
  href: ADMIN_ROOT,
  name: "Admin",
  icon: Dock,
};
export const ADMIN_TATT_REQ = {
  href: `${ADMIN_ROOT}/tattoo-requests`,
  name: "Tatt Requests",
  icon: DoorOpen,
  shortName: "Tatt Req",
};
export const ADMIN_TAGGING_OPTS = {
  href: `${ADMIN_ROOT}/tagging-opts`,
  name: "Tagging Options",
  icon: Tag,
};
export const ADMIN_FLASH = {
  href: `${ADMIN_ROOT}/flash`,
  name: "Flash",
  icon: Zap,
};
export const ADMIN_FLASH_UPLOAD = {
  href: `${ADMIN_ROOT}/flash/upload`,
  name: "Upload Flash",
  icon: Zap,
};

// ADMIN PATH CATEGORY LINKS

export const INTERNAL_ADMIN_FLASH_LINKS = {
  flash: ADMIN_FLASH,
  upload: ADMIN_FLASH_UPLOAD,
};

// ALL ADMIN LINKS
export const INTERNAL_ADMIN_LINKS = {
  admin: ADMIN,
  tattReq: ADMIN_TATT_REQ,
  taggingOpts: ADMIN_TAGGING_OPTS,
  flash: ADMIN_FLASH,
  flashUpload: ADMIN_FLASH_UPLOAD,
};

export const MENU_ADMIN_LINKS = Object.values(INTERNAL_ADMIN_LINKS);
