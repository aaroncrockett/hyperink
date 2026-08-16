"use client";

// Lucide React
import type { LucideIcon } from "lucide-react";

// Next
import { usePathname } from "next/navigation";
// Hyper ink
import { cn } from "@hyperinkstudio/utils/cn";
// @ui
import { NextLinkWrapper } from "@/ui";

type NavLink = {
  href: string;
  name: string;
  icon?: LucideIcon;
};

type NavsProps = {
  iconCls?: string;
  iconLeftPadding?: string;
  iconSizeCls?: string;
  layout?: "col" | "row";
  layoutGap?: string;
  liCls?: string;
  linkCls?: string;
  linkColorCls?: string;
  linkGapCls?: string;
  linkHoverCls?: string;
  linkLayoutCls?: string;
  linkPaddingCls?: string;
  linkCurrentCls?: string;
  links: NavLink[];
  showIcon: boolean;
  textSizeCls?: string;
  ulCls?: string;
};

export function Nav({
  iconCls,
  iconLeftPadding = "pl-2",
  iconSizeCls,
  layout = "row",
  layoutGap = "gap-1",
  liCls,
  linkCls = "",
  linkColorCls = "text-primary-500",
  linkGapCls = "gap-2",
  linkHoverCls = " hover:text-primary-100",
  linkLayoutCls = "flex flex-row items-center",
  linkPaddingCls = "px-3 py-2",
  linkCurrentCls = "!text-surface-950 bg-primary-600",
  links,
  showIcon,
  textSizeCls = "",
  ulCls = "",
}: NavsProps) {
  const pathname = usePathname();

  const flexLayout = layout === "row" ? "flex flex-row" : "flex flex-col";

  return (
    <ul className={cn(flexLayout, layoutGap, textSizeCls, ulCls)}>
      {links.map((link) => {
        return (
          <li className={liCls} key={link.href}>
            <NextLinkWrapper
              className={cn(
                linkCls,
                linkColorCls,
                linkGapCls,
                linkHoverCls,
                linkLayoutCls,
                linkPaddingCls,
                pathname === link.href && linkCurrentCls,
              )}
              href={link.href}
            >
              {showIcon && link.icon && (
                <link.icon
                  className={cn(iconCls, iconSizeCls, iconLeftPadding)}
                />
              )}
              {link.name}
            </NextLinkWrapper>
          </li>
        );
      })}
    </ul>
  );
}
