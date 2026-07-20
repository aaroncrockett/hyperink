"use client";
// React
import { useActionState, useState } from "react";
// hyperinkstudio
import {
  Form,
  Heading,
  Page,
  SelectState,
} from "@hyperinkstudio/ui-react/components/client";
// Local Parent
import { LOOKUP_COLS_OPTIONS } from "@/utils/db/clientPersons/";
import { FormContentGetClient } from "@/app/admin/(features)/GetClient";
// Local
import { getClient } from "./actions";

const initClientState = {
  errors: null,
  client: null,
};

export default function UploadTattooImagePage() {
  const [clientState, clientActionState] = useActionState(
    getClient,
    initClientState,
  );
  const [showClientState, setShowClientState] = useState(false);

  return (
    <Page>
      <Heading text="Upload Tattoo Images" as="h2" />
      {!showClientState && (
        <button
          type="button"
          className="btn preset-filled-secondary-500"
          onClick={() => setShowClientState((prev) => !prev)}
        >
          Attach Image to a client
        </button>
      )}
      {showClientState && (
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
      )}
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
