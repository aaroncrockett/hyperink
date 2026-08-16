"use client";

import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { TattooFormState } from "../page";

import {
  Input,
  InputCheck,
  InputTextArea,
  Select,
} from "@hyperinkstudio/ui-react-next/components";
import { cn } from "@hyperinkstudio/utils";

import { type TattooRequestData, TYPES_MAP } from "@/business/tattooRequest";
import type { TattRequestFormState } from "../actions";

type RenderFieldProps = {
  field: TattooRequestData;
  errors: TattRequestFormState["errors"];
  formState: TattooFormState;
  setFormState: Dispatch<SetStateAction<TattooFormState>>;
  key: string;
};

export function RenderField({
  field,
  errors,
  formState,
  setFormState,
  key,
}: RenderFieldProps) {
  const { id, label, type, required, value, inputSize, options } = field;

  const className = cn(
    inputSize === "lg" && "lg:col-span-4 col-span-2 items-center",
    inputSize === "md" && "lg:col-span-2 col-span-1 items-center",
    inputSize === "sm" && "lg:col-span-2 col-span-1 items-center",
    "lg:grid lg:grid-cols-[140px_1fr] w-full",
  );

  switch (TYPES_MAP[type]) {
    case "checkbox":
      return (
        <InputCheck
          id={id}
          key={key}
          name={id}
          label={label}
          labelSizeCls="text-sm"
          required={required}
          errors={errors}
          value={value}
          wrapperCls={className}
        />
      );

    case "textarea":
      return (
        <InputTextArea
          id={id}
          key={key}
          name={id}
          label={label}
          required={required}
          errors={errors}
          value={value}
          wrapperCls={className}
        />
      );

    case "select":
      if (!options?.length) return null;

      return (
        <Select
          id={id}
          key={key}
          name={id}
          label={label}
          required={required}
          errors={errors}
          value={
            formState.type === null
              ? undefined
              : formState.type === "pre-flash"
                ? "flash"
                : formState.type
          }
          options={options}
          wrapperCls={className}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            let state: TattooFormState;
            if (e.target.value === "flash") {
              state = {
                type: "pre-flash",
                disabled: true,
                flashId: null,
              };
              setFormState(state);
            }

            if (e.target.value === "custom") {
              state = {
                type: "custom",
                disabled: false,
                flashId: null,
              };
              setFormState(state);
            }
          }}
        />
      );

    case "input":
    default:
      return (
        <Input
          id={id}
          key={key}
          name={id}
          label={label}
          type={type}
          required={required}
          errors={errors}
          value={value}
          wrapperCls={className}
        />
      );
  }
}
