"use server";

// Next
import Link from "next/link";

// Hyperink
import {
  Heading,
  Page,
  TableLayout,
} from "@hyperinkstudio/ui-react/components/client";
import { cn } from "@hyperinkstudio/utils/cn";

// Local Outter
import { createServerClientAndAuth } from "@/utils/db/server";
import { getLastTenClients, ALL_CLIENT_COLS_KEY_VAL } from "@/utils/db";

// Local
import { LINKS_ADMIN } from "@/app/consts";

const gridCls = "grid grid-cols-[12rem_10rem_10rem_20rem_12rem_12rem_12rem]";

export default async function ClientPage() {
  const authedClient = await createServerClientAndAuth();
  const { data: lastTenClients } = await getLastTenClients(authedClient);

  return (
    <Page className="">
      <Heading as="h1" text="Client Records" />

      <Link className="bg-primary-500" href={LINKS_ADMIN.createClient.href}>
        {LINKS_ADMIN.createClient.label}
      </Link>

      <TableLayout
        gridCls={gridCls}
        headerCols={
          <>
            <span>{ALL_CLIENT_COLS_KEY_VAL.preferred_name.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.first_name.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.last_name.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.email.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.phone.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.created_at.label}</span>
            <span>{ALL_CLIENT_COLS_KEY_VAL.updated_at.label}</span>
          </>
        }
      >
        {lastTenClients?.map((client) => (
          <div
            className={cn(
              gridCls,
              "odd:bg-surface-300-700 even:bg-surface-200-800 p-2",
            )}
            key={client.id}
          >
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
              {client[ALL_CLIENT_COLS_KEY_VAL.email.value]}
            </span>

            <span className="truncate">
              {client[ALL_CLIENT_COLS_KEY_VAL.phone.value]}
            </span>

            <span className="truncate">
              {client[ALL_CLIENT_COLS_KEY_VAL.created_at.value]}
            </span>

            <span className="truncate">
              {client[ALL_CLIENT_COLS_KEY_VAL.updated_at.value]}
            </span>
          </div>
        ))}
      </TableLayout>
    </Page>
  );
}
