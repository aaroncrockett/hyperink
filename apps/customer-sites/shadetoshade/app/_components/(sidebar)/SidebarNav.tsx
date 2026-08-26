"use client";
// React/Next
import { ComponentPropsWithoutRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// Hyperink
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// @'s
import { cn } from "@/utils/cn";
// Local
import { MENU_LINKS } from "@/consts";

type NavProps = ComponentPropsWithoutRef<"nav">;

export default function Nav({ ...props }: NavProps) {
  const searchParams = useSearchParams();

  return (
    <nav className={cn(props.className)} {...props}>
      <ul className="flex flex-col gap-2 px-4">
        {MENU_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href}>
              <Link
                href={getHrefWithSearchParams(link.href, searchParams)}
                className="flex flex-row items-center gap-2 text-primary-500! text-lg! font-bold hover:text-secondary-300!"
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
