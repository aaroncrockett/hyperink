"use client";
//
import { Icon } from "@hyperink/ui-react/components";
//
import { NextLinkWrapper } from "@/ui";
import { MENU_ADMIN_LINKS } from "@/data/links";

export function Nav() {
  return (
    <ul className="flex flex-col gap-3 w-auto h-full">
      {MENU_ADMIN_LINKS.map((link) => {
        return (
          <li key={link.href + link.name + "-admin-nav"}>
            <NextLinkWrapper
              className="flex flex-row gap-2 font-bold text-surface-200-800"
              href={link.href}
            >
              <Icon size="lg" name={link.icon} />

              {link.name}
            </NextLinkWrapper>
          </li>
        );
      })}
    </ul>
  );
}
