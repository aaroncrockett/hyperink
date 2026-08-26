"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import styles from "./Header.module.css";
import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  subNav?: ReactNode;
  head?: ReactNode;
  tail?: ReactNode;
  wrapperCls?: string;
};

export default function Header({
  children,
  className,
  subNav,
  head,
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
          "max-w-8xl w-auto flex justify-between md:grid md:grid-cols-[8rem_1fr_8rem] items-center p-2 h-16",
          wrapperCls,
        )}
      >
        <span className="md:col-start-1 md:row-start-1">{head}</span>
        <span className="md:col-start-2 md:row-start-1">{children}</span>
        <span className="md:col-start-3 md:row-start-1">{tail}</span>
        <span className="hidden md:block md:col-span-3">{subNav}</span>
      </div>
      <div className="pt-4 pb-2 md:hidden">{subNav}</div>
    </header>
  );
}
