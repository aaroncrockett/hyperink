"use server";

// Hyperink
import {
  Heading,
  Page,
  TableLayout,
} from "@hyperinkstudio/ui-react/components";
import { cn } from "@hyperinkstudio/utils/cn";
import { formatDate } from "@hyperinkstudio/utils/dates";

// Local Outter
import { createServerClientAndAuth } from "@/db/server";
import { getLastTenClients, ALL_CLIENT_COLS_KEY_VAL } from "@/db";

// Local
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { Nav } from "../_components/Nav";

const gridCls = "grid grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

export default async function ClientsPage() {
  const authedClient = await createServerClientAndAuth();
  const { data: lastTenClients } = await getLastTenClients(authedClient);

  return (
    <Page>
      <Heading as="h1" text="Client Records" />
      <div className="flex gap-3">
        <Nav links={NAV_ADMIN_CLIENT_LIST} />
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
