"use client";

// React
import { useActionState, useState } from "react";

// Hyper Ink
import { Form, Input } from "@hyperinkstudio/ui-react/components";

// Local
import { type TattooRequest } from "@/db/types";
import { TATTOO_REQUEST_FORM_LIST } from "@/db/tattooRequest";
import { createAClientTattooAndHandleClient } from "../actions";

export function TattooForm({
  tattRequest,
  existingClient,
}: {
  tattRequest: TattooRequest;
  existingClient: boolean;
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

      {/* {isEditing && ( */}
      <Form
        action={formAction}
        submitText={existingClient ? "create tatt" : "create tatt & client"}
      >
        <Input
          key="existingClient"
          id="existingClient"
          name="Existing Client"
          label="Existing Client"
          type="hidden"
          required={true}
          value={existingClient.toString()}
        />
        {TATTOO_REQUEST_FORM_LIST.map(({ id, label, type, required }) => (
          <div key={id}>
            <Input
              key={id}
              id={id}
              name={id}
              label={label}
              type={type}
              required={required}
              inputClass={isEditing ? "input" : ""}
              defaultValue={tattRequest[id] ?? ""}
              disabled={isEditing ? false : true}
            />
          </div>
        ))}
      </Form>
      {/* )} */}
      {/* {!isEditing && (
        <>
          {TATTOO_REQUEST_FORM_LIST.map(({ id }) => (
            <div key={id}>
              <span>{id}</span>
            </div>
          ))}
        </>
      )} */}
    </>
  );
}
