"use client";
// ** The header wrapper exists because the mobile menu is dynamically imported. ** //
// ** The menu is dynamically imported because it depends on Portal which depends on document.body, which doesn't exist in SSR.* //

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { NextLinkWrapper } from "@/ui";

// hyperink
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// local
import { HOME } from "@/consts";
//
import { SignOut } from "@/app/_components/HandleSignout";

const MenuMobile = dynamic(() => import("./MenuMobile"), {
  ssr: false,
});

import Header from "./Header";
import Image from "next/image";
import Nav from "../(nav)/Nav";
type ShellProps = {
  isSignedIn: boolean;
};

export function HeaderShell({ isSignedIn }: ShellProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <Header
        isAdmin={isAdmin}
        tail={
          <>
            <MenuMobile className="lg:hidden block" title="HyperInk">
              <div className="flex h-full flex-col">
                <Nav
                  className="flex w-auto flex-1 h-full lg:hidden"
                  isAdmin={isAdmin}
                  pathname={pathname}
                  linkCls="text-surface-50!"
                  linkCurrentCls="text-primary-300!"
                  layoutOptCls="items-start"
                  isSignedIn={isSignedIn}
                />
              </div>
            </MenuMobile>

            {isAdmin && isSignedIn && (
              <div className="hidden lg:block">
                <SignOut btnColorCls="bg-primary-500 text-surface-950-50" />
              </div>
            )}

            {!isAdmin && (
              <div className="hidden lg:block">
                <Nav
                  showIcon={false}
                  pathname={pathname}
                  dir="row"
                  ulCls="lg:justify-end"
                  linkCurrentCls="text-surface-300-700! font-bold"
                  linkCls="text-surface-50-950!"
                  isSignedIn={isSignedIn}
                />
              </div>
            )}
          </>
        }
      >
        <NextLinkWrapper
          className="w-full flex px-2 sm:px-0"
          href={getHrefWithSearchParams(HOME.href, searchParams)}
        >
          <Image
            src="/images/hyperink-lt-green-green-logo.svg"
            alt="Hyperink - Logo"
            width={201}
            height={40}
            className="w-auto h-auto min-h-12 mx-auto"
            loading="eager"
          />
        </NextLinkWrapper>
      </Header>
    </>
  );
}
