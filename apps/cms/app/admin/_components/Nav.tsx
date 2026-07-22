"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@hyperinkstudio/utils/cn";

type NavsProps = {
  links: {
    href: string;
    label: string;
  }[];
  layout?: "col" | "row";
  cls?: string;
  gap?: string;
  textSize?: string;
  linkCls?: string;
  linkClsColor?: string;
  linkClsPadding?: string;
  linkClsHover?: string;
  linkCurrentCls?: string;
};

export function Nav({
  links,
  layout = "row",
  cls = "",
  gap = "gap-2",
  textSize = "",
  linkCls = "",
  linkClsColor = "text-primary-400-600",
  linkClsPadding = "px-3 py-2",
  linkClsHover = " hover:underline",
  linkCurrentCls = "text-surface-400-600! underline",
}: NavsProps) {
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
                pathname === link.href && linkCurrentCls,
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
