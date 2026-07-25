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
import { createSSClient } from "@/db/server";
import { getLastTenClients, getClientColLabel } from "@/db";

// Local
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { Nav } from "../_components/Nav";

const gridCls = "grid grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

export default async function ClientsPage() {
  const authedClient = await createSSClient();
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
            <span>{getClientColLabel("preferred_name")}</span>
            <span>{getClientColLabel("first_name")}</span>
            <span>{getClientColLabel("last_name")}</span>
            <span>{getClientColLabel("created_at")}</span>
            <span>{getClientColLabel("updated_at")}</span>
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
              {client.preferred_name}
            </span>

            <span className="truncate">{client.first_name}</span>

            <span className="truncate">{client.last_name}</span>

            <span className="truncate">
              {formatDate(client?.created_at ?? "")}
            </span>

            <span className="truncate">
              {formatDate(client?.updated_at ?? "")}
            </span>
          </div>
        ))}
      </TableLayout>
    </Page>
  );
}
