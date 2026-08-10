"use client";

// React
import { useActionState, useState } from "react";

// Hyper Ink

import {
  Form,
  Input,
  FormMetaErrors,
} from "@hyperinkstudio/ui-react-next/components";

// Local @/db
import { type TattooRequest } from "@/db/types";
import { TATT_REQ_FOLLOW_UP_FORM_LIST } from "@/db/api/tattooRequest";
// Local
import { createAClientTattooAndHandleClient } from "../actions";

export function TattooForm({
  tattRequest,
  existingClient,
  clientId,
}: {
  tattRequest: TattooRequest;
  existingClient: boolean;
  clientId?: string;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const initialState = {
    tattooRequest: null,
    errors: null,
  };

  const [state, formAction, isPending] = useActionState(
    createAClientTattooAndHandleClient,
    initialState,
  );

  if (!tattRequest) return null;

  return (
    <>
      <button
        onClick={() => setIsEditing((isPrev) => !isPrev)}
        className="btn preset-filled-primary-400-600"
      >
        Edit Request
      </button>
      <Form
        action={formAction}
        submitText={existingClient ? "create tatt" : "create tatt & client"}
        className="flex flex-col gap-4"
      >
        <Input
          key="existingClient"
          id="existingClient"
          name="existingClient"
          label="Existing Client"
          type="hidden"
          required={true}
          value={existingClient.toString()}
        />
        <Input
          key="clientId"
          id="clientId"
          name="clientId"
          label="Client Id"
          type="hidden"
          required={true}
          value={clientId}
        />
        {TATT_REQ_FOLLOW_UP_FORM_LIST.map(({ id, label, type, required }) => (
          <div key={id}>
            <Input
              key={id}
              id={id}
              name={id}
              label={label}
              type={type}
              required={required}
              inputCls={isEditing ? "input" : ""}
              defaultValue={(tattRequest[id] as string) ?? ""}
              readOnly={!isEditing}
            />
          </div>
        ))}
        {state.errors && <FormMetaErrors errors={state.errors} />}
      </Form>
    </>
  );
}
