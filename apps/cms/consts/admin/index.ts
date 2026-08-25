import { FLASH_LINKS } from "./flash";
import { ADMIN_ROOT } from "../consts";

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
export const ADMIN_TAGGING_OPTS = {
  href: `${ADMIN_ROOT}/tagging-opts`,
  name: "Tagging Options",
  icon: "tag",
};

// ALL ADMIN LINKS
export const INTERNAL_ADMIN_LINKS = {
  admin: ADMIN,
  tattReq: ADMIN_TATT_REQ,
  taggingOpts: ADMIN_TAGGING_OPTS,
  flash: FLASH_LINKS.flash,
};

export const INTERNAL_FLASH_LINKS = FLASH_LINKS;

export const MENU_ADMIN_LINKS = Object.values(INTERNAL_ADMIN_LINKS);
export const FLASH_LINKS_LIST = Object.values(FLASH_LINKS);
