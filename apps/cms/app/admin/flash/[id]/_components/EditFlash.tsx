"use client";
//
import { useActionState } from "react";
//
import { HIError } from "@hyperink/api-domain-helpers";
//
import {
  Input,
  Select,
  FormClient as Form,
} from "@hyperink/ui-react/components";
//
import { toLabelValue } from "@hyperink/api-domain-helpers";
//
import { FlashUIPublic, editFlashMetadata } from "../data";
import { updateFlashAction } from "../action";

const initState = {
  error: null,
};

const handleUpdateFlash = () => {
  // updateFlash
};

type EditFlashProps = {
  flashItem: Partial<FlashUIPublic>;
  collections: string[];
};

export function EditFlash({ flashItem, collections }: EditFlashProps) {
  const [actionState, formAction] = useActionState(
    updateFlashAction,
    initState,
  );
  if (!actionState.error) {
    return (
      <Form
        action={formAction}
        className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-surface-200-800/20 p-6 rounded"
      >
        <Input
          name={editFlashMetadata.readable_name.id}
          label={editFlashMetadata.readable_name.label}
          id={editFlashMetadata.readable_name.id}
          type={editFlashMetadata.readable_name.type}
          required={true}
          defaultValue={flashItem.readable_name ?? ""}
          wrapperClassName="w-full"
        />
        <Input
          name={editFlashMetadata.description.id}
          label={editFlashMetadata.description.label}
          id={editFlashMetadata.description.id}
          type={editFlashMetadata.description.type}
          required={true}
          defaultValue={flashItem.description ?? ""}
          wrapperClassName="w-full"
        />
        <Input
          type={editFlashMetadata.total_availability.type}
          label={editFlashMetadata.total_availability.label}
          name={editFlashMetadata.total_availability.id}
          id={editFlashMetadata.total_availability.id}
          min={1}
          max={5}
          defaultValue={flashItem.total_availability ?? 0}
          wrapperClassName="w-full"
        />

        <Select
          id={editFlashMetadata.collection.id}
          name={editFlashMetadata.collection.id}
          label={editFlashMetadata.collection.label}
          type={editFlashMetadata.collection.type}
          wrapperClassName=" w-full"
          defaultValue={flashItem.collection ?? collections[0] ?? ""}
          options={collections.map((value: string) => toLabelValue(value))}
        />
      </Form>
    );
  }
}
