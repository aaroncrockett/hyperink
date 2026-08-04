"use client";

import {
  Home,
  TagIcon,
  Zap,
  PenTool,
  User,
  Image,
  ClipboardList,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@hyperinkstudio/utils/cn";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

type NavsProps = {
  links: {
    href: string;
    label: string;
    icon: string;
    showIcon: boolean;
  }[];
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
  iconCls = "",
  iconSizeCls = "w-5 h-5",
  layout = "row",
  layoutGap = "gap-2",
  liCls,
  linkCls = "",
  linkClsColor = "text-primary-400-600",
  linkClsGap = "gap-2",
  linkClsHover = " hover:underline",
  linkClsLayout = "flex flex-row items-center",
  linkClsPadding = "px-3 py-2",
  linkCurrentCls = "text-surface-400-600! underline",
  links,
  textSizeCls = "",
  ulCls = "",
}: NavsProps) {
  const pathname = usePathname();

  const flexLayout = layout === "row" ? "flex flex-row" : "flex flex-col";

  const ICONS: Record<
    string,
    ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
  > = {
    Home: Home,
    TagIcon: TagIcon,
    Zap: Zap,
    PenTool: PenTool,
    User: User,
    Image: Image,
    ClipboardList: ClipboardList,
  };

  return (
    <ul className={cn(flexLayout, layoutGap, textSizeCls, ulCls)}>
      {links.map((link) => {
        const Icon = link.icon && link.showIcon ? ICONS[link.icon] : null;

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
              {Icon && <Icon className={cn(iconCls, iconSizeCls)} />}
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
