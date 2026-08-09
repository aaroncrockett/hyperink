"use client";

import { Nav } from "./Nav";
import { MENU_ADMIN_LINKS } from "@/consts";

export function NavClientWrapper() {
  return (
    <Nav
      ulCls="h-full w-auto"
      layout="col"
      showIcon={true}
      links={MENU_ADMIN_LINKS}
    />
  );
}
