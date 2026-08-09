"use client";
// React/Next
import { ComponentPropsWithoutRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// Hyperink
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// @'s
import { cn } from "@/utils/cn";
// Local
import { MENU_ADMIN_LINKS, MENU_PUBLIC_LINKS, ADMIN } from "@/consts";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  dir?: "col" | "row";
  gapCls?: string;
  isAdmin?: boolean | null;
  liCls?: string;
  linkCls?: string;
  pathname: string;
  showIcon?: boolean;
  ulCls?: string;
};

export default function Nav({
  className,
  dir = "col",
  gapCls = "gap-2",
  isAdmin = null,
  liCls,
  linkCls,
  pathname,
  showIcon = true,
  ulCls,
  ...props
}: NavProps) {
  const searchParams = useSearchParams();

  const links =
    isAdmin !== null && isAdmin ? MENU_ADMIN_LINKS : MENU_PUBLIC_LINKS;

  const flexLayout = dir === "col" ? "flex flex-col" : "flex flex-row";

  return (
    <nav
      className={cn("col-start-1 row-start-1 row-span-3", className)}
      {...props}
    >
      <ul className={cn(flexLayout, gapCls, ulCls)}>
        {links
          .filter((link) => pathname !== link.href)
          .map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href} className={cn(liCls)}>
                <Link
                  href={getHrefWithSearchParams(link.href, searchParams)}
                  className={cn(linkCls, "flex flex-row gap-4 font-bold")}
                >
                  {Icon && showIcon && <Icon className="w-5 h-5" />}
                  {link.name.toUpperCase()}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
