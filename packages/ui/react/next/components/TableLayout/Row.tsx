import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@hyperinkstudio/utils/cn";

type RowType = ComponentPropsWithoutRef<"div"> & {
  gridCls?: string;
};

export function Row({
  children,
  className = "odd:bg-surface-100-900/70 p-2",
  gridCls,

  ...props
}: RowType) {
  return (
    <div className={cn(gridCls, className)} {...props}>
      {children}
    </div>
  );
}
