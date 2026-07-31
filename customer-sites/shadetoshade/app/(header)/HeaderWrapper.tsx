"use client";
// ** The header wrapper exists because the mobile menu is dynamically imported. ** //
// ** The menu is dynamically imported because it depends on Portal which depends on document.body, which doesn't exist in SSR.* //

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
// hyperink
import {getHrefWithSearchParams} from "@hyperinkstudio/helpers"
// local
import { INTERNAL_LINKS } from "@/constants";

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
      lead={
        <MenuMobile className="block mx-auto lg:hidden" title="ALL LINKS">
          <Nav className="block lg:hidden" />
        </MenuMobile>
      }
      tail={
        <Link
          href={
            getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)}
        >
          <button className="btn-sm sm:btn preset-tonal-primary font-bold whitespace-nowrap shadow-xs rounded-xs">
            Book Now
          </button>
        </Link>
      }
    >
      <Link
        className="h-10 px-2 sm:px-0 w-auto mx-auto"
          href={
          getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)
          }
      >
        <Image
          src="/images/s2statt-logo.svg"
          alt="Aaron Does Ink - Logo"
          width={201}
          height={40}
          className="h-10 w-auto mx-auto"
        />
      </Link>
    </Header>
  );
}
