"use client";

// Lucide React
import type { LucideIcon } from "lucide-react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// Hyper ink
import { cn } from "@hyperinkstudio/utils/cn";

type NavLink = {
  href: string;
  name: string;
  icon?: LucideIcon;
};

type NavsProps = {
  links: NavLink[];
  showIcon: boolean;
  iconCls?: string;
  iconSizeCls?: string;
  layout?: "col" | "row";
  layoutGap?: string;
  liCls?: string;
  linkCls?: string;
  linkClsColor?: string;
  linkClsGap?: string;
  linkClsHover?: string;
  linkClsLayout?: string;
  linkClsPadding?: string;
  linkCurrentCls?: string;
  textSizeCls?: string;
  ulCls?: string;
};

export function Nav({
  showIcon,
  layout = "row",
  layoutGap = "gap-2",
  liCls,
  linkCls = "",
  linkClsColor = "text-primary-500",
  linkClsGap = "gap-2",
  linkClsHover = " hover:underline",
  linkClsLayout = "flex flex-row items-center",
  linkClsPadding = "px-3 py-2",
  linkCurrentCls = "text-surface-400-600! underline",
  iconCls,
  iconSizeCls,
  links,
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
            <Link
              className={cn(
                linkCls,
                linkClsColor,
                linkClsGap,
                linkClsHover,
                linkClsLayout,
                linkClsPadding,
                pathname === link.href && linkCurrentCls,
              )}
              href={link.href}
            >
              {showIcon && link.icon && (
                <link.icon className={cn(iconCls, iconSizeCls)} />
              )}
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
