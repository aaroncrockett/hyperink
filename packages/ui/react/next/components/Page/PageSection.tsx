import { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/cn";

import { SHARED_DEFAULTS } from "./defaults";

type PageSectionProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "className"
> & {
  bgColorCls?: string;
  cls?: string;
  displayCls?: string;
  gapCls?: string;
  heightCls?: string;
  layoutOptCls?: string;
  marginCls?: string;
  maxWidthCls?: string;
  paddingCls?: string;
  useWrapper?: boolean;
  wrapperCls?: string;
  wrapperBgColorCls?: string;
  widthCls?: string;
};

export function PageSection({
  children,
  bgColorCls,
  cls,
  displayCls = SHARED_DEFAULTS.displayCls,
  gapCls = SHARED_DEFAULTS.gapCls,
  heightCls,
  layoutOptCls,
  marginCls = SHARED_DEFAULTS.marginCls,
  maxWidthCls = SHARED_DEFAULTS.maxWidthCls,
  paddingCls = SHARED_DEFAULTS.paddingCls,
  useWrapper = false,
  wrapperCls,
  wrapperBgColorCls,
  widthCls,
  ...props
}: PageSectionProps) {
  const content = (
    <section
      className={cn(
        bgColorCls,
        cls,
        displayCls,
        gapCls,
        heightCls,
        layoutOptCls,
        marginCls,
        maxWidthCls,
        paddingCls,
        widthCls,
      )}
      {...props}
    >
      {children}
    </section>
  );

  if (useWrapper) {
    return <div className={cn(wrapperBgColorCls, wrapperCls)}>{content}</div>;
  }

  return content;
}
