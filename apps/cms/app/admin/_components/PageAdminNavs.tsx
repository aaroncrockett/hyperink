"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@hyperinkstudio/utils/cn";

type PageAdminNavsProps = {
  link: {
    href: string;
    label: string;
  };
  cls?: string;
};

export function PageAdminNavs({
  link,
  cls = "text-primary-500 p-2 pt-3 hover:underline",
}: PageAdminNavsProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link
      className={cn(cls, isActive && "underline text-surface-500!")}
      href={link.href}
    >
      {link.label}
    </Link>
  );
}
