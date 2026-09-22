"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperink/utils";

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
  ...props
}: HeaderProps) {
  return (
    <header {...props} className={className}>
      <div className="flex flex-col justify-between mx-auto max-w-300">
        <div
          className={cn(
            "flex justify-between items-center p-2 max-w-300 h-16",
            isAdmin === false && "lg:justify-end",
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
