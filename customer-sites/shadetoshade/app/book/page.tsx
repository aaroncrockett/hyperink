"use client";
// react and next
import { useActionState, useState } from "react";
// hyperink
import {
  Form,
  FormMetaErrors,
  Heading,
  Input,
  InputTextArea,
  InputCheck,
  Page,
  Select,
} from "@hyperinkstudio/ui-react/components";
import { cn } from "@hyperinkstudio/utils/";

//Local @db
import { TATT_REQ_ENTRY_FORM_LIST, TYPES_MAP } from "@/db/tattooRequest";
//Local
import { RenderField } from "./_components/RenderField";

import {
  createTattooRequestAction,
  type TattRequestFormState,
} from "./actions";

const initialState: TattRequestFormState = {
  errors: null,
  tattooRequest: null,
};

export default function FormContentBook() {
  const [state, formAction] = useActionState(
    createTattooRequestAction,
    initialState,
  );

  const [isFlashState, setIsFlashState] = useState(false);

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request Form" />
      {isFlashState ? "its settt" : "iets not setttt"}
      <Form
        className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-y-5 gap-6 gap-y-3 max-w-6xl items-start"
        action={formAction}
        submitBtnCls="btn lg:w-2/3 lg:ml-[140px]"
      >
        {TATT_REQ_ENTRY_FORM_LIST.map((field) => {
          return RenderField({ field, errors: state.errors, setIsFlashState });
        })}
      </Form>

      {state.errors &&
        Object.entries(state.errors).map(([key, error]) => (
          <FormMetaErrors key={key} errors={{ [key]: error }} />
        ))}
    </Page>
  );
}
