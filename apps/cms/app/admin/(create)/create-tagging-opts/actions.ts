"use server";
// Next.js
import { redirect } from "next/navigation";
// local outter
import { EDITABLE_TAGGING_COL_KEYS } from "@/db/profileTaggingOpts";
import type { ProfileTaggingOptions } from "@/db/types";
import { createSSClient, getAuthedUser } from "@/db/server";
import { upsertProfileTaggingOpts as upsertProfileTaggingOptsUtil } from "@/db/profileTaggingOpts";
import { handleStringListFormValues } from "@hyperinkstudio/utils";
import { LINKS_ADMIN } from "@/app/consts";

export type ProfileTaggingOptsFormState = {
  errors: Record<string, string> | null;
  opts?: Partial<ProfileTaggingOptions> | null;
};

export async function upsertProfileTaggingOpts(
  _prevState: ProfileTaggingOptsFormState,
  formData: FormData,
): Promise<ProfileTaggingOptsFormState> {
  const {
    hasError: hasClientError,
    values: optionValues,
    errors: optionErrors,
  } = handleStringListFormValues(formData, EDITABLE_TAGGING_COL_KEYS);

  if (hasClientError) {
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...optionErrors,
      },
    };
  }

  const authedClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    const unauthorizedError = {
      unauthorized: "the person is unauthorized",
    };
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...unauthorizedError,
      },
    };
  }

  const { data: opts, error } = await upsertProfileTaggingOptsUtil(
    authedClient,
    {
      user_id: user?.id,
      ...optionValues,
    },
  );

  console.log(opts);

  if (error) {
    const upsertError = {
      createPerson: "error upserting profile tagging options supabase",
    };
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...upsertError,
      },
    };
  }

  redirect(`${LINKS_ADMIN.home.href}`);
}
