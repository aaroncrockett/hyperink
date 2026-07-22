"use server";

// Hyperink
import {
  Heading,
  Page,
  TableLayout,
} from "@hyperinkstudio/ui-react/components/client";
import { cn } from "@hyperinkstudio/utils/cn";
import { formatDate } from "@hyperinkstudio/utils/dates";

// Local Outter
import { createServerClientAndAuth } from "@/utils/db/server";
import { getLastTenClients, ALL_CLIENT_COLS_KEY_VAL } from "@/utils/db";

// Local
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { PageAdminNavs } from "../_components/PageAdminNavs";

const gridCls = "grid grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

export default async function ClientPage() {
  const authedClient = await createServerClientAndAuth();
  const { data: lastTenClients } = await getLastTenClients(authedClient);

  return (
    <Page>
      <Heading as="h1" text="Client Records" />
      <div className="flex gap-3">
        {NAV_ADMIN_CLIENT_LIST.map((link) => {
          return <PageAdminNavs key={link.href} link={link} />;
        })}
      </div>

      <TableLayout
        gridCls={gridCls}
        headerCols={
          <>
            <span>Update Client</span>
            <span>Create Tatt Record</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.preferred_name.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.first_name.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.last_name.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.created_at.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.updated_at.label}</span>
          </>
        }
      >
        {lastTenClients?.map((client) => (
          <div
            className={cn(gridCls, " odd:bg-surface-100-900/70 p-2")}
            key={client.id}
          >
            <span className="text-primary-400-600 underline truncate">
              update{" "}
            </span>
            <span className="text-primary-400-600 underline  truncate">
              create
            </span>
            <span className="truncate font-semibold">
              {client[ALL_CLIENT_COLS_KEY_VAL.preferred_name.value]}
            </span>

            <span className="truncate">
              {client[ALL_CLIENT_COLS_KEY_VAL.first_name.value]}
            </span>

            <span className="truncate">
              {client[ALL_CLIENT_COLS_KEY_VAL.last_name.value]}
            </span>

            <span className="truncate">
              {formatDate(
                client?.[ALL_CLIENT_COLS_KEY_VAL.created_at.value] ?? "",
              )}
            </span>

            <span className="truncate">
              {formatDate(
                client?.[ALL_CLIENT_COLS_KEY_VAL.updated_at.value] ?? "",
              )}
            </span>
          </div>
        ))}
      </TableLayout>
    </Page>
  );
}
