"use client";
// React
import { useActionState, useState } from "react";
//hyper ink
import { Form, SelectState } from "@hyperinkstudio/ui-react/components/client";
// Local Parent
import type { ProfileTaggingOptions } from "@/utils/db/types";
import { LOOKUP_COLS_OPTIONS } from "@/utils/db/clientPersons/";
import { FormContentGetClient } from "@/app/admin/(features)/GetClient";
//local
import { getClient } from "../actions";

type FormWrapperProps = {
  taggingOpts: Partial<ProfileTaggingOptions> | null;
};

export default function FormWrapper({ taggingOpts }: FormWrapperProps) {
  // const tags = isStringArray(taggingOpts?.tags) ? taggingOpts.tags : [];
  // const styles = isStringArray(taggingOpts?.styles) ? taggingOpts.styles : [];
  // const collections = isStringArray(taggingOpts?.collections)
  //   ? taggingOpts.collections
  //   : [];

  const initClientState = {
    errors: null,
    client: null,
  };

  const [clientState, clientActionState] = useActionState(
    getClient,
    initClientState,
  );
  const [showClientState, setShowClientState] = useState(false);

  return (
    <>
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
    </>
  );
}
