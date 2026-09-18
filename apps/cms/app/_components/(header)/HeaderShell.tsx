"use client";
// ** The header wrapper exists because the mobile menu is dynamically imported. ** //
// ** The menu is dynamically imported because it depends on Portal which depends on document.body, which doesn't exist in SSR.* //

import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
//
import { Icon } from "@hyperink/ui-react/components";
//
import { cn } from "@hyperink/utils";
import { NextLinkWrapper } from "@/ui";
import {
  HOME,
  MENU_ADMIN_LINKS,
  MENU_PUBLIC_LINKS,
  LOGIN,
  SIGNUP,
  ADMIN,
} from "@/data/links";

const MenuMobile = dynamic(() => import("./MenuMobile"), {
  ssr: false,
});

import Header from "./Header";
import { SignOut } from "../HandleSignout";
import Nav from "../(nav)/Nav";

type ShellProps = {
  isSignedIn: boolean;
};

export function HeaderShell({ isSignedIn }: ShellProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  const links =
    isAdmin !== null && isAdmin ? MENU_ADMIN_LINKS : MENU_PUBLIC_LINKS;

  const linkCls = "text-surface-50-950!";
  const linkCurrentCls = "text-surface-300-700! font-bold";

  return (
    <Header
      className="top-0 z-10 sticky bg-surface-800-200 shadow-xs mx-auto p-2 w-full"
      isAdmin={isAdmin}
      tail={
        <>
          <MenuMobile className="lg:hidden block" title="HyperInk">
            <div className="flex flex-col h-full">
              <Nav
                className="lg:hidden flex flex-1 w-auto h-full"
                layoutOptCls="items-start"
              >
                {links.map((link) => {
                  return (
                    <li key={link.href + link.name + "-root-nav"}>
                      <NextLinkWrapper
                        href={link.href}
                        textColorCls="hover:text-primary-500!"
                        className={cn(
                          linkCls,
                          "flex flex-row gap-1.5 font-bold ",
                          pathname === link.href && linkCurrentCls,
                        )}
                      >
                        <Icon name={link.icon} />

                        {link.name.toUpperCase()}
                      </NextLinkWrapper>
                    </li>
                  );
                })}
              </Nav>
            </div>
          </MenuMobile>

          {isAdmin && isSignedIn && (
            <div className="hidden lg:block">
              <SignOut className="bg-primary-500 text-surface-950-50 hyper-btn-base" />
            </div>
          )}

          {!isAdmin && (
            <div className="hidden lg:block">
              <Nav
                lead={
                  <li className="lg:hidden inline-block">
                    <NextLinkWrapper
                      href={isSignedIn ? ADMIN.href : LOGIN.href}
                      textColorCls="hover:text-primary-500!"
                      className={cn(
                        linkCls,
                        "flex flex-row gap-3 font-bold uppercase",
                      )}
                    >
                      {isSignedIn ? (
                        <Icon name={ADMIN.icon} />
                      ) : (
                        <Icon name={LOGIN.icon} />
                      )}

                      {isSignedIn
                        ? ADMIN.name
                        : LOGIN.name + " / " + SIGNUP.name}
                    </NextLinkWrapper>
                  </li>
                }

                dir="row"
                ulCls="lg:justify-end gap-4"
              >
                <>
                  {links.map((link) => {
                    return (
                      <li key={link.href + link.name + "-root-nav"}>
                        <NextLinkWrapper
                          href={link.href}
                          textColorCls="hover:text-primary-500!"
                          className={cn(
                            linkCls,
                            "flex flex-row gap-1.5 font-bold ",
                            pathname === link.href && linkCurrentCls,
                          )}
                        >
                          <Icon name={link.icon} />

                          {link.name.toUpperCase()}
                        </NextLinkWrapper>
                      </li>
                    );
                  })}

                  <li className="inline-block">
                    <NextLinkWrapper
                      href={isSignedIn ? ADMIN.href : LOGIN.href}
                      textColorCls="hover:text-primary-500!"
                      className={cn(
                        linkCls,
                        "flex flex-row gap-1.5 font-bold uppercase",
                      )}
                    >
                      {isSignedIn ? (
                        <Icon name={ADMIN.icon} />
                      ) : (
                        <Icon name={LOGIN.icon} />
                      )}

                      {isSignedIn
                        ? ADMIN.name
                        : LOGIN.name + " / " + SIGNUP.name}
                    </NextLinkWrapper>
                  </li>
                </>
              </Nav>
            </div>
          )}
        </>
      }
    >
      <NextLinkWrapper className="flex px-2 sm:px-0 w-full" href={HOME.href}>
        <Image
          src="/hyperink-lt-green-green-logo.svg"
          alt="Hyperink - Logo"
          width={201}
          height={40}
          className="mx-auto w-auto h-auto min-h-12"
          loading="eager"
        />
      </NextLinkWrapper>
    </Header>
  );
}
