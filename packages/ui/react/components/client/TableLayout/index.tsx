// Rows.tsx

import { cn } from "@hyperinkstudio/utils/cn";

type RowsProps = {
  children: React.ReactNode;
  gridCls: string;
  gridGapCls?: string;
  gridItemsCls?: string;
  headerCls?: string;
  headerCols: React.ReactNode;
};

export default function Rows({
  children,

  gridCls,
  gridGapCls = "gap-2",
  gridItemsCls = "items-center",
  headerCls = "bg-surface-300 font-bold p-1",
  headerCols,
}: RowsProps) {
  return (
    <>
      <div className={cn(gridCls, gridItemsCls, gridGapCls, headerCls)}>
        {headerCols}
      </div>

      {children}
    </>
  );
}
