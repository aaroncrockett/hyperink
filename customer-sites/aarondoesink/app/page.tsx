"use client";

import { Page, Heading } from "@hyperinkstudio/ui-react/components";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";

import { Instagram, Facebook } from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);
  return (
    <Page>
      <section className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4">
        <Heading
          image={{
            src: "/images/pdx-tatt-artist.webp",
            width: 1540,
            height: 275,
            className: "w-[94%] sm:w-2/3 h-auto mx-auto drop-shadow-sm",
          }}
          text="PDX Tattoo Artist"
          className="w-auto h-full"
        ></Heading>
        <Heading
          as="h2"
          text="🔥 Flash & custom tattoos 🔥"
          className="text-center font-bold "
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
              <span className="text-lg font-bold text-secondary-500">
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
              <span className="text-lg font-bold text-secondary-500">
                About Me
              </span>
            </Link>
          </li>
        </ul>
        <div className="w-full ">
          <Link
            href="/flash"
            className="mr-0.5 flex brand-font items-center justify-center text-xs md:text-base gap-1 text-surface-950 drop-shadow-sm"
          >
            <Image
              src="/images/hp/aaron-does-flash.webp"
              alt="Aaron Does Flash"
              width={1829}
              height={1119}
              priority
            />
          </Link>
        </div>
      </section>
      <section className="grid gap-1 grid-cols-2 w-full h-full">
        <div className="w-full h-full relative drop-shadow-sm">
          <video
            ref={videoRef}
            src="/videos/hp-vid-logan-tatt.mp4"
            autoPlay
            muted
            playsInline
            controls
            className="w-full h-full object-cover "
            onEnded={(e) => {
              const video = e.target as HTMLVideoElement;
              video.pause();
            }}
          />
        </div>

        <div className="grid grid-rows-2 gap-1">
          <div className="relative aspect-square w-full h-full drop-shadow-sm">
            <Link href="/tattoos">
              <Image
                src="/images/hp/devil-balloon.webp"
                alt="Rectangle 1"
                fill
                className="object-coverdrop-shadow-sm "
              />
            </Link>
          </div>

          <div className="relative aspect-square w-full h-full drop-shadow-sm">
            <Link href="/tattoos">
              <Image
                src="/images/hp/jump-rope.webp"
                alt="Rectangle 2"
                fill
                className="object-cover drop-shadow-sm"
              />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Heading
          as="h2"
          className="text-center text-primary-700 font-bold"
          leading="[@media(min-width:26rem)]:leading-6! [@media(min-width:36rem)]:leading-10! [@media(min-width:60rem)]:leading-14! [@media(min-width:80rem)]:leading-20!"
          size="[@media(min-width:20rem)]:text-2xl [@media(min-width:26rem)]:text-3xl [@media(min-width:36rem)]:text-4xl [@media(min-width:60rem)]:text-5xl [@media(min-width:80rem)]:text-6xl"
          text="Custom & Flash Tatts"
        ></Heading>
      </section>
    </Page>
  );
}
