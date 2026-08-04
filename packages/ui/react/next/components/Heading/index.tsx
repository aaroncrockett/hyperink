import React from "react";
import { cn } from "@hyperinkstudio/utils/";

type HeadingProps = {
  text?: string;
  alignment?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  className?: string;
  color?: string;
  h1TextAtrs?: string;
  h1Size?: string;
  h2TextAtrs?: string;
  h2Size?: string;
  h3TextAtrs?: string;
  h3Size?: string;
  h4TextAtrs?: string;
  h4Size?: string;
  h5TextAtrs?: string;
  h5Size?: string;
  h6TextAtrs?: string;
  h6Size?: string;
  leading?: string;
  fontCls?: string;
  weight?: string;
};

export function Heading({
  alignment = "",
  as = "h1",
  children,
  className = "",
  color = "",
  fontCls = "",
  h1TextAtrs = "!leading-[2.75rem] md:!leading-[2.5rem]",
  h1Size = "text-3xl md:text-4xl",
  h2TextAtrs = "!leading-[2.25rem] md:!leading-[2.75rem]",
  h2Size = "text-2xl md:text-3xl",
  h3TextAtrs = "",
  h3Size = "text-xl md:text-2xl",
  h4TextAtrs = "",
  h4Size = "text-lg md:text-xl",
  h5TextAtrs = "",
  h5Size = "text-lg md:text-xl",
  h6TextAtrs = "",
  h6Size = "text-lg md:text-xl",
  text,
  weight = "",
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

  const textCls = cn(className, alignment, color, textAttrs, weight);
  let content;

  content = text ? text : children;

  const Tag = as;

  return <Tag className={textCls}>{content}</Tag>;
}
