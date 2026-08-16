"use client";

import { Nav } from "./Nav";
import { MENU_ADMIN_LINKS } from "@/consts";

export function NavWrapper() {
  return (
    <div className="pt-3 w-full h-full">
      <Nav
        ulCls="h-full w-auto"
        linkCls="font-bold uppercase"
        linkColorCls="!text-primary-500"
        layout="col"
        iconSizeCls="h-6 w-6"
        linkGapCls="gap-2"
        showIcon={true}
        links={MENU_ADMIN_LINKS}
      />
    </div>
  );
}
