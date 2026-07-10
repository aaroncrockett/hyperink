"use client";

import { LINKS_ADMIN } from "@/app/consts";

import { ClientTattooFormContent } from "./ClientTattooFormContent";
import { GetClientFormContent } from "./GetClientFormContent";
import { ClientResults } from "./ClientResults";

import { createTattoo, getClient } from "./actions";

import { Form, Heading, Page } from "@inktree/ui-react/components";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type LookupType = "email" | "phone" | "preferredName";

const initClientState = {
  clients: null,
};

export default function CreateClientTattooPage() {
  const searchParams = useSearchParams();

  const [lookupType, setLookupType] = useState<LookupType>("email");

  const [clientState, getClientAction] = useActionState(
    getClient,
    initClientState,
  );

  const [selectedClient, setSelectedClient] = useState({
    clientId: searchParams.get("clientId") ?? "",
    preferredName: searchParams.get("preferredName") ?? "",
  });

  return (
    <Page>
      <Heading as="h2" text="Create a Tattoo Record" />

      {selectedClient.clientId ? (
        <Form action={createTattoo}>
          <ClientTattooFormContent
            clientId={selectedClient.clientId}
            preferredName={selectedClient.preferredName}
          />
        </Form>
      ) : (
        <>
          <Heading as="h4" text="Lookup A client" />
          <p>
            No client created yet?{" "}
            <Link
              className="text-secondary-500"
              href={LINKS_ADMIN.createClient.href}
            >
              {LINKS_ADMIN.createClient.label}
            </Link>
          </p>

          <label className="lable">Lookup By</label>
          <select
            value={lookupType}
            onChange={(e) => setLookupType(e.target.value as LookupType)}
            className="select"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="preferredName">Preferred Name</option>
          </select>

          <Form action={getClientAction}>
            <GetClientFormContent lookupType={lookupType} />
          </Form>

          {clientState.clients?.length ? (
            <ClientResults
              clients={clientState.clients}
              onSelectClient={(client) =>
                setSelectedClient({
                  clientId: client.id,
                  preferredName: client.preferred_name,
                })
              }
            />
          ) : null}
        </>
      )}
    </Page>
  );
}
