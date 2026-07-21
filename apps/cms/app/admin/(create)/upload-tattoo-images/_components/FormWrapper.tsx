"use client";
// React
import { useActionState, useState } from "react";
//hyper ink
import { Form, SelectState } from "@hyperinkstudio/ui-react/components/client";
// Local Parent
import { LOOKUP_COLS_OPTIONS } from "@/utils/db/clientPersons/";
import {
  createTaggingKeys,
  createTaggingValues,
  EDITABLE_TAGGING_COLS_LIST_OF_OPTS,
  EDITABLE_TAGGING_COLS_OPTS,
} from "@/utils/db/profileTaggingOpts";
import { FormContentGetClient } from "@/app/admin/(features)/GetClient";
//local
import { getClients, uploadImage, getTattoos } from "../actions";
import FormContentTaggingPhotos from "./FormContentTaggingPhotos";
import FormContentTattoImage from "./FormContentTattooImage";

type FormWrapperProps = {
  taggingOpts: Record<string, string[]> | null;
};

export default function FormWrapper({ taggingOpts }: FormWrapperProps) {
  const [tagOpts, setTagOpts] = useState(
    createTaggingValues(createTaggingValues(taggingOpts)),
  );

  const [chosenTagOpts, setChosenTagOpts] = useState(createTaggingKeys());

  const initClientState = {
    errors: null,
    client: {},
  };

  const initImageState = {
    errors: null,
    tattooImages: { tattooId: null },
  };

  const [clientState, clientActionState] = useActionState(
    getClients,
    initClientState,
  );

  const initTattooState = {
    errors: null,
    tattoos: null,
  };

  const [tattooState, tattooActionState] = useActionState(
    getTattoos,
    initTattooState,
  );
  const [imageState, imageActionState] = useActionState(
    uploadImage,
    initImageState,
  );

  console.log(imageState);

  return (
    <>
      <SelectState options={LOOKUP_COLS_OPTIONS}>
        {({ lookupType }) => (
          <>
            <Form
              action={async (formData: FormData) =>
                await clientActionState(formData)
              }
            >
              <FormContentGetClient lookupType={lookupType} />
            </Form>
          </>
        )}
      </SelectState>

      {clientState?.client?.id && (
        <Form action={tattooActionState}>
          <input type="hidden" name="clientId" value={clientState.client.id} />
        </Form>
      )}
      {tattooState.tattoos?.map((tattoo) => (
        <div key={tattoo.id}>{tattoo.title}</div>
      ))}

      {clientState?.client?.id && <button>get all tattoos by person</button>}

      {clientState.errors && (
        <p className="text-red-500">{JSON.stringify(clientState.errors)}</p>
      )}
      <Form action={uploadImage}>
        <FormContentTattoImage
          styles={chosenTagOpts[EDITABLE_TAGGING_COLS_OPTS.styles.value]}
          collections={
            chosenTagOpts[EDITABLE_TAGGING_COLS_OPTS.collections.value]
          }
          tags={chosenTagOpts[EDITABLE_TAGGING_COLS_OPTS.tags.value]}
        />
        {EDITABLE_TAGGING_COLS_LIST_OF_OPTS.map(({ value, label }) => (
          <FormContentTaggingPhotos
            key={value}
            value={value}
            label={label}
            tagOpts={tagOpts[value]}
            setTagOpts={setTagOpts}
            setChosenTagOpts={setChosenTagOpts}
            chosenTagOpts={chosenTagOpts[value]}
          />
        ))}
      </Form>
    </>
  );
}
