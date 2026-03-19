import Page from "@/ui/page";
import Heading from "@/ui/heading";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <Page>
      <section className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4">
        <Heading
          image={{
            src: "/images/pdx-tatt-artist.webp",
            width: 1540,
            height: 275,
            className: "w-[94%] sm:w-2/3 h-auto mx-auto",
          }}
          text="PDX Tattoo Artist"
          className="w-auto h-full"
        ></Heading>
        <Heading
          as="h2"
          text="Flash & custom tattoos"
          className="uppercase text-center font-bold text-xl [@media(min-width:20rem)]:text-2xl [@media(min-width:26rem)]:text-3xl  [@media(min-width:36rem)]:text-4xl [@media(min-width:60rem)]:text-5xl [@media(min-width:80rem)]:text-6xl "
        ></Heading>

        <ul className="flex justify-center items-center gap-1 py-3">
          <li className="mr-2.5 text-xl">🏳️‍🌈</li>

          <li>
            <Link
              href=""
              target="_blank"
              className="mr-2 flex brand-font items-center justify-center text-xs md:text-base gap-1 text-surface-950"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/blue-sky.svg"
                  alt="BlueSky"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </li>

          <li>
            <Link
              href=""
              target="_blank"
              className="mr-0.5 flex brand-font items-center justify-center text-xs md:text-base gap-1 text-surface-950"
            >
              <Instagram className="w-8 h-8 text-black" strokeWidth={2} />
            </Link>
          </li>

          <li>
            <Link
              href=""
              target="_blank"
              className="flex brand-font items-center justify-center text-xs gap-0.5 md:text-base text-surface-950"
            >
              <Facebook className="w-8 h-8 text-black" strokeWidth={2} />
            </Link>
          </li>

          <li className="ml-1 text-xl">🔥</li>
        </ul>
      </section>
    </Page>
  );
}
