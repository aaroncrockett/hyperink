import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

const props = {
  size: {
    name: "size",
  },
};

const page = {
  name: "Heading",
  imports: [{ name: React, from: "" }],
  props: props,
  vars: [{ name: "sizeCalc", value: props.size }],
};
type HeadingProps = {
  text: string;
  image?: {
    src: string;
    width: number;
    height: number;
    className?: string;
    imgClsName?: string;
  };
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  alignment?: string;
  className?: string;
  color?: string;
  leading?: string;
  size?: string;
  weight?: string;
};

export default function Heading({
  alignment = "",
  as = "h1",
  className = "",
  color = "",
  image,
  leading = "",
  size = "",
  text,
  weight = "",
}: HeadingProps) {
  let sizeCalc = size;

  if (!size) {
    switch (as) {
      case "h1":
        sizeCalc = "text-4xl md:text-5xl lg:text-6xl";
        break;
      case "h2":
        sizeCalc = "text-3xl md:text-4xl lg:text-5xl";
        break;
      case "h3":
        sizeCalc = "text-2xl md:text-3xl lg:text-4xl";
        break;
      case "h4":
        sizeCalc = "text-xl md:text-2xl lg:text-3xl";
        break;
      case "h5":
        sizeCalc = "text-lg md:text-xl lg:text-2xl";
        break;
      case "h6":
        sizeCalc = "text-base md:text-lg lg:text-xl";
        break;
    }
  }

  const textCls = cn(className, alignment, color, leading, sizeCalc, weight);

  const content = image ? (
    <>
      <span className="sr-only">{text}</span>
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
