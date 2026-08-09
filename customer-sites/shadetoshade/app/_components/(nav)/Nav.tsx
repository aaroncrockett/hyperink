"use client";
// React/Next
import { ComponentPropsWithoutRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// Hyperink
import { getHrefWithSearchParams } from "@hyperinkstudio/helpers";
// @'s
import { cn } from "@/utils/cn";
// Local
import { MENU_LINKS } from "@/consts";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  ulCls?: string;
  liCls?: string;
  linkCls?: string;
};

export default function Nav({
  className,
  ulCls,
  liCls,
  linkCls,
  ...props
}: NavProps) {
  const searchParams = useSearchParams();

  return (
    <nav
      className={cn("col-start-1 row-start-1 row-span-3", className)}
      {...props}
    >
      <ul className={cn("flex flex-col gap-2", ulCls)}>
        {MENU_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href} className={cn(liCls)}>
              <Link
                href={getHrefWithSearchParams(link.href, searchParams)}
                className={cn(linkCls, "flex flex-row gap-2 font-bold")}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {link.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
