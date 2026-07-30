// next, react
import { ReactNode } from "react";
import Link from "next/link";
// hyper ink
import {
  TableLayout,
  RowOfTableLayout,
} from "@hyperinkstudio/ui-react/components";
// local
import type { TattooRequest } from "@/db/types";
import {
  TATT_REQ_FOLLOW_UP_FORM_LIST,
  TATT_REQ_FOLLOW_UP_FORM_KEYS,
} from "@/db/tattooRequest";
import { LINKS_ADMIN } from "@/app/consts";

const gridCls = "grid grid-cols-[5rem_8rem_8rem_8rem_8rem_12rem_10rem]";

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
              {TATT_REQ_FOLLOW_UP_FORM_LIST.map(({ label }, id) => {
                return <span key={id}>{label}</span>;
              })}
            </>
          }
        >
          {requests &&
            requests.map(({ id, ...requests }) => (
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

                {TATT_REQ_FOLLOW_UP_FORM_KEYS.map((formKey, id) => {
                  return (
                    <span className="truncate" key={id}>
                      {requests[formKey]}
                    </span>
                  );
                })}
              </RowOfTableLayout>
            ))}

          <div className="">{trail}</div>
        </TableLayout>
      )}
    </div>
  );
}
