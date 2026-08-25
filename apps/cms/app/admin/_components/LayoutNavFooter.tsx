"use client";
// React
import { ComponentPropsWithoutRef } from "react";
// Next
import NextLinkWrapper from "next/link";
// @s
import { INTERNAL_ADMIN_LINKS, INTERNAL_FLASH_LINKS } from "@/consts";
import { cn } from "@/utils/cn";
import { Icon } from "@/ui";

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
    <nav className={cn(className)} {...props}>
      <ul className="flex flex-row items-center justify-between w-full gap-4">
        <li>
          <NextLinkWrapper
            className="text-primary-500! flex flex-col items-center"
            href={INTERNAL_ADMIN_LINKS.admin.href}
          >
            <Icon name={adminName} size="md" />
            {adminName}
          </NextLinkWrapper>
        </li>
        <li>
          <NextLinkWrapper
            className="text-primary-500! flex flex-col items-center"
            href={INTERNAL_ADMIN_LINKS.flash.href}
          >
            <Icon name={uploadName} size="md" />
            {uploadName}
          </NextLinkWrapper>
        </li>
        <li>
          <NextLinkWrapper
            className="text-primary-500! flex flex-col items-center"
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
