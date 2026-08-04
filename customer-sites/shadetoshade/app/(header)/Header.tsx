"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import styles from "./Header.module.css";
import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  subNav?: ReactNode;
  tail?: ReactNode;
  wrapperCls?: string;
};

export default function Header({
  children,
  className,
  subNav,
  tail,
  wrapperCls,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        styles.header,
        "shadow-lg sticky top-0 z-10 bg-white p-2",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "max-w-6xl shadow-2xs flex justify-between items-center p-2",
          wrapperCls,
        )}
      >
        {children}
        {tail}
      </div>
      <div className="pb-2">{subNav}</div>
    </header>
  );
}
