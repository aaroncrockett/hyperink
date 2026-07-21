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
  SelectState,
} from "@hyperinkstudio/ui-react/components/client";
// Local Parent
import { LINKS_ADMIN } from "@/app/consts";
import { FormContentGetClient } from "@/app/admin/(features)/GetClient";
import { LOOKUP_COLS_OPTIONS } from "@/utils/db/clientPersons/";

// Local Curr Dir
import { FormContentClientTattoo } from "./_components/FormContentClientTattoo";
import { ClientResults } from "./_components/ClientResults";
import { createTattoo, getClients } from "./actions";

const initClientState = {
  errors: null,
  clients: null,
};

export default function CreateClientTattooPage() {
  const searchParams = useSearchParams();

  const [clientState, clientActionState] = useActionState(
    getClients,
    initClientState,
  );

  const [selectedClient, setSelectedClient] = useState({
    clientId: searchParams.get("clientId") ?? "",
    preferredName: searchParams.get("preferredName") ?? null,
  });

  return (
    <Page>
      <Heading as="h2" text="Create a Tattoo Record" />

      {selectedClient.clientId && (
        <Form action={createTattoo}>
          <FormContentClientTattoo
            clientId={selectedClient.clientId}
            preferredName={selectedClient.preferredName}
          />
        </Form>
      )}

      {!selectedClient.clientId && (
        <>
          <div className="flex flex-col  gap-2">
            <Heading as="h5" text="Lookup A client" />

            <SelectState options={LOOKUP_COLS_OPTIONS}>
              {({ lookupType }) => (
                <>
                  <Form
                    action={async (formData: FormData) =>
                      await clientActionState(formData)
                    }
                  >
                    <FormContentGetClient lookupType={lookupType} />
                  </Form>
                </>
              )}
            </SelectState>

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

          {clientState.clients && (
            <ClientResults
              clients={clientState.clients}
              onSelectClient={(client) =>
                setSelectedClient({
                  clientId: client.id,
                  preferredName: client.preferred_name,
                })
              }
            />
          )}
        </>
      )}
    </Page>
  );
}
