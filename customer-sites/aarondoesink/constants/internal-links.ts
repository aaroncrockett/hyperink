import { Home, Info, Zap, PenTool, User, Book } from "lucide-react";

export const INTERNAL_LINKS = {
  home: {
    href: "/",
    name: "home",
    icon: Home,
  },
  faq: {
    href: "/faq",
    name: "faq",
    icon: Info,
  },
  flash: {
    href: "/flash",
    name: "flash",
    icon: Zap,
  },
  tattoos: {
    href: "/tattoos",
    name: "tattoos",
    icon: PenTool,
  },
  about: {
    href: "/about",
    name: "about me",
    icon: User,
  },
  book: {
    href: "/book",
    name: "book",
    icon: Book,
  },
};

export const MOBILE_FOOTER_LINKS = [
  INTERNAL_LINKS.flash,
  INTERNAL_LINKS.tattoos,
  INTERNAL_LINKS.faq,
];

export const MENU_LINKS = [
  INTERNAL_LINKS.home,
  ...MOBILE_FOOTER_LINKS,
  INTERNAL_LINKS.about,
  INTERNAL_LINKS.book,
];
