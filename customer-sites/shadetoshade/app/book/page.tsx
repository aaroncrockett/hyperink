"use client";
// react and next
import { useActionState } from "react";
import Link from "next/link";
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
//Local

import { TATT_REQFOLLOW_UP_FORM_LIST, TYPES_MAP } from "@/db/tattooRequest";
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

  const renderField = ({
    id,
    label,
    type,
    required,
    value,
    inputSize,
    options,
  }: (typeof TATT_REQFOLLOW_UP_FORM_LIST)[number]) => {
    const className = cn(
      inputSize === "lg" && "lg:col-span-4 col-span-2 items-center ",
      inputSize === "md" && "lg:col-span-2 col-span-1 items-denter ",
      inputSize === "sm" && "lg:col-span-2 col-span-1 items-center ",
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
            labelClassName="text-sm"
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
        className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-y-5 gap-6 gap-y-3 max-w-6xl items-start"
        action={formAction}
        submitBtnCls="btn lg:w-2/3 lg:ml-[140px]"
      >
        {TATT_REQFOLLOW_UP_FORM_LIST.map(renderField)}
      </Form>

      {state.errors &&
        Object.entries(state.errors).map(([key, error]) => (
          <FormMetaErrors key={key} errors={{ [key]: error }} />
        ))}
    </Page>
  );
}
