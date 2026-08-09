"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  head?: ReactNode;
  tail?: ReactNode;
  pathname?: string;
  isAdmin?: boolean | null;
  wrapperCls?: string;
};

export default function Header({
  children,
  className,
  head,
  tail,
  isAdmin = null,
  wrapperCls,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "shadow-lg sticky top-0 z-10 bg-white p-2 w-full",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "max-w-6xl flex justify-between items-center p-2 h-16",
          isAdmin === false && "lg:justify-endr",
          wrapperCls,
        )}
      >
        {isAdmin === false && <span>{head}</span>}
        <span>{children}</span>
        <span className={cn(isAdmin === false && "lg:flex-1 lg:w-full")}>
          {tail}
        </span>
      </div>
    </header>
  );
}
