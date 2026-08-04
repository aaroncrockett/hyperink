"use server";

// Hyperink
import {
  Heading,
  Page,
  TableLayout,
  RowOfTableLayout,
} from "@hyperinkstudio/ui-react/components";
import { formatDate } from "@hyperinkstudio/utils/dates";

// Local Outter
import { createSSClient } from "@/db/server";
import { getLastTenClients, getClientColLabel } from "@/db";

// Local
import { NAV_ADMIN_CLIENT_LIST } from "@/app/consts";
import { PageAdminNav } from "../_components/PageAdminNav";

const gridCls = "grid grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

export default async function ClientsPage() {
  const authedClient = await createSSClient();
  const { data: lastTenClients } = await getLastTenClients(authedClient);

  return (
    <Page>
      <Heading as="h1" text="Client Records" />

      <PageAdminNav links={NAV_ADMIN_CLIENT_LIST} />

      {lastTenClients && (
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
          {lastTenClients?.map((client, index) => (
            <RowOfTableLayout key={client.id} gridCls={gridCls}>
              <span className="text-secondary-500 font-bold underline truncate">
                update
              </span>
              <span className="text-secondary-500 font-bold underline  truncate">
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
            </RowOfTableLayout>
          ))}
        </TableLayout>
      )}
    </Page>
  );
}
