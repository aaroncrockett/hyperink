import {
  BrainIcon,
  Home,
  Info,
  LayoutDashboard,
  PartyPopperIcon,
  PlugZap,
  TagIcon,
  ZapIcon,
} from "lucide-react";

const ADMIN_ROOT = "/admin";

// PUBLIC LINKS
export const HOME = {
  href: "/",
  name: "Home",
  icon: Home,
};

const FAQ = {
  href: "/faq",
  name: "FAQ",
  icon: Info,
};

const PRICING = {
  href: "/pricing",
  name: "Pricing",
  icon: BrainIcon,
};

// ADMIN LINKS
export const ADMIN = {
  href: ADMIN_ROOT,
  name: "Admin",
  icon: LayoutDashboard,
};
export const ADMIN_TATT_REQ = {
  href: `${ADMIN_ROOT}/tattoo-requests`,
  name: "Tatt Requests",
  icon: PartyPopperIcon,
};
export const ADMIN_TAGGING_OPTS = {
  href: `${ADMIN_ROOT}/tagging-opts`,
  name: "Tagging Options",
  icon: TagIcon,
};
export const ADMIN_FLASH = {
  href: `${ADMIN_ROOT}/flash`,
  name: "Flash",
  icon: ZapIcon,
};
export const ADMIN_FLASH_UPLOAD = {
  href: `${ADMIN_ROOT}/flash/upload`,
  name: "Upload Flash",
  icon: PlugZap,
};

// ALL PUBLIC LINKS
export const INTERNAL_PUBLIC_LINKS = {
  faq: FAQ,
  pricing: PRICING,
};

// ALL ADMIN LINKS
export const INTERNAL_ADMIN_LINKS = {
  admin: ADMIN,
  tattReq: ADMIN_TATT_REQ,
  taggingOpts: ADMIN_TAGGING_OPTS,
  flash: ADMIN_FLASH,
  flashUpload: ADMIN_FLASH_UPLOAD,
};

// LISTS
export const MENU_PUBLIC_LINKS = Object.values(INTERNAL_PUBLIC_LINKS);

export const MENU_ADMIN_LINKS = Object.values(INTERNAL_ADMIN_LINKS);
