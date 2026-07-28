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
import React, { ReactNode } from "react";

const gridCls = "grid grid-cols-[5rem_8rem_12rem_10rem]";

export function TattooRequests({
  requests,
  lead,
  trail,
}: {
  requests: Partial<TattooRequest>[] | null;
  lead?: ReactNode;
  trail?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="">{lead}</div>
      {requests && (
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
          {requests &&
            requests.map(({ preferred_name, email, phone, id }) => (
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
                    EDIT
                  </Link>
                </span>

                <span className="truncate">{preferred_name}</span>
                <span className="truncate">{email}</span>
                <span className="truncate">{phone}</span>
              </RowOfTableLayout>
            ))}

          <div className="">{trail}</div>
        </TableLayout>
      )}
    </div>
  );
}
