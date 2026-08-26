"use client";
// React
import { useActionState } from "react";

// hyperink
import {
  Form,
  InputCheck,
  Select,
  FormMetaErrors,
} from "@hyperinkstudio/ui-react-next/components";

// Local @
import {
  type FlashOptions,
  FLASH_OPTIONS_FORM_LIST,
} from "@/business/flash/flashOptions";

import { type ProfileTaggingOptions } from "@/business/flash";
//
import { toLabelValue } from "@hyperinkstudio/utils";
// Local
import { updateFlashPreferences } from "../actions";

type PreferencesFormProps = {
  flashOptionsArr: Partial<FlashOptions>[];

  flashCollectionOptionsArr: Partial<ProfileTaggingOptions>[];
};

export type FormActionState = {
  errors: Record<string, string> | null;
  data: Partial<FlashOptions> | null;
};

export function PreferencesForm({
  flashOptionsArr,
  flashCollectionOptionsArr,
}: PreferencesFormProps) {
  const flashOptions = flashOptionsArr?.[0];

  const flashCollections = flashCollectionOptionsArr?.[0]
    ?.collections as string[];

  const flashCollectionOptions = flashCollections.map((coll) => {
    return toLabelValue(coll);
  });

  const options = FLASH_OPTIONS_FORM_LIST.reduce(
    (acc, option) => {
      if (option.type === "checkbox") {
        if (option.id.startsWith("filter")) {
          acc.filterCheckboxes.push(option);
        }

        if (!option.id.startsWith("filter")) {
          acc.checkboxes.push(option);
        }
      }

      if (option.type === "select") {
        acc.selects.push(option);
      }

      return acc;
    },
    {
      checkboxes: [] as typeof FLASH_OPTIONS_FORM_LIST,
      filterCheckboxes: [] as typeof FLASH_OPTIONS_FORM_LIST,
      selects: [] as typeof FLASH_OPTIONS_FORM_LIST,
    },
  );

  const checkboxOptions = options.checkboxes;
  const filterCheckboxOptions = options.filterCheckboxes;
  const selectOptions = options.selects;

  const initialActionState: FormActionState = {
    errors: null,
    data: null,
  };

  const [actionState, formAction] = useActionState(
    updateFlashPreferences,
    initialActionState,
  );

  if (!flashOptions || !flashCollections || !flashCollectionOptions) {
    return null;
  }

  return (
    <Form
      action={formAction}
      className="flex flex-col gap-4 md:grid md:grid-cols-2"
    >
      <div>
        {selectOptions.map((option) => (
          <Select
            key={option.id}
            id={option.id}
            name={option.id}
            label={option.label}
            options={flashCollectionOptions}
            defaultValue={flashOptions.default_collection ?? undefined}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4 rounded bg-surface-200-800/20 sm:p-6">
        <div className="flex flex-col gap-2">
          <span className="pb-0.5 text-lg font-bold">Filtering Options</span>
          {filterCheckboxOptions.map((option) => (
            <InputCheck
              key={option.id}
              id={option.id}
              label={option.label}
              name={option.id}
              defaultChecked={flashOptions[option.id] === true}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="pb-0.5 text-lg font-bold">Other Options</span>
          {checkboxOptions.map((option) => (
            <InputCheck
              key={option.id}
              id={option.id}
              label={option.label}
              name={option.id}
            />
          ))}
        </div>
      </div>

      {actionState.errors && <FormMetaErrors errors={actionState.errors} />}

      {actionState.data && <div>Prefences have been updated!</div>}
    </Form>
  );
}
