"use client";
// react and next
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";
import Link from "next/link"
// hyperink
import {
  Form,
  FormMetaErrors,
  Heading,
  Page,
} from "@hyperinkstudio/ui-react/components";

//Local @db
import { TATT_REQ_ENTRY_FORM_LIST } from "@/db/tattooRequest";
//Local
import { RenderField } from "./_components/RenderField";
import { INTERNAL_LINKS } from "@/constants";

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

const searchParams = useSearchParams();

const [flashIdState] = useState(() => searchParams.get("flashId") ?? "");
const [tattTypeState, setTattTypeState] = useState(() =>
  searchParams.get("flashId") ? "flash" : ""
);
  const [formDisabledState, setFormDisabledState] = useState(true)


  return (
    <Page>
      <Heading as="h1" text="Tattoo Request Form" />
      <Form
        className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-y-5 gap-6 gap-y-3 max-w-6xl items-start"
        action={formAction}
        submitBtnCls="btn lg:w-2/3 lg:ml-[140px]"
        submitDisabled={formDisabledState}
      >
        {TATT_REQ_ENTRY_FORM_LIST.map((field) => {
          return RenderField({ field, errors: state.errors, setTattTypeState, tattTypeState });
        })}
      </Form>

      {tattTypeState === "flash" && <p>Select your <Link className="text-tertiary-500" href={INTERNAL_LINKS.flash.href}>{INTERNAL_LINKS.flash.name} </Link> before continuing. We will save your info.</p>}
      {tattTypeState === "custom" && <p>show more fields for custom</p>}

      {state.errors &&
        Object.entries(state.errors).map(([key, error]) => (
          <FormMetaErrors key={key} errors={{ [key]: error }} />
        ))}
    </Page>
  );
}
