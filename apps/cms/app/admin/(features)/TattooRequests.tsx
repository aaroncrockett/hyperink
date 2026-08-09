// next, react
import { ReactNode } from "react";
import Link from "next/link";
// hyper ink
import {
  TableLayout,
  RowOfTableLayout,
} from "@hyperinkstudio/ui-react-next/components";
import { formatDate } from "@hyperinkstudio/utils";
// local
import type { TattooRequest } from "@/db/types";
import {
  TATT_REQ_BASE_FORM_LIST,
  TATT_REQ_BASE_FORM_KEYS,
  TATT_REQ_ENTRY_FORM_SHORT_DISPLAY_LIST,
  TATT_REQ_ENTRY_FORM_SHORT_DISPLAY_KEYS,
} from "@/db/tattooRequest";
import { ADMIN_TATT_REQ } from "@/consts";

const gridColCls =
  "grid-cols-[5rem_8rem_8rem_8rem] md:grid-cols-[5rem_8rem_8rem_8rem_8rem_12rem_10rem]";

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
        <>
          <div className="block md:hidden">
            <TableLayout
              gridColCls={gridColCls}
              headerCols={
                <>
                  <span>Process</span>
                  {TATT_REQ_ENTRY_FORM_SHORT_DISPLAY_LIST.map(
                    ({ label }, id) => {
                      return <span key={id}>{label}</span>;
                    },
                  )}
                </>
              }
            >
              {requests &&
                requests.map(({ id, ...requests }) => (
                  <RowOfTableLayout
                    gridColCls={gridColCls}
                    bgCls="odd:bg-surface-100-900/70"
                    key={id}
                  >
                    <span className="truncate">
                      <Link
                        className="text-secondary-500 font-bold underline"
                        href={`${ADMIN_TATT_REQ.href}/${id}`}
                      >
                        EDIT
                      </Link>
                    </span>

                    {TATT_REQ_ENTRY_FORM_SHORT_DISPLAY_KEYS.map(
                      (formKey, id) => {
                        return (
                          <span className="truncate" key={id}>
                            {/* {formKey === "created_at" && requests.created_at
                              ?
                              : requests[formKey]} */}
                            {formKey === "created_at" &&
                              requests.created_at &&
                              formatDate(requests.created_at, {
                                dateStyle: "short",
                              })}
                          </span>
                        );
                      },
                    )}
                  </RowOfTableLayout>
                ))}

              <div className="">{trail}</div>
            </TableLayout>
          </div>

          <div className="hidden md:block">
            <TableLayout
              gridColCls={gridColCls}
              headerCols={
                <>
                  <span>Process</span>
                  {TATT_REQ_BASE_FORM_LIST.map(({ label }, id) => {
                    return <span key={id}>{label}</span>;
                  })}
                </>
              }
            >
              {requests &&
                requests.map(({ id, ...requests }) => (
                  <RowOfTableLayout
                    gridColCls={gridColCls}
                    bgCls="odd:bg-surface-100-900/70"
                    key={id}
                  >
                    <span className="truncate">
                      <Link
                        className="text-secondary-500 font-bold underline"
                        href={`${ADMIN_TATT_REQ.href}/${id}`}
                      >
                        EDIT
                      </Link>
                    </span>

                    {TATT_REQ_BASE_FORM_KEYS.map((formKey, id) => {
                      return (
                        <span className="truncate" key={id}>
                          <span className="truncate" key={id}>
                            {/* {formKey === "created_at" && requests.created_at
                              ? formatDate(requests.created_at, {
                                  dateStyle: "short",
                                })
                              : ""} */}
                          </span>
                          {requests[formKey]}
                        </span>
                      );
                    })}
                  </RowOfTableLayout>
                ))}

              <div className="">{trail}</div>
            </TableLayout>
          </div>
        </>
      )}
    </div>
  );
}
