"use client";

// React
import { useActionState, useState } from "react";
// Next
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// hyperinkstudio
import {
  Form,
  Heading,
  Page,
} from "@hyperinkstudio/ui-react/components/client";
// Local Parent
import { LINKS_ADMIN } from "@/app/consts";
import { FormContentGetClient } from "@/app/admin/(features)/GetClient";

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
          <div className="flex items-center gap-2">
            <Heading as="h3" text="Lookup A client" />
            <p className="flex items-center gap-2 whitespace-nowrap">
              <span>No client created yet?</span>
              <Link
                className="text-secondary-500"
                href={LINKS_ADMIN.createClient.href}
              >
                {LINKS_ADMIN.createClient.label}
              </Link>
            </p>
          </div>

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
