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

export default function Footer({ className, ...props }: FooterProps) {
  const searchParams = useSearchParams();
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <HyperInkSignature layoutCls="flex flex-row gap-2 items-center" />
      <Link
        href={getHrefWithSearchParams(INTERNAL_LINKS.book.href, searchParams)}
      >
        <button className="font-bold uppercase shadow-sm btn px-8 bg-surface-800-200 text-secondary-100-900 rounded-xl">
          Book
        </button>
      </Link>
    </footer>
  );
}
