"use client";
// ** The header wrapper exists because the mobile menu is dynamically imported. ** //
// ** The menu is dynamically imported because it depends on Portal which depends on document.body, which doesn't exist in SSR.* //

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
// hyperink
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// local
import { INTERNAL_LINKS } from "@/consts";

const MenuMobile = dynamic(() => import("./MenuMobile"), {
  ssr: false,
});

import Header from "./Header";
import Image from "next/image";
import Nav from "../(sidebar)/SidebarNav";

export default function HeaderWrapper({ className }: { className?: string }) {
  const searchParams = useSearchParams();

  return (
    <Header
      className={className}
      tail={
        <>
          <MenuMobile className="block md:hidden" title="ALL LINKS">
            <Nav className="flex w-auto h-full md:hidden" />
          </MenuMobile>
          <Link
            className="hidden md:block"
            href={getHrefWithSearchParams(
              INTERNAL_LINKS.book.href,
              searchParams,
            )}
          >
            <button className="w-full mx-auto font-bold uppercase shadow-sm rounded-xl border-3 btn bg-tertiary-100 border-tertiary-700-300 m-0 whitespace-nowrap text-surface-900-100">
              Book
            </button>
          </Link>
        </>
      }

      subNav={
        <Link
          href={getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)}
          className="md:hidden"
        >
          <button className="w-full mx-auto font-bold uppercase shadow-sm rounded-xl btn btn-sm sm:btn-base bg-surface-800-200 text-tertiary-100-900 whitespace-nowrap ">
            Book
          </button>
        </Link>
      }
    >
      <Link
        className="w-full h-8 px-2 sm:px-0"
        href={getHrefWithSearchParams(INTERNAL_LINKS.home.href, searchParams)}
      >
        <Image
          src="/images/s2statt-logo.svg"
          alt="Shade To Shade - Logo"
          width={201}
          height={40}
          className="w-auto h-8 sm:h-10 mx-auto"
        />
      </Link>
    </Header>
  );
}
