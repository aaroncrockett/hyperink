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
  textColorCls?: string;
  fontFaceCls?: string;
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
  uppercaseCls?: string;
  weightCls?: string;
};

export function Heading({
  alignmentCls,
  as = "h1",
  children,
  cls,
  fontFaceCls,
  h1Size = "text-4xl md:text-5xl",
  h1TextAtrs = "!leading-[3rem] md:!leading-[2.75rem]",
  h2Size = "text-3xl md:text-4xl",
  h2TextAtrs = "!leading-[2.5rem] md:!leading-[2.75rem]",
  h3Size = "text-2xl md:text-3xl",
  h3TextAtrs = "!leading-[2.75rem] md:!leading-[2.5rem]",
  h4Size = "text-2xl md:text-3xl",
  h4TextAtrs = "!leading-[2.75rem] md:!leading-[2.5rem]",
  h5Size = "text-xl md:text-2xl",
  h5TextAtrs = "md:!leading-[2.75rem]",
  h6Size = "text-lg md:text-xl",
  h6TextAtrs = "",
  text,
  textColorCls,
  uppercaseCls,
  weightCls = "",
  ...props
}: HeadingProps) {
  let computedTextAttrs;

  switch (as) {
    case "h1":
      computedTextAttrs = h1Size + " " + h1TextAtrs;
      break;

    case "h2":
      computedTextAttrs = h2Size + " " + h2TextAtrs;
      break;

    case "h3":
      computedTextAttrs = h3Size + " " + h3TextAtrs;
      break;

    case "h4":
      computedTextAttrs = h4Size + " " + h4TextAtrs;
      break;

    case "h5":
      computedTextAttrs = h5Size + " " + h5TextAtrs;
      break;

    case "h6":
      computedTextAttrs = h6Size + " " + h6TextAtrs;
      break;
  }

  const textCls = cn(
    cls,
    alignmentCls,
    fontFaceCls,
    uppercaseCls,
    textColorCls,
    computedTextAttrs,
    weightCls,
  );
  let content;

  content = text ? text : children;

  const Tag = as;
  return (
    <Tag className={textCls} {...props}>
      {content}
    </Tag>
  );
}
