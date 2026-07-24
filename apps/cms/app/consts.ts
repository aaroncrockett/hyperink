export const LINKS_ADMIN = {
  home: {
    href: "/admin",
    label: "Admin Home",
    icon: "Home",
    showIcon: true,
  },
  clients: {
    href: "/admin/clients",
    label: "Client Records",
    icon: "User",
    showIcon: true,
  },
  createClient: {
    href: "/admin/clients/create-client",
    label: "Create a Client",
    icon: "User",
    showIcon: true,
  },
  createTattooRecord: {
    href: "/admin/create-tattoo-record",
    label: "Create a tattoo record",
    icon: "PenTool",
    showIcon: true,
  },
  uploadTattooImages: {
    href: "/admin/upload-tattoo-images",
    label: "Upload tattoo images",
    icon: "Image",
    showIcon: true,
  },
  createFlash: {
    href: "/admin/create-flash",
    label: "Create Flash",
    icon: "Zap",
    showIcon: true,
  },
  createProfileTaggingOptions: {
    href: "/admin/create-tagging-opts",
    label: "Tagging Options",
    icon: "TagIcon",
    showIcon: true,
  },
} as const;

export const NAV_ADMIN = {
  home: {
    ...LINKS_ADMIN.home,
  },
  clients: {
    ...LINKS_ADMIN.clients,
  },
};
export const NAV_ADMIN_CLIENT = {
  client: {
    ...LINKS_ADMIN.clients,
    showIcon: false,
  },
  createClient: {
    href: "/admin/clients/create-clients",
    label: "Create a Client",
    icon: "User",
    showIcon: false,
  },
};
export const LINKS_ADMIN_LIST = Object.values(LINKS_ADMIN);
export const NAV_ADMIN_LIST = Object.values(NAV_ADMIN);
export const NAV_ADMIN_CLIENT_LIST = Object.values(NAV_ADMIN_CLIENT);
