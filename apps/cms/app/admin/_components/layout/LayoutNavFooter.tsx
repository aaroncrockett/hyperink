"use client";
// React
import { ComponentPropsWithoutRef } from "react";
// Next
import { NextLinkWrapper } from "@/ui";
// @s
import { INTERNAL_ADMIN_LINKS, INTERNAL_FLASH_LINKS } from "@/data/links";
import { cn } from "@hyperink/utils";
import { Icon } from "@hyperink/ui-react/components";

type NavFooterProps = ComponentPropsWithoutRef<"nav"> & {
  ulCls?: string;
  liCls?: string;
  linkCls?: string;
};

export function LayoutNavFooter({ className, ...props }: NavFooterProps) {
  const adminName = INTERNAL_ADMIN_LINKS.admin.icon;
  const uploadName = INTERNAL_FLASH_LINKS.upload.icon;
  const tattReqName = INTERNAL_ADMIN_LINKS.tattReq.icon;
  return (
    <nav {...props} className={cn(className)}>
      <ul className="flex flex-row justify-between items-center gap-4 w-full">
        <li>
          <NextLinkWrapper
            className="flex flex-col items-center text-primary-500!"
            href={INTERNAL_ADMIN_LINKS.admin.href}
          >
            <Icon name={adminName} size="md" />
            {adminName}
          </NextLinkWrapper>
        </li>
        <li>
          <NextLinkWrapper
            className="flex flex-col items-center text-primary-500!"
            href={INTERNAL_ADMIN_LINKS.flash.href}
          >
            <Icon name={uploadName} size="md" />
            {uploadName}
          </NextLinkWrapper>
        </li>
        <li>
          <NextLinkWrapper
            className="flex flex-col items-center text-primary-500"
            href={INTERNAL_ADMIN_LINKS.tattReq.href}
          >
            <Icon name={tattReqName} size="md" />
            {INTERNAL_ADMIN_LINKS.tattReq.shortName}
          </NextLinkWrapper>
        </li>
      </ul>
    </nav>
  );
}
