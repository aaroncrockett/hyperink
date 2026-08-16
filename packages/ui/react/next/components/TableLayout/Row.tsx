import type { ComponentPropsWithoutRef } from "react";
//hyperink
import { cn } from "@hyperinkstudio/utils/cn";

type RowType = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  bgCls?: string;
  bgRowCls?: string;
  cls?: string;
  gridColCls?: string;
  paddingCls?: string;
};

export function Row({
  children,
  bgCls,
  bgRowCls = "even:bg-surface-200-800/30 bg-surface-100-900/70",
  cls,
  gridColCls,
  paddingCls = "p-2 md:p-3",
  ...props
}: RowType) {
  return (
    <div
      className={cn("grid", bgRowCls, bgCls, cls, gridColCls, paddingCls)}
      {...props}
    >
      {children}
    </div>
  );
}
