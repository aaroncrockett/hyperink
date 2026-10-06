"use client";
//
import { ComponentPropsWithoutRef } from "react";
//
import { cn } from "@hyperink/utils";
//
import { NextLinkWrapper } from "@/ui";
//
import { FlashItemImage } from "./FlashItemImage";

type FlashItemProps = ComponentPropsWithoutRef<"li"> & {
  readable_name: string;
  public_url: string;
  id: string;
};

export function FlashItemGeneral({
  readable_name,
  public_url,
  id,
  ...props
}: FlashItemProps) {
  return (
    <li className={cn("group cursor-pointer", props.className)}>
      <NextLinkWrapper
        className="no-underline! hover:underline!"
        href={`flash/${id}`}
      >
        <FlashItemImage readable_name={readable_name} public_url={public_url} />
      </NextLinkWrapper>
    </li>
  );
}
