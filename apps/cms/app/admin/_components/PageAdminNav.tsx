"use client";

import { usePathname } from "next/navigation";
// hyperink
import { cn } from "@hyperinkstudio/utils/cn";
// @/ui
import { NextLinkWrapper } from "@/ui";

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
  linkColorCls?: string;
  linkPaddingCls?: string;
  linkHoverCls?: string;
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
  linkColorCls = "text-tertiary-500",
  linkPaddingCls = "px-3 py-2",
  linkHoverCls = " hover:bg-primary-100-900",
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
            <NextLinkWrapper
              className={cn(
                linkCls,
                linkColorCls,
                linkPaddingCls,
                linkHoverCls,
                pathname === link.href && linkClsCurrent,
                linkClsWeight,
              )}
              href={link.href}
            >
              {link.name}
            </NextLinkWrapper>
          </li>
        );
      })}
    </ul>
  );
}
