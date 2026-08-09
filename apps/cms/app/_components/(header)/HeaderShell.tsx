"use client";
// ** The header wrapper exists because the mobile menu is dynamically imported. ** //
// ** The menu is dynamically imported because it depends on Portal which depends on document.body, which doesn't exist in SSR.* //

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

// hyperink
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// local
import { HOME } from "@/consts";

const MenuMobile = dynamic(() => import("./MenuMobile"), {
  ssr: false,
});

import Header from "./Header";
import Image from "next/image";
import Nav from "../(nav)/Nav";

export function HeaderShell({}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <Header
      isAdmin={isAdmin}
      tail={
        <>
          <MenuMobile className="block lg:hidden" title="HYPERINK">
            <Nav
              className="flex lg:hidden w-auto h-full"
              isAdmin={isAdmin}
              pathname={pathname}
            />
          </MenuMobile>

          {!isAdmin && (
            <div className="hidden lg:block">
              <Nav
                gapCls="gap-4"
                showIcon={false}
                pathname={pathname}
                dir="row"
                ulCls="lg:justify-end"
              />
            </div>
          )}
        </>
      }
    >
      <Link
        className="h-12 px-2 sm:px-0 w-full"
        href={getHrefWithSearchParams(HOME.href, searchParams)}
      >
        <Image
          src="/images/hyperink-logo-lt-text.svg"
          alt="Hyperink - Logo"
          width={201}
          height={40}
          className="h-12 w-auto mx-auto"
          loading="eager"
        />
      </Link>
    </Header>
  );
}
