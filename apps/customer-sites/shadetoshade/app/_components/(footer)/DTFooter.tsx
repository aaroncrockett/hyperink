"use client";
import { ReactNode, ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// @'s
import { cn } from "@/utils/cn";
import { INTERNAL_LINKS } from "@/consts";
import { getHrefWithSearchParams } from "@hyperinkstudio/utils";
// Local
import styles from "./Footer.module.css";
import { HyperInkSignature } from "../HyperInkSignature";

type FooterProps = ComponentPropsWithoutRef<"footer"> & {
  children?: ReactNode;
  lead?: ReactNode;
  tail?: ReactNode;
};

export default function Footer({
  children,
  className,
  lead,
  tail,
  ...props
}: FooterProps) {
  const searchParams = useSearchParams();
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <HyperInkSignature layoutCls="flex flex-row gap-2 items-center" />
      <Link
        href={getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)}
      >
        <span className="font-bold uppercase shadow-sm btn border-3 bg-secondary-200 text-primary-500 border-primary-500 rounded-xl">
          Book
        </span>
      </Link>
    </footer>
  );
}
