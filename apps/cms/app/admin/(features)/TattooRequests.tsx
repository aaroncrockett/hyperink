import type { TattooRequest } from "@/db/types";
import { TableLayout } from "@hyperinkstudio/ui-react/components";
import { cn } from "@hyperinkstudio/utils/cn";

const gridCls = "grid grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

export function TattooRequests({
  requests,
}: {
  requests: Partial<TattooRequest>[];
}) {
  return (
    <TableLayout
      gridCls={gridCls}
      headerCols={
        <>
          <span>Process</span>
        </>
      }
    >
      {requests.map(({ email, id }, index) => (
        <div className={cn(gridCls, " odd:bg-surface-100-900/70 p-2")} key={id}>
          <span className="text-primary-400-600 underline truncate">
            update{" "}
          </span>
        </div>
      ))}
    </TableLayout>
  );
}
