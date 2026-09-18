"use client";
import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
//
import { cn } from "@hyperink/utils";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  dir?: "col" | "row";
  gapCls?: string;
  layoutOptCls?: string;
  lead?: ReactNode;
  tail?: ReactNode;
  ulCls?: string;
};

export default function Nav({
  dir = "col",
  gapCls = "gap-3",
  layoutOptCls = "justify-center items-center",
  lead,
  tail,
  ulCls,
  ...props
}: NavProps) {
  const flexLayout = dir === "col" ? "flex flex-col" : "flex flex-row";
  // TEMP HARD CODED

  return (
    <nav className={props.className} {...props}>
      <ul className={cn(flexLayout, gapCls, layoutOptCls, ulCls)}>
        {lead}
        {props.children}
        {tail}
      </ul>
    </nav>
  );
}
