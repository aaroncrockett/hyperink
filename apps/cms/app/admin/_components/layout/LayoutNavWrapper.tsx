"use client";

import { Nav } from "./Nav";
import { MENU_ADMIN_LINKS } from "@/consts";

export function LayoutNavWrapper() {
  return (
    <div className="pt-3 w-full h-full whitespace-nowrap">
      <Nav
        ulCls="h-full w-auto"
        linkCls="font-bold uppercase"
        linkColorCls="!text-primary-500"
        layout="col"
        iconSizeCls="lg"
        linkGapCls="gap-2"
        showIcon={true}
        links={MENU_ADMIN_LINKS}
      />
    </div>
  );
}
