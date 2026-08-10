import { ComponentPropsWithoutRef } from "react";
// hyperink
import { cn } from "@hyperinkstudio/utils/cn";

type PageProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  displayCls?: string;
  cls?: string;
  gapCls?: string;
  heightCls?: string;
  layoutOptCls?: string;
  marginCls?: string;
  maxWidthCls?: string;
  paddingCls?: string;
  widthCls?: string;
};

export function Page({
  children,
  cls,
  displayCls = "flex flex-col",
  gapCls = "gap-4",
  heightCls = "h-full",
  layoutOptCls,
  marginCls = "mx-auto",
  maxWidthCls = "max-w-275",
  paddingCls = "px-4 py-5",
  widthCls = "w-full",
  ...props
}: PageProps) {
  return (
    <div
      className={cn(
        cls,
        displayCls,
        heightCls,
        marginCls,
        maxWidthCls,
        paddingCls,
        gapCls,
        widthCls,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
