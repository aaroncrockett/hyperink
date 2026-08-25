// PUBLIC LINKS
export const HOME = {
  href: "/",
  name: "Home",
  icon: "home",
  transition: "slide-up",
};

const FAQ = {
  href: "/faq",
  name: "Faq",
  icon: "info",
  transition: "slide-up",
};

const PRICING = {
  href: "/pricing",
  name: "Pricing",
  icon: "brain",
  transition: "slide-up",
};

export const LOGIN = {
  href: "/login",
  name: "Login",
  icon: "login",
  transition: "slide-up",
};

export const SIGNUP = {
  href: "/signup",
  name: "Signup",
  icon: "login",
  transition: "slide-up",
};

// ALL PUBLIC LINKS
export const INTERNAL_PUBLIC_LINKS = {
  faq: FAQ,
  pricing: PRICING,
};

export const MENU_PUBLIC_LINKS = Object.values(INTERNAL_PUBLIC_LINKS);
