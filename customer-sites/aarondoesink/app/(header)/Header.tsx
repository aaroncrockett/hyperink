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
        "adi-header shadow-lg sticky top-0 z-10",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-between max-w-6xl mx-auto w-full p-5 px-4 shadow-2xs",
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
