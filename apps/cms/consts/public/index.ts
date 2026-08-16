import { Brain, Home, Info } from "lucide-react";
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
  icon: Brain,
};

// ALL PUBLIC LINKS
export const INTERNAL_PUBLIC_LINKS = {
  faq: FAQ,
  pricing: PRICING,
};

export const MENU_PUBLIC_LINKS = Object.values(INTERNAL_PUBLIC_LINKS);
