"use client";

// React
import { useState } from "react";

// Hyper Ink
import { Form } from "@hyperinkstudio/ui-react/components";

// Local
import { type TattooRequest } from "@/db/types";
import { TATTOO_REQUEST_FORM_LIST } from "@/db/tattooRequest";

export function TattooForm({ tattRequest }: { tattRequest: TattooRequest }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!tattRequest) return null;

  return (
    <>
      <button
        onClick={() => setIsEditing((isPrev) => !isPrev)}
        className="btn preset-filled-primary-400-600"
      >
        Edit Request
      </button>

      {isEditing ? (
        <Form>
          {TATTOO_REQUEST_FORM_LIST.map(({ id }) => (
            <div key={id}>
              <span>{id}</span>
            </div>
          ))}
        </Form>
      ) : (
        <>
          <p>not editing</p>

          {TATTOO_REQUEST_FORM_LIST.map(({ id }) => (
            <div key={id}>
              <span>{id}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}
