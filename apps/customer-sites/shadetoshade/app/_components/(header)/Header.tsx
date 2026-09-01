"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import styles from "./Header.module.css";
import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  subNav?: ReactNode;
  head?: ReactNode;
  tail?: ReactNode;
};

export default function Header({
  children,
  className,
  subNav,
  head,
  tail,
  ...props
}: HeaderProps) {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className="max-w-8xl w-auto flex justify-between md:grid md:grid-cols-[8rem_1fr_8rem] items-center h-16">
        <span className="md:col-start-1 md:row-start-1">{head}</span>
        <span className="md:col-start-2 md:row-start-1">{children}</span>
        <span className="md:col-start-3 md:row-start-1">{tail}</span>
        <span className="hidden md:block md:col-span-3">{subNav}</span>
      </div>
      <div className="py-2 md:hidden">{subNav}</div>
    </header>
  );
}
