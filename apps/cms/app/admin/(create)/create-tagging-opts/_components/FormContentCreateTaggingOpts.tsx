"use client";
import { EDITABLE_PROFILE_TAGGING_OPTS_OPTIONS } from "@/utils/db/profileTaggingOpts";
import { Input } from "@hyperinkstudio/ui-react/components/client/";

export default function FormContentCreateTaggingOpts({
  errors,
}: {
  errors: Record<string, string> | null;
}) {
  return (
    <>
      {EDITABLE_PROFILE_TAGGING_OPTS_OPTIONS.map(({ value, label }) => (
        <Input
          key={value}
          id={value}
          name={value}
          label={label}
          type={"text"}
          errors={errors}
        />
      ))}
    </>
  );
}
