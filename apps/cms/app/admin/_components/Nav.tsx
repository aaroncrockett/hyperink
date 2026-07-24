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
  cls?: string;
  gap?: string;
  iconSizeCls?: string;
  iconCls?: string;
  textSize?: string;
  layout?: "col" | "row";
  linkCls?: string;
  linkClsGap?: string;
  linkClsLayout?: string;
  linkClsColor?: string;
  linkClsPadding?: string;
  linkClsHover?: string;
  linkCurrentCls?: string;
};

export function Nav({
  cls = "",
  gap = "gap-2",
  iconSizeCls = "w-5 h-5",
  iconCls = "",
  layout = "row",
  linkCls = "flex flex-row",
  linkClsColor = "text-primary-400-600",
  linkClsGap = "gap-2",
  linkClsHover = " hover:underline",
  linkClsLayout = "flex flex-row items-center",
  linkClsPadding = "px-3 py-2",
  linkCurrentCls = "text-surface-400-600! underline",
  links,
  textSize = "",
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
    <ul className={cn(flexLayout, gap, textSize, cls)}>
      {links.map((link) => {
        const Icon = link.icon && link.showIcon ? ICONS[link.icon] : null;

        return (
          <li key={link.href}>
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
