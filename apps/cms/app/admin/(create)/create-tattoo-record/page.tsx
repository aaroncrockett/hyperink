"use client";

// React
import { useActionState, useState } from "react";
// Next
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// inktree
import { Form, Heading, Page } from "@inktree/ui-react/components/client";
// Local Root
import { LINKS_ADMIN } from "@/app/consts";
// Local Parent
import { FormContentGetClient } from "../(features)/FormContentGetClient/";
import type { LookupType } from "../(features)/FormContentGetClient/types";
// Local Curr Dir
import { ClientTattooFormContent } from "./_components/ClientTattooFormContent";
import { ClientResults } from "./_components/ClientResults";
import { createTattoo, getClient } from "./actions";

const initClientState = {
  client: null,
};

export default function CreateClientTattooPage() {
  const searchParams = useSearchParams();

  const [lookupType, setLookupType] = useState<LookupType>("email");

  const [clientState, getClientAction, clientPending] = useActionState(
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
            <option value="tattooYear">Tattoo Year</option>
          </select>

          <Form
            action={async () => {
              return await getClientAction();
            }}
          >
            <FormContentGetClient lookupType={lookupType} />
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
