"use client";

// import { ClientCheckFormContent } from "./ClientCheckFormContent";
import { Form, Heading, Page } from "@inktree/ui-react/components";
// import { checkClient } from "./actions";
import { useActionState } from "react";

const initialState = {
  data: null,
};

export default function CreateTattooRecordPage() {
  // const [state, formAction] = useActionState(checkClient, initialState);
  return (
    <Page>
      <Heading as="h2" text="Create a Tattoo Record" />
      {/* <Form action={formAction}>
        <ClientCheckFormContent />
      </Form>

      {state.data?.id && <form>asdf</form>} */}
    </Page>
  );
}
