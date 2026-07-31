"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import styles from "./Header.module.css";
import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  lead?: ReactNode;
  tail?: ReactNode;
  closeIcon?: ReactNode;
  wrapperCls?: string;
};

export default function Header({
  children,
  className,
  wrapperCls,
  lead,
  tail,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        styles.header,
        "adi-header shadow-lg sticky top-0 z-10 bg-white",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "sm:flex sm:items-center sm:justify-between items-center grid grid-cols-[1fr_4fr_1fr] max-w-6xl mx-auto w-full p-4 pl-2 pr-4! md:p-5 md:px-4 shadow-2xs ",
          wrapperCls,
        )}
      >
        {lead}
        {children}
        {tail}
      </div>
    </header>
  );
}
