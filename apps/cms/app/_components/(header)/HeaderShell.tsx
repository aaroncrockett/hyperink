"use client";
// ** The header wrapper exists because the mobile menu is dynamically imported. ** //
// ** The menu is dynamically imported because it depends on Portal which depends on document.body, which doesn't exist in SSR.* //

// import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
// import { NextLinkWrapper } from "@/ui";

// local
// import { HOME } from "@/consts";
//
// import { SignOut } from "@/app/_components/HandleSignout";

// const MenuMobile = dynamic(() => import("./MenuMobile"), {
//   ssr: false,
// });

import Header from "./Header";
// import Image from "next/image";
// import Nav from "../(nav)/Nav";
type ShellProps = {
  isSignedIn: boolean;
};

export function HeaderShell({ isSignedIn }: ShellProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <Header
      className="top-0 z-10 sticky bg-surface-800-200 shadow-xs mx-auto p-2 w-full"
      isAdmin={isAdmin}
      tail={
        <>
          {/* <MenuMobile className="lg:hidden block" title="HyperInk">
            <div className="flex flex-col h-full">
              <Nav
                className="lg:hidden flex flex-1 w-auto h-full"
                isAdmin={isAdmin}
                pathname={pathname}
                linkCls="text-surface-50!"
                linkCurrentCls="text-primary-300!"
                layoutOptCls="items-start"
                isSignedIn={isSignedIn}
              />
            </div>
          </MenuMobile> */}

          {isAdmin && isSignedIn && (
            <div className="hidden lg:block">
              <p>Is Signed in and is Admin</p>
              {/* <SignOut btnColorCls="bg-primary-500 text-surface-950-50" /> */}
            </div>
          )}

          {!isAdmin && (
            <div className="hidden lg:block">
              <p>nav component</p>
              {/* <Nav
                showIcon={false}
                pathname={pathname}
                dir="row"
                ulCls="lg:justify-end"
                linkCurrentCls="text-surface-300-700! font-bold"
                linkCls="text-surface-50-950!"
                isSignedIn={isSignedIn}
              /> */}
            </div>
          )}
        </>
      }
    >
      <p>nav link wrapper</p>
      {/* <NextLinkWrapper className="flex px-2 sm:px-0 w-full" href={HOME.href}>
        <Image
          src="/images/hyperink-lt-green-green-logo.svg"
          alt="Hyperink - Logo"
          width={201}
          height={40}
          className="mx-auto w-auto h-auto min-h-12"
          loading="eager"
        />
       
      </NextLinkWrapper> */}
    </Header>
  );
}
