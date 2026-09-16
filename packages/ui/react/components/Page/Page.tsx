import { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperink/utils";
// local
import { SHARED_DEFAULTS } from "./defaults";

type PageProps = ComponentPropsWithoutRef<"div"> & {
  displayCls?: string;
  cls?: string;
  gapCls?: string;
  heightCls?: string;
  innerCls?: string;
  marginCls?: string;
  maxWidthCls?: string;
  paddingCls?: string;
  sectional?: boolean;
  widthCls?: string;
};

export function Page({
  children,
  className,
  displayCls = SHARED_DEFAULTS.displayCls,
  gapCls = SHARED_DEFAULTS.gapCls,
  heightCls = SHARED_DEFAULTS.heightCls,
  innerCls,
  marginCls = SHARED_DEFAULTS.marginCls,
  maxWidthCls = SHARED_DEFAULTS.maxWidthCls,
  paddingCls = SHARED_DEFAULTS.paddingCls,
  sectional = false,
  widthCls = SHARED_DEFAULTS.widthCls,
  ...props
}: PageProps) {
  return (
    <>
      {sectional && (
        <div className={cn("flex-1", className, heightCls)} {...props}>
          {children}
        </div>
      )}
      {!sectional && (
        <div className={cn("flex-1", className)}>
          <div
            className={cn(
              innerCls,
              marginCls,
              maxWidthCls,
              paddingCls,
              displayCls,
              gapCls,
              heightCls,
              widthCls,
            )}
            {...props}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
