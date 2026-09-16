import { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperink/utils/cn";

import { SHARED_DEFAULTS } from "./defaults";

type PageSectionProps = ComponentPropsWithoutRef<"section"> & {
  displayCls?: string;
  gapCls?: string;
  marginCls?: string;
  maxWidthCls?: string;
  paddingCls?: string;
  useWrapper?: boolean;
  wrapperClassName?: string;
};

export function PageSection({
  children,
  className,
  displayCls = SHARED_DEFAULTS.displayCls,
  gapCls = SHARED_DEFAULTS.gapCls,
  marginCls = SHARED_DEFAULTS.marginCls,
  maxWidthCls = SHARED_DEFAULTS.maxWidthCls,
  paddingCls = SHARED_DEFAULTS.paddingCls,
  useWrapper = false,
  wrapperClassName,
  ...props
}: PageSectionProps) {
  const content = (
    <section
      className={cn(
        className,
        displayCls,
        gapCls,
        marginCls,
        maxWidthCls,
        paddingCls,
      )}
      {...props}
    >
      {children}
    </section>
  );

  if (useWrapper) {
    return <div className={cn(wrapperClassName)}>{content}</div>;
  }

  return content;
}
