import { ComponentPropsWithoutRef } from "react";
import { Heading as HeadingUI } from "@hyperinkstudio/ui-react-next/components/Heading";

type HeadingProps = Omit<
  ComponentPropsWithoutRef<typeof HeadingUI>,
  "as" | "fontFaceCls" | "textColorCls"
> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontFaceCls?: string;
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
  const h1Size = "text-3xl md:text-4xl";
  const h2Size = "text-2xl md:text-3xl";
  const h3Size = "text-xl md:text-2xl";
  const h4Size = "text-lg md:text-xl";
  const h5Size = "text-lg";
  const h6Size = "text-lg md:text-xl";

  if ((LARGE_HEADERS as readonly string[]).includes(as)) {
    textColor = textColorCls ? textColorCls : "text-tertiary-600";
    fontFace = fontFaceCls ? fontFaceCls : "font-display";
    uppercase = uppercaseCls ? uppercaseCls : "";
  }

  if ((SMALL_HEADERS as readonly string[]).includes(as)) {
    textColor = textColorCls ? textColorCls : "text-secondary-950-50";
    fontFace = fontFaceCls ? fontFaceCls : "";
    uppercase = uppercaseCls ? uppercaseCls : "";
  }

  return (
    <HeadingUI
      h1Size={h1Size}
      h2Size={h2Size}
      h3Size={h3Size}
      h4Size={h4Size}
      h5Size={h5Size}
      h6Size={h6Size}
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
