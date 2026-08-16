"use client";
// React
import { ComponentPropsWithoutRef } from "react";
// Next
import Link from "next/link";
// @s
import { INTERNAL_ADMIN_LINKS } from "@/consts";
import { cn } from "@/utils/cn";

type NavFooterProps = ComponentPropsWithoutRef<"nav"> & {
  ulCls?: string;
  liCls?: string;
  linkCls?: string;
};

export function NavFooter({ className, ...props }: NavFooterProps) {
  const AdminIcon = INTERNAL_ADMIN_LINKS.admin.icon;
  const FlashUploadIcon = INTERNAL_ADMIN_LINKS.flashUpload.icon;
  const TattReqIcon = INTERNAL_ADMIN_LINKS.tattReq.icon;
  return (
    <nav className={cn(className)} {...props}>
      <ul className="flex flex-row items-center justify-between w-full gap-4">
        <li>
          <Link
            className="text-primary-500! flex flex-col items-center"
            href={INTERNAL_ADMIN_LINKS.admin.href}
          >
            <AdminIcon className="w-5 h-5" /> {INTERNAL_ADMIN_LINKS.admin.name}
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-500! flex flex-col items-center"
            href={INTERNAL_ADMIN_LINKS.flash.href}
          >
            <FlashUploadIcon className="w-5 h-5" />
            {INTERNAL_ADMIN_LINKS.flash.name}
          </Link>
        </li>
        <li>
          <Link
            className="text-primary-500! flex flex-col items-center"
            href={INTERNAL_ADMIN_LINKS.tattReq.href}
          >
            <TattReqIcon className="w-5 h-5" />
            {INTERNAL_ADMIN_LINKS.tattReq.shortName}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
