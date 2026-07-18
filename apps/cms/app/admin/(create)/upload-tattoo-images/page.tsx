"use client";
// React
import { useActionState } from "react";
// Inktree
import {
  Form,
  Heading,
  Page,
  SelectState,
} from "@inktree/ui-react/components/client";
// Local Parent
import { LookupColOptions } from "@/utils/db/clientPersons/";
import { FormContentGetClient } from "@/app/admin/(features)/GetClient";
// Local
import { getClient } from "./actions";

const initClientState = {
  client: null,
};

export default function UploadTattooImagePage() {
  const [state, actionState] = useActionState(getClient, initClientState);
  return (
    <Page>
      <Heading text="Upload Images" as="h2" />

      <SelectState options={LookupColOptions}>
        {({ lookupType }) => (
          <>
            <Form
              action={async (formData: FormData) => await actionState(formData)}
            >
              <FormContentGetClient lookupType={lookupType} />
            </Form>
            {state?.client?.preferred_name}
          </>
        )}
      </SelectState>

      {/* {clientByPhoneState.data && (
        <Form action={uploadAction}>
          <FormContent
            clientTattoos={clientState.data}
            isPending={uploadPending}
          />
        </Form>
      )} */}
    </Page>
  );
}
