"use server";

// Next
import Link from "next/link";

// Hyperink
import { Heading, Page } from "@hyperinkstudio/ui-react/components/client";

// Local Outter
import { createServerClientAndAuth } from "@/utils/db/server";
import { getLastTenClients } from "@/utils/db";

// Local
import { LINKS_ADMIN } from "@/app/consts";

export default async function ClientPage() {
  const authedClient = await createServerClientAndAuth();
  const { data: lastTenClients } = await getLastTenClients(authedClient);

  return (
    <Page>
      <Heading as="h1" text="Client Records" />

      <Link
        className="btn bg-primary-200-800"
        href={LINKS_ADMIN.createClient.href}
      >
        {LINKS_ADMIN.createClient.label}
      </Link>

      <ul className="mt-6 flex flex-col gap-2">
        {lastTenClients?.map((client) => (
          <li
            key={client.id}
            className="rounded border p-3 odd:bg-surface-100 even:bg-surface-200"
          >
            <p className="font-semibold">
              {client.preferred_name || "Unnamed Client"}
            </p>

            {client.first_name && <p>First Name: {client.first_name}</p>}
            {client.last_name && <p>Last Name: {client.last_name}</p>}
            {client.email && <p>Email: {client.email}</p>}
            {client.phone && <p>Phone: {client.phone}</p>}
          </li>
        ))}
      </ul>
    </Page>
  );
}
