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
import Nav from "../(nav)/Nav";

export default function HeaderWrapper({}) {
  const searchParams = useSearchParams();

  return (
    <Header
      tail={
        <>
          <MenuMobile className="block lg:hidden" title="ALL LINKS">
            <Nav className="flex w-auto h-full lg:hidden" />
          </MenuMobile>
          <Link
            className="hidden lg:block"
            href={getHrefWithSearchParams(
              INTERNAL_LINKS.book.href,
              searchParams,
            )}
          >
            <button className="w-full mx-auto font-bold uppercase shadow-sm rounded-xl border-3 btn lg:bg-secondary-100 border-primary-500 lg:w-auto lg:m-0 whitespace-nowrap lg:text-primary-500">
              Book
            </button>
          </Link>
        </>
      }

      subNav={
        <Link
          href={getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)}
          className="lg:hidden"
        >
          <button className="w-full mx-auto font-bold uppercase shadow-sm border-3 rounded-xl btn bg-secondary-200 border-primary-500 text-primary-500 lg:preset-filled-primary-500 lg:w-auto lg:m-0 whitespace-nowrap lg:text-white">
            Book
          </button>
        </Link>
      }
    >
      <Link
        className="w-full h-12 px-2 sm:px-0"
        href={getHrefWithSearchParams(INTERNAL_LINKS.home.href, searchParams)}
      >
        <Image
          src="/images/s2statt-logo.svg"
          alt="Shade To Shade - Logo"
          width={201}
          height={40}
          className="w-auto h-12 mx-auto"
        />
      </Link>
    </Header>
  );
}
