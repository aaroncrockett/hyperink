"use client";
//react
import { useActionState } from "react";
// hyperink
import type { ProfileTaggingOptions } from "@hyperinkstudio/db";
import { Form, Input } from "@hyperinkstudio/ui-react/components/client";
// local
import { EDITABLE_PROFILE_TAGGING_OPTS_OPTIONS } from "@/utils/db/profileTaggingOpts";
import { upsertProfileTaggingOpts } from "../actions";
import InputList from "./InputList";

type FormWrapperProps = {
  data: Partial<ProfileTaggingOptions> | null | undefined;
};

export default function FormWrapper({ data }: FormWrapperProps) {
  console.log(data);
  console.log("dude");
  const initState = {
    opts: null,
    errors: null,
  };
  const [state, action] = useActionState(upsertProfileTaggingOpts, initState);
  console.log(state);
  return (
    <Form action={action}>
      {EDITABLE_PROFILE_TAGGING_OPTS_OPTIONS.map(({ value, label }) => (
        <>
          {value}
          {label}
          <div key={value}>
            {data && (
              <Input
                id={value}
                name={value}
                label={label}
                defaultValue={(data[value] as string) ?? ""}
              />
            )}

            <InputList value={value} label={label} />
          </div>
        </>
      ))}
    </Form>
  );
}
