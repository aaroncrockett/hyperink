"use client";
import dynamic from "next/dynamic";

import Link from "next/link";

const MenuMobile = dynamic(() => import("./MenuMobile"), {
  ssr: false,
});

import Header from "./Header";
import Image from "next/image";
import Nav from "../(nav)/Nav";

export default function HeaderWrapper({}) {
  return (
    <Header
      lead={
        <MenuMobile className="block lg:hidden" title="ALL LINKS">
          <Nav className="block lg:hidden" />
        </MenuMobile>
      }
      tail={
        <button className="btn-sm sm:btn preset-filled-secondary-500 whitespace-nowrap drop-shadow-xs">
          Book Now
        </button>
      }
    >
      <Link className="h-10 px-4 sm:px-0 w-auto mx-auto" href="/">
        <Image
          src="/images/logo-text.svg"
          alt="Aaron Does Ink - Logo"
          width={201}
          height={40}
          className="h-10 w-auto mx-auto"
        />
      </Link>
    </Header>
  );
}
