"use server";
import z from "zod";
// @/app
import { getUserData } from "@/app/getUserData";

// @/db
import {
  ProfileTaggingOptions,
  taggingOptsSchema,
  upsertProfileTaggingOpts,
} from "@/business/profileTaggingOpts";
// Hyperink
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
import { createSSClient } from "@/auth/server";

type TaggingOptionKey = keyof z.infer<typeof taggingOptsSchema>;

type OptionsFormState = {
  options: string;
  name: TaggingOptionKey | string;
  errors: Record<string, string> | null;
};

export async function upsertOptionRecord(
  prevState: OptionsFormState,
  formData: FormData,
): Promise<OptionsFormState> {
  const { pvtProfileId } = await getUserData();
  const formDataObject = Object.fromEntries(formData.entries());

  const parsedForm = taggingOptsSchema.safeParse(formDataObject.options);

  const actionResults: OptionsFormState = {
    name: "",
    options: "",
    errors: null,
  };

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    const zodErrors = zodIssuesToErrors(issues);

    actionResults.errors = {
      ...actionResults.errors,
      ...zodErrors,
    };

    return actionResults;
  }

  const name = formData.get("name") as keyof ProfileTaggingOptions;

  if (parsedForm.data === undefined) {
    actionResults.errors = { data: "undefined" };
    return actionResults;
  }

  const optionsStr = parsedForm?.data;

  const optionsArray = optionsStr.split(",").filter(Boolean);

  const ssClient = await createSSClient();

  const { data, error } = await upsertProfileTaggingOpts(
    ssClient,
    pvtProfileId,
    {
      [name]: optionsArray,
    },
  );

  if (error) {
    actionResults.errors = {
      ...actionResults.errors,
      dbError: "Failed to create Tattoo Options.",
    };
    return actionResults;
  }

  actionResults.name = name;

  const resultsData = data?.[name];

  const resultsDataString = Array.isArray(resultsData)
    ? resultsData.filter(Boolean).join(",")
    : String(resultsData ?? "");

  actionResults.options = resultsDataString;

  return actionResults;
}
