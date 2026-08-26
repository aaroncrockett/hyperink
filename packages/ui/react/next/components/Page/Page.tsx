import { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/cn";
// local
import { SHARED_DEFAULTS } from "./defaults";

type PageProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  displayCls?: string;
  bgColorCls?: string;
  cls?: string;
  gapCls?: string;
  heightCls?: string;
  layoutOptCls?: string;
  marginCls?: string;
  maxWidthCls?: string;
  paddingCls?: string;
  sectional?: boolean;
  wrapperBgColorCls?: string;
  widthCls?: string;
  wrapperheightCls?: string;
};

export function Page({
  children,
  bgColorCls,
  cls,
  displayCls = SHARED_DEFAULTS.displayCls,
  gapCls = SHARED_DEFAULTS.gapCls,
  heightCls = "h-full",
  layoutOptCls,
  marginCls = SHARED_DEFAULTS.marginCls,
  maxWidthCls = SHARED_DEFAULTS.maxWidthCls,
  paddingCls = SHARED_DEFAULTS.paddingCls,
  sectional = false,
  widthCls = SHARED_DEFAULTS.widthCls,
  wrapperBgColorCls,
  wrapperheightCls = "h-full",
  ...props
}: PageProps) {
  return (
    <>
      {sectional && (
        <div className={cn(wrapperBgColorCls, "flex-1", cls)}>{children}</div>
      )}
      {!sectional && (
        <div className={cn(wrapperBgColorCls, "flex-1", cls)}>
          <div
            className={cn(
              bgColorCls,
              cls,
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
