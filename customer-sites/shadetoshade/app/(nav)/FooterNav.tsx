"use client";
import { ComponentPropsWithoutRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// Hyper Ink
import { getHrefWithSearchParams } from "@hyperinkstudio/helpers";
// @'s
import { cn } from "@/utils/cn";
// Local
import { MOBILE_FOOTER_LINKS, INTERNAL_LINKS } from "../../constants/";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  ulCls?: string;
  liCls?: string;
  linkCls?: string;
};

export default function NavController({
  className,
  ulCls,
  liCls,
  linkCls,
  ...props
}: NavProps) {
  const searchParams = useSearchParams();

  return (
    <>
      <nav className={cn(className)} {...props}>
        <ul className={cn("flex flex-row justify-around gap-4 w-full", ulCls)}>
          {MOBILE_FOOTER_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href} className={cn(liCls)}>
                <Link
                  href={getHrefWithSearchParams(link.href, searchParams)}
                  className={cn(
                    linkCls,
                    "flex flex-col gap-0.5 items-center font-bold text-sm text-white",
                  )}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {link.name.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* hidden: default - shown:lg*/}
      <div className="hidden lg:flex flex-row items-center justify-between w-full text-sm">
        <p>
          Deved By Aaron Does Everything (Tattoos, Web Apps, Web Sites, Web
          Design, Illustration.)
        </p>
        <Link
          href={getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)}
        >
          <span className="btn btn-sm  font-bold preset-filled-surface-50-950 rounded-xs shadow-xs">
            Book Now
          </span>
        </Link>
      </div>
    </>
  );
}
