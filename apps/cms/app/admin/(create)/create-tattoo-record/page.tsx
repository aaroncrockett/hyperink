"use client";

import { ClientTattooFormContent } from "./ClientTattooFormContent";
import { GetClientFormContent } from "./GetClientFormContent";
import { ClientResults } from "./ClientResults";

import { createTattoo, getClient } from "./actions";

import { Form, Heading, Page } from "@inktree/ui-react/components";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";

const initClientState = {
  clients: null,
};

export default function CreateClientTattooPage() {
  const searchParams = useSearchParams();

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
          <Form action={getClientAction}>
            <GetClientFormContent />
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
