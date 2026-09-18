"use client";
//
import { Icon } from "@hyperink/ui-react/components";
//
import { NextLinkWrapper } from "@/ui";
import { MENU_ADMIN_LINKS } from "@/data/links";

export function Nav({}) {
  return (
    <ul className="flex flex-col w-auto h-full">
      {MENU_ADMIN_LINKS.map((link) => {
        return (
          <li
            className="font-bold text-primary-500 uppercase"
            key={link.href + link.name + "-admin-nav"}
          >
            <NextLinkWrapper href={link.href}>
              <Icon size="lg" name={link.icon} />

              {link.name}
            </NextLinkWrapper>
          </li>
        );
      })}
    </ul>
  );
}
