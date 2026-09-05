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
        "shadow-xs sticky top-0 z-10 bg-surface-950 p-2 w-full mx-auto ",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col max-w-300 mx-auto  justify-between">
        <div
          className={cn(
            "max-w-300 flex justify-between items-center p-2 h-16",
            isAdmin === false && "lg:justify-end",
            wrapperCls,
          )}
        >
          {isAdmin === false && <span>{head}</span>}
          <span>{children}</span>
          <span className={cn(isAdmin === false && "lg:flex-1 lg:w-full")}>
            {tail}
          </span>
        </div>
      </div>
    </header>
  );
}
