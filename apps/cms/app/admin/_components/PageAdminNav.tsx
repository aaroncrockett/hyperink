"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@hyperinkstudio/utils/cn";

type PageAdminNavsProps = {
  links: {
    href: string;
    name: string;
    [key: string]: unknown;
  }[];
  layout?: "col" | "row";
  cls?: string;
  gap?: string;
  textSize?: string;
  linkCls?: string;
  linkClsColor?: string;
  linkClsPadding?: string;
  linkClsHover?: string;
  linkClsCurrent?: string;
  linkClsWeight?: string;
};

export function PageAdminNav({
  links,
  layout = "row",
  cls = "flex gap-3",
  gap = "gap-2",
  textSize = "",
  linkCls = "",
  linkClsColor = "text-tertiary-500",
  linkClsPadding = "px-3 py-2",
  linkClsHover = " hover:bg-primary-100-900",
  linkClsCurrent = "underline text-surface-500!",
  linkClsWeight = "font-bold",
}: PageAdminNavsProps) {
  const pathname = usePathname();

  const flexLayout = layout === "row" ? "flex flex-row" : "flex flex-col";

  return (
    <ul className={cn(flexLayout, gap, textSize, cls)}>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              className={cn(
                linkCls,
                linkClsColor,
                linkClsPadding,
                linkClsHover,
                pathname === link.href && linkClsCurrent,
                linkClsWeight,
              )}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
