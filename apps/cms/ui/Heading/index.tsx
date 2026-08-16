import { ComponentPropsWithoutRef } from "react";
import { Heading as HeadingUI } from "@hyperinkstudio/ui-react-next/components/Heading";

type HeadingProps = Omit<
  ComponentPropsWithoutRef<typeof HeadingUI>,
  "as" | "fontFaceCls" | "textColorCls" | "weightCls"
> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontFaceCls?: "font-display" | "font-sans-serif";
  textColorCls?: string;
  uppercaseCls?: string;
};

export function Heading({
  children,
  as = "h1",
  textColorCls,
  fontFaceCls,
  uppercaseCls,
  ...props
}: HeadingProps) {
  const LARGE_HEADERS = ["h1", "h2", "h3"] as const;
  const SMALL_HEADERS = ["h4", "h5", "h6"] as const;

  let textColor = "";
  let fontFace = "";
  let uppercase = "";

  if ((LARGE_HEADERS as readonly string[]).includes(as)) {
    textColor = textColorCls ? textColorCls : "text-tertiary-500";
    fontFace = fontFaceCls ? fontFaceCls : "font-display";
    uppercase = uppercaseCls ? uppercaseCls : "uppercase";
  }

  if ((SMALL_HEADERS as readonly string[]).includes(as)) {
    textColor = textColorCls ? textColorCls : "text-secondary-950-50";
  }

  return (
    <HeadingUI
      fontFaceCls={fontFace}
      textColorCls={textColor}
      uppercaseCls={uppercase}
      as={as}
      {...props}
    >
      {children}
    </HeadingUI>
  );
}
