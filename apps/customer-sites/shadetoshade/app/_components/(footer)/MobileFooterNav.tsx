"use client";
import { ComponentPropsWithoutRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// Hyper Ink
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// @'s
import { cn } from "@/utils/cn";
// Local
import { MOBILE_FOOTER_LINKS, INTERNAL_LINKS } from "@/consts";

import styles from "../(footer)/Footer.module.css";

type NavProps = ComponentPropsWithoutRef<"nav">;

export default function NavController({
  className,

  ...props
}: NavProps) {
  const searchParams = useSearchParams();
  return (
    <nav className={cn(className, styles.footer)} {...props}>
      <ul className="flex flex-row justify-around w-full gap-4">
        {MOBILE_FOOTER_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.href}>
              <Link
                href={getHrefWithSearchParams(link.href, searchParams)}
                className="flex flex-col gap-0.5 items-center font-bold text-sm text-white"
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
