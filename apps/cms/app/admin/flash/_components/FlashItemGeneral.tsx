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
  user_id: string;
  id: string;
};

export function FlashItemGeneral({
  readable_name,
  public_url,
  ...props
}: FlashItemProps) {
  return (
    <li className={cn("group cursor-pointer", props.className)}>
      in here gurl
      <FlashItemImage readable_name={readable_name} public_url={public_url} />
    </li>
  );
}
