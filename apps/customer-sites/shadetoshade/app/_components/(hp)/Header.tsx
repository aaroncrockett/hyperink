// 3rd party
import { Instagram } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
// Hyperink
import { Heading } from "@hyperinkstudio/ui-react-next/components";

export function Header() {
  return (
    <>
      <Heading cls="w-auto h-full">
        <span className="hidden">PDX Tattoo Artist</span>
        <Image
          src="/images/pdx-tatt-artist.webp"
          width="1540"
          height="275"
          className="w-[94%] sm:w-2/3 h-auto mx-auto"
          alt=""
          priority
        />
      </Heading>
      <Heading
        as="h2"
        text="Flash & custom tattoos "
        h2Size="text-4xl md:text-5xl"
        h2TextAtrs="!leading-[2.75rem] md:!leading-[2.5rem]"
        weightCls="font-bold"
        alignmentCls="text-center"
      ></Heading>

      <ul className="flex justify-center items-center py-3 mb-0">
        <li>
          <Link
            href="https://www.instagram.com/aaron.does.ink"
            target="_blank"
            className="mr-0.5 flex brand-font items-center justify-center text-xs md:text-base gap-1 text-surface-950"
          >
            <Instagram
              className="w-8 h-8 text-secondary-800 d"
              strokeWidth={2}
            />
            <span className="text-lg font-bold text-primary-400-600">
              Instagram
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            target="_blank"
            className="mr-0.5 flex brand-font items-center justify-center text-xs md:text-base gap-1 text-surface-950"
          >
            <span className="ml-2.5 text-4xl">🏳️‍🌈</span>
            <span className="text-lg font-bold text-primary-400-600">
              About Me
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
}
