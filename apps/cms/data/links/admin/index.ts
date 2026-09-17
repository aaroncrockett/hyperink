import { FLASH_LINKS } from "./flash";
export const ADMIN_ROOT = "/admin";

export const ADMIN = {
  href: ADMIN_ROOT,
  name: "Admin",
  icon: "dock",
  transition: "slide-up",
};
export const ADMIN_TATT_REQ = {
  href: `${ADMIN_ROOT}/tattoo-requests`,
  name: "Tatt Requests",
  icon: "doorOpen",
  transition: "dynamic",
  shortName: "Tatt Req",
};
export const ADMIN_OPTIONS = {
  href: `${ADMIN_ROOT}/tagging-opts`,
  name: "Tagging Options",
  icon: "tag",
};
export const ADMIN_PROFILE = {
  href: `${ADMIN_ROOT}/profile`,
  name: "Profile",
  icon: "user",
};

// ALL ADMIN LINKS
export const INTERNAL_ADMIN_LINKS = {
  admin: ADMIN,
  flash: FLASH_LINKS.flash,
  tattReq: ADMIN_TATT_REQ,
  options: ADMIN_OPTIONS,
  profile: ADMIN_PROFILE,
};

export const INTERNAL_FLASH_LINKS = FLASH_LINKS;

export const MENU_ADMIN_LINKS = Object.values(INTERNAL_ADMIN_LINKS);
export const FLASH_LINKS_LIST = Object.values(FLASH_LINKS);
