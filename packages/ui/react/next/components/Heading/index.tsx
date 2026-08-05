
import React from "react";
import type { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/";

type HeadingProps = Omit<
  ComponentPropsWithoutRef<"h1">,
  "children" | "className"
> & {
  alignmentCls?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  cls?: string;
  colorCls?: string;
  fontCls?: string;
  h1Size?: string;
  h1TextAtrs?: string;
  h2Size?: string;
  h2TextAtrs?: string;
  h3Size?: string;
  h3TextAtrs?: string;
  h4Size?: string;
  h4TextAtrs?: string;
  h5Size?: string;
  h5TextAtrs?: string;
  h6Size?: string;
  h6TextAtrs?: string;
  leading?: string;
  text?: string;
  weightCls?: string;
};

export function Heading({
  alignmentCls,
  as = "h1",
  children,
  cls,
  colorCls = "text-surface-950-50",
  fontCls,
  h1Size = "text-3xl md:text-4xl",
  h1TextAtrs = "!leading-[2.75rem] md:!leading-[2.5rem]",
  h2Size = "text-2xl md:text-3xl",
  h2TextAtrs = "!leading-[2.25rem] md:!leading-[2.75rem]",
  h3Size = "text-xl md:text-2xl",
  h3TextAtrs = "",
  h4Size = "text-lg md:text-xl",
  h4TextAtrs = "",
  h5Size = "text-lg md:text-xl",
  h5TextAtrs = "",
  h6Size = "text-lg md:text-xl",
  h6TextAtrs = "",
  text,
  weightCls = "",
  ...props
}: HeadingProps) {
  let textAttrs;

  switch (as) {
    case "h1":
      textAttrs = h1Size + " " + h1TextAtrs + " " + fontCls;
      break;

    case "h2":
      textAttrs = h2Size + " " + h2TextAtrs + " " + fontCls;
      break;

    case "h3":
      textAttrs = h3Size + " " + h3TextAtrs + " " + fontCls;
      break;

    case "h4":
      textAttrs = h4Size + " " + h4TextAtrs + " " + fontCls;
      break;

    case "h5":
      textAttrs = h5Size + " " + h5TextAtrs + " " + fontCls;
      break;

    case "h6":
      textAttrs = h6Size + " " + h6TextAtrs + " " + fontCls;
      break;
  }

  const textCls = cn(cls, alignmentCls, colorCls, textAttrs, weightCls);
  let content;

  content = text ? text : children;

  const Tag = as;
  return <Tag className={textCls} {...props}>{content}</Tag>;
}
