import React from "react";
import Image from "next/image";
import { cn } from "@hyperinkstudio/utils/";

type HeadingProps = {
  text: string;
  image?: {
    src: string;
    width: number;
    height: number;
    className?: string;
    imgClsName?: string;
  };

  alignment?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  color?: string;
  h1TextAtr?: string;
  h1TextSize?: string;
  h2TextAtr?: string;
  h2TxtSize?: string;
  h3TextAtr?: string;
  h3TxtSize?: string;
  h4TextAtr?: string;
  h4TxtSize?: string;
  h5TextAtr?: string;
  h5TxtSize?: string;
  h6TextAtr?: string;
  h6TxtSize?: string;
  leading?: string;
  fontCls?: string;
  weight?: string;
};

export function Heading({
  alignment = "",
  as = "h1",
  className = "",
  color = "",
  fontCls = "",
  h1TextAtr = "!leading-[2rem] md:!leading-[3rem]",
  h1TextSize = "text-3xl md:text-4xl",
  h2TextAtr = "!leading-[1.5rem] md:!leading-[2.5rem]",
  h2TxtSize = "text-2xl md:text-3xl",
  h3TextAtr = "",
  h3TxtSize = "text-xl md:text-2xl",
  h4TextAtr = "",
  h4TxtSize = "text-lg md:text-xl",
  h5TextAtr = "",
  h5TxtSize = "text-lg md:text-xl",
  h6TextAtr = "",
  h6TxtSize = "text-lg md:text-xl",
  image,
  text,
  weight = "",
}: HeadingProps) {
  let textAttrs;

  switch (as) {
    case "h1":
      textAttrs = h1TextSize + " " + h1TextAtr + " " + fontCls;
      break;

    case "h2":
      textAttrs = h2TxtSize + " " + h2TextAtr + " " + fontCls;
      break;

    case "h3":
      textAttrs = h3TxtSize + " " + h3TextAtr + " " + fontCls;
      break;

    case "h4":
      textAttrs = h4TxtSize + " " + h4TextAtr + " " + fontCls;
      break;

    case "h5":
      textAttrs = h5TxtSize + " " + h5TextAtr + " " + fontCls;
      break;

    case "h6":
      textAttrs = h6TxtSize + " " + h6TextAtr + " " + fontCls;
      break;
  }

  const textCls = cn(className, alignment, color, textAttrs, weight);

  const content = image ? (
    <>
      <span className="hidden">{text}</span>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        className={image.className}
        alt=""
        priority
      />
    </>
  ) : (
    text
  );

  const Tag = as;

  return <Tag className={textCls}>{content}</Tag>;
}
