import {
  Home,
  Info,
  LayoutDashboard,
  PartyPopperIcon,
  BrainIcon,
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

// ADMIN LINKS
export const ADMIN_TATT_REQ = {
  href: `${ADMIN_ROOT}/tattoo-requests`,
  name: "Tatt Requests",
  icon: PartyPopperIcon,
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
};

// LISTS
export const MENU_PUBLIC_LINKS = Object.values(INTERNAL_PUBLIC_LINKS);

export const MENU_ADMIN_LINKS = Object.values(INTERNAL_ADMIN_LINKS);
