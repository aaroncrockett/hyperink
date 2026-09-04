// next, react
import { ReactNode } from "react";

// hyper ink
import {
  TableLayout,
  RowOfTableLayout,
} from "@hyperinkstudio/ui-react-next/components";
import { formatDate } from "@hyperinkstudio/utils";
// local
import type { TattooRequest } from "@/business/types";
import {
  TATT_REQ_ADMIN_SHORT_LIST,
  TATT_REQ_ADMIN_SHORT_KEYS,
} from "@/business/tattooRequest";

import { ADMIN_TATT_REQ } from "@/consts";
import { NextLinkWrapper } from "@/ui";

const gridColCls = "grid-cols-[5rem_1fr_1fr_1fr_1fr]";

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
          <TableLayout
            gridColCls={gridColCls}
            headerCols={
              <>
                <span>Process</span>
                {TATT_REQ_ADMIN_SHORT_LIST.map(({ label }, id) => {
                  return <span key={id}>{label}</span>;
                })}
              </>
            }
          >
            {requests &&
              requests.map(({ id, ...requests }) => (
                <RowOfTableLayout gridColCls={gridColCls} key={id}>
                  <span className="truncate">
                    <NextLinkWrapper
                      className="text-secondary-500 font-bold underline"
                      href={`${ADMIN_TATT_REQ.href}/${id}`}
                    >
                      View
                    </NextLinkWrapper>
                  </span>

                  {TATT_REQ_ADMIN_SHORT_KEYS.map((formKey, id) => {
                    return (
                      <span className="truncate" key={id}>
                        {formKey === "created_at" && requests.created_at
                          ? formatDate(requests.created_at, {
                              dateStyle: "short",
                            })
                          : requests[formKey]}
                      </span>
                    );
                  })}
                </RowOfTableLayout>
              ))}

            <div className="">{trail}</div>
          </TableLayout>
        </>
      )}
    </div>
  );
}
