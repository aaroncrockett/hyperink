import type { TattooRequest } from "@/db/types";
import { TableLayout } from "@hyperinkstudio/ui-react/components";
import { Divide } from "lucide-react";
const gridCls = "grid grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

export function TattooRequests({
  requests,
}: {
  requests: Partial<TattooRequest>[];
}) {
  return (
    <TableLayout gridCls={gridCls} headerCols={<p>asdf</p>}>
      {requests.map(({ email, id }, index) => (
        <div key={id ?? index}>{email}</div>
      ))}
    </TableLayout>
  );
}
