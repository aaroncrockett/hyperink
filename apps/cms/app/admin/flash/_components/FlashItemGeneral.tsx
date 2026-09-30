"use client";
//
import { ComponentPropsWithoutRef } from "react";
//
import { cn } from "@hyperink/utils";
//
import { FlashItemImage } from "./FlashItemImage";

type FlashItemProps = ComponentPropsWithoutRef<"li"> & {
  readable_name: string;
  public_url: string;
  id: string;
};

export function FlashItemGeneral({
  readable_name,
  id,
  public_url,
  ...props
}: FlashItemProps) {
  return (
    <li className={cn("group cursor-pointer", props.className)}>
      in here gurl
      <FlashItemImage
        id={id}
        readable_name={readable_name}
        public_url={public_url}
      />
    </li>
  );
}
