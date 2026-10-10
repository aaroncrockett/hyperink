import { ADMIN_ROOT } from "./root";

import { FLASH_LINKS } from "./flash";
import { TATTOOS_LINKS } from "./tattoos";

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
  href: `${ADMIN_ROOT}/options`,
  name: "Options",
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
  tattoos: TATTOOS_LINKS.tattoos,
  tattReq: ADMIN_TATT_REQ,
  options: ADMIN_OPTIONS,
};

export const INTERNAL_FLASH_LINKS = FLASH_LINKS;
export const INTERNAL_TATTOOS_LINKS = TATTOOS_LINKS;

export const MENU_ADMIN_LINKS = Object.values(INTERNAL_ADMIN_LINKS);

export const FLASH_LINKS_LIST = Object.values(FLASH_LINKS);
export const FLASH_LINKS_KEYS = Object.keys(FLASH_LINKS);

export const TATTOOS_LINKS_LIST = Object.values(TATTOOS_LINKS);
export const TATTOOS_LINKS_KEYS = Object.keys(TATTOOS_LINKS);
