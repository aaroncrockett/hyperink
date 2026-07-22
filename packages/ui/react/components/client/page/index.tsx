import { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperinkstudio/utils/cn";

type PageProps = ComponentPropsWithoutRef<"div"> & {
  display?: string;
  margin?: string;
  maxWidth?: string;
  padding?: string;
  space?: string;
  width?: string;
};

export function Page({
  children,
  className,
  display = "flex flex-col",
  margin = "mx-auto",
  maxWidth = "max-w-275",
  padding = "px-4 !py-6 lg:py-6!",
  space = "space-y-4",
  width = "w-full",
  ...props
}: PageProps) {
  return (
    <div
      className={cn(
        className,
        display,
        margin,
        maxWidth,
        padding,
        space,
        width,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
