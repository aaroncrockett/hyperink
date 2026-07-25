// next
import Link from "next/link";
// hyper ink
import {
  TableLayout,
  RowOfTableLayout,
} from "@hyperinkstudio/ui-react/components";
// local
import type { TattooRequest } from "@/db/types";
import { LINKS_ADMIN } from "@/app/consts";

const gridCls = "grid grid-cols-[4rem_10rem_12rem_10rem]";

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
          <span>Preferred Name</span>
          <span>Email</span>
          <span>Phone</span>
        </>
      }
    >
      {requests.map(({ preferred_name, email, phone, id }) => (
        <RowOfTableLayout
          gridCls={gridCls}
          className="odd:bg-surface-100-900/70 p-2"
          key={id}
        >
          <span className="text-primary-400-600 underline truncate">
            <Link
              className="text-primary-400-600"
              href={`${LINKS_ADMIN.tattooRequests.href}/${id}`}
            >
              PROCESS
            </Link>
          </span>

          <span className="truncate">{preferred_name}</span>
          <span className="truncate">{email}</span>
          <span className="truncate">{phone}</span>
        </RowOfTableLayout>
      ))}
    </TableLayout>
  );
}
