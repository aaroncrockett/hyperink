import { ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import NavBase from "./NavBase";
import {
  MENU_LINKS,
  MOBILE_FOOTER_LINKS,
} from "../../constants/internal-links";

import { cn } from "@/utils/cn";

type NavType = "desktop" | "mobile" | "mobile-footer";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  type: NavType;
};

const navCls = {
  desktop: "col-start-1 row-start-1 row-span-3 bg-gray-10",
  mobile: "",
  "mobile-footer": "",
};
const ulCls: Record<NavType, string> = {
  desktop: "flex flex-col gap-2",
  mobile: "flex flex-col gap-2",
  "mobile-footer": "flex flex-row justify-around gap-4 w-full",
};
const linkCls: Record<NavType, string> = {
  desktop: "flex-row gap-2",
  mobile: "flex-row gap-2",
  "mobile-footer": "flex-col gap-0.5 items-center font-bold text-sm",
};

export default function NavController({ type, ...props }: NavProps) {
  const links = type === "mobile-footer" ? MOBILE_FOOTER_LINKS : MENU_LINKS;
  return (
    <NavBase className={navCls[type]} {...props}>
      <ul className={ulCls[type]}>
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <Link href={link.href} className={cn("flex", linkCls[type])}>
                {Icon && <Icon className="w-6 h-6" />}
                {link.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </NavBase>
  );
}
