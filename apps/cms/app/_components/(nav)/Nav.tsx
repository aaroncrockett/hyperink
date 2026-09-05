"use client";
// React/Next
import { ComponentPropsWithoutRef } from "react";
// Hyperink
// @'s
import { cn } from "@/utils/cn";
// Local
import {
  MENU_ADMIN_LINKS,
  MENU_PUBLIC_LINKS,
  LOGIN,
  SIGNUP,
  ADMIN,
} from "@/consts";
import { SignOut } from "@/app/_components/HandleSignout";
import { NextLinkWrapper } from "@/ui";
//
import { Icon } from "@/ui/";
type NavProps = ComponentPropsWithoutRef<"nav"> & {
  dir?: "col" | "row";
  gapCls?: string;
  isAdmin?: boolean | null;
  layoutOptCls?: string;
  liCls?: string;
  linkCls?: string;
  liCurrentCls?: string;
  linkCurrentCls?: string;
  pathname: string;
  showIcon?: boolean;
  ulCls?: string;
  isSignedIn?: boolean;
};

export default function Nav({
  className,
  dir = "col",
  gapCls = "gap-4",
  isAdmin = null,
  layoutOptCls = "justify-center items-center",
  liCls,
  liCurrentCls,
  linkCurrentCls,
  linkCls,
  pathname,
  showIcon = true,
  ulCls,
  isSignedIn = false,
  ...props
}: NavProps) {
  const links =
    isAdmin !== null && isAdmin ? MENU_ADMIN_LINKS : MENU_PUBLIC_LINKS;

  const flexLayout = dir === "col" ? "flex flex-col" : "flex flex-row";
  // TEMP HARD CODED

  return (
    <nav
      className={cn("col-start-1 row-start-1 row-span-3", className)}
      {...props}
    >
      <ul className={cn(flexLayout, gapCls, layoutOptCls, ulCls)}>
        {!isAdmin && (
          <li className="lg:hidden inline-block">
            <NextLinkWrapper
              href={isSignedIn ? ADMIN.href : LOGIN.href}
              textColorCls="hover:text-primary-500!"
              className={cn(linkCls, "flex flex-row gap-3 font-bold uppercase")}
            >
              {showIcon &&
                (isSignedIn ? (
                  <Icon name={ADMIN.icon} />
                ) : (
                  <Icon name={LOGIN.icon} />
                ))}

              {isSignedIn ? ADMIN.name : LOGIN.name + " / " + SIGNUP.name}
            </NextLinkWrapper>
          </li>
        )}
        {links.map((link) => {
          return (
            <li
              key={link.href + link.name + "rootnav"}
              className={cn(liCls, pathname !== link.href && liCurrentCls)}
            >
              <NextLinkWrapper
                href={link.href}
                textColorCls="hover:text-primary-500!"
                className={cn(
                  linkCls,
                  "flex flex-row gap-3 font-bold ",
                  pathname === link.href && linkCurrentCls,
                )}
              >
                {Icon && showIcon && <Icon name={link.icon} size="md" />}
                {link.name.toUpperCase()}
              </NextLinkWrapper>
            </li>
          );
        })}
        {!isAdmin && (
          <li className="hidden lg:inline-block">
            <NextLinkWrapper
              href={isSignedIn ? ADMIN.href : LOGIN.href}
              textColorCls="hover:text-primary-500!"
              className={cn(linkCls, "flex flex-row gap-3 font-bold uppercase")}
            >
              {showIcon &&
                (isSignedIn ? (
                  <Icon name={ADMIN.icon} />
                ) : (
                  <Icon name={LOGIN.icon} />
                ))}

              {isSignedIn ? ADMIN.name : LOGIN.name + " / " + SIGNUP.name}
            </NextLinkWrapper>
          </li>
        )}
        {isAdmin && isSignedIn && (
          <span className="flex flex-row gap-2">
            <Icon cls="md:hidden" name="logout" color="white" />
            <SignOut
              cls={cn(linkCls, "font-bold uppercase")}
              useButton={false}
            />
          </span>
        )}
      </ul>
    </nav>
  );
}
