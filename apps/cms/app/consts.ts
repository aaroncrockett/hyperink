export const LINKS_ADMIN = {
  adminHome: {
    href: "/admin",
    label: "Admin Home",
  },
  createClient: {
    href: "/admin/create-client",
    label: "Create A Client",
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
} as const;

export const LINKS_ADMIN_ARRAY = Object.values(LINKS_ADMIN);
