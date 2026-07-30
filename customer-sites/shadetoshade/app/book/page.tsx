"use client";

import { cn } from "@hyperinkstudio/utils/";

import { useActionState } from "react";
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

import {
  createTattooRequestAction,
  type TattRequestFormState,
} from "./actions";

import {
  TATTOO_REQUEST_FORM_LIST,
  TATTOO_REQUEST_FORM_KEYS,
  TYPES_MAP,
} from "@/db/tattooRequest";

const initialState: TattRequestFormState = {
  errors: null,
  tattooRequest: null,
};

export default function FormContentBook() {
  const [state, formAction] = useActionState(
    createTattooRequestAction,
    initialState,
  );

  const renderField = ({
    id,
    label,
    type,
    required,
    value,
    inputSize,
    options,
  }: (typeof TATTOO_REQUEST_FORM_LIST)[number]) => {
    const className = cn(
      inputSize === "lg" && "lg:col-span-4 col-span-2",
      inputSize === "md" && "lg:col-span-2 col-span-1",
      inputSize === "sm" && "lg:col-span-1 col-span-1",
      "lg:grid lg:grid-cols-[140px_1fr] w-full",
    );

    switch (TYPES_MAP[type]) {
      case "checkbox":
        return (
          <InputCheck
            key={id}
            id={id}
            name={id}
            label={label}
            required={required}
            errors={state.errors}
            value={value}
            className={className}
          />
        );
      case "textarea":
        return (
          <InputTextArea
            key={id}
            id={id}
            name={id}
            label={label}
            required={required}
            errors={state.errors}
            value={value}
            className={className}
          />
        );
      case "select":
        return (
          <Select
            key={id}
            id={id}
            name={id}
            label={label}
            required={required}
            errors={state.errors}
            value={value}
            options={options}
            className={className}
          />
        );

      case "input":
        return (
          <Input
            key={id}
            id={id}
            name={id}
            label={label}
            type={type}
            required={required}
            errors={state.errors}
            value={value}
            className={className}
          />
        );

      default:
        return (
          <Input
            key={id}
            id={id}
            name={id}
            label={label}
            type={type}
            required={required}
            errors={state.errors}
            value={value}
            className={className}
          />
        );
    }
  };

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request Form" />
      <Form
        className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-y-5 gap-6 gap-y-3 max-w-6xl items-start"
        action={formAction}
      >
        {TATTOO_REQUEST_FORM_LIST.map(renderField)}
        {state.errors && (
          <FormMetaErrors
            errors={state.errors}
            excludeKeys={TATTOO_REQUEST_FORM_KEYS}
          />
        )}
      </Form>
    </Page>
  );
}
