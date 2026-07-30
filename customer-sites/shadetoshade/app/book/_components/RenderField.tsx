"use client";

import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import {
  Input,
  InputCheck,
  InputTextArea,
  Select,
} from "@hyperinkstudio/ui-react/components";
import { cn } from "@hyperinkstudio/utils";

import { type TattooRequestFormField, TYPES_MAP } from "@/db/tattooRequest";
import type { TattRequestFormState } from "../actions";

type RenderFieldProps = {
  field: TattooRequestFormField;
  errors: TattRequestFormState["errors"];
  setTattTypeState: Dispatch<SetStateAction<string>>;
  tattTypeState: string;
};

export function RenderField({
  field,
  errors,
  setTattTypeState,
  tattTypeState,
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
          name={id}
          label={label}
          labelClassName="text-sm"
          required={required}
          errors={errors}
          value={value}
          className={className}
        />
      );

    case "textarea":
      return (
        <InputTextArea
          id={id}
          name={id}
          label={label}
          required={required}
          errors={errors}
          value={value}
          className={className}
        />
      );

    case "select":
      if (!options?.length) return null;

      return (
        <Select
          id={id}
          name={id}
          label={label}
          required={required}
          errors={errors}
          value={tattTypeState}
          options={options}
          className={className}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTattTypeState(e.target.value)
          }
        />
      );

    case "input":
    default:
      return (
        <Input
          id={id}
          name={id}
          label={label}
          type={type}
          required={required}
          errors={errors}
          value={value}
          className={className}
        />
      );
  }
}
