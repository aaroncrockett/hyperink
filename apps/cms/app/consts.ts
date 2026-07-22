export const LINKS_ADMIN = {
  home: {
    href: "/admin",
    label: "Admin Home",
  },
  client: {
    href: "/admin/client",
    label: "Client Records",
  },
  createClient: {
    href: "/admin/client/create-client",
    label: "Create a Client",
  },
  createTattooRecord: {
    href: "/admin/create-tattoo-record",
    label: "Create a tattoo record",
  },
  uploadTattooImages: {
    href: "/admin/upload-tattoo-images",
    label: "Upload tattoo images",
  },
  createFlash: {
    href: "/admin/create-flash",
    label: "Create Flash",
  },
  createProfileTaggingOptions: {
    href: "/admin/create-tagging-opts",
    label: "Tagging Options",
  },
} as const;

export const NAV_ADMIN = {
  home: {
    ...LINKS_ADMIN.home,
  },
  client: {
    ...LINKS_ADMIN.client,
  },
};
export const NAV_ADMIN_CLIENT = {
  client: {
    ...LINKS_ADMIN.client,
  },
  createClient: {
    href: "/admin/client/create-client",
    label: "Create a Client",
  },
};
export const LINKS_ADMIN_LIST = Object.values(LINKS_ADMIN);
export const NAV_ADMIN_LIST = Object.values(NAV_ADMIN);
export const NAV_ADMIN_CLIENT_LIST = Object.values(NAV_ADMIN_CLIENT);
