"use client";
//
import { useActionState } from "react";

//
import { Input, FormClient as Form } from "@hyperink/ui-react/components";

//
import { TattooUIPublic, editTattooMetadata } from "../data";
import { updateTattooAction } from "../action";

const initState = {
  error: null,
};

type EditTattooProps = {
  tattooItem: Partial<TattooUIPublic>;
  id: string;
};

export function EditTattoo({ tattooItem, id }: EditTattooProps) {
  const [actionState, formAction] = useActionState(
    updateTattooAction,
    initState,
  );
  if (!actionState.error) {
    return (
      <Form
        action={formAction}
        className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-surface-200-800/20 p-6 rounded"
      >
        <input className="hidden" type="hidden" name="id" value={id} />
        <Input
          name={editTattooMetadata.title.id}
          label={editTattooMetadata.title.label}
          id={editTattooMetadata.title.id}
          type={editTattooMetadata.title.type}
          required={true}
          defaultValue={tattooItem.title ?? ""}
          wrapperClassName="w-full"
        />
        <Input
          name={editTattooMetadata.description.id}
          label={editTattooMetadata.description.label}
          id={editTattooMetadata.description.id}
          type={editTattooMetadata.description.type}
          required={true}
          defaultValue={tattooItem.description ?? ""}
          wrapperClassName="w-full"
        />
      </Form>
    );
  }
}
