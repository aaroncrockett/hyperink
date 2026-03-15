import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

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
  className?: string;
};

export default function Heading({
  text,
  image,
  as = "h1",
  className,
}: HeadingProps) {
  return React.createElement(
    as,
    { className: cn("", className) },
    image ? (
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
    ),
  );
}
