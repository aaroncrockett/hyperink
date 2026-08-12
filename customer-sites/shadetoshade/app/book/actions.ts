"use server";
import {
  TATT_REQ_FOLLOW_UP_FORM_SCHEMA,
  createTattooRequest,
} from "@/db/tattooRequest";
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
import { createServiceClient } from "@/db/serviceClient";

import type { TattooRequest } from "@/db/types";

export type TattRequestFormState = {
  errors: Record<string, string> | null;
  tattooRequest?: TattooRequest | null;
};

export async function createTattooRequestAction(
  _prevState: TattRequestFormState,
  formData: FormData,
): Promise<TattRequestFormState> {
  const formValues = Object.fromEntries(formData.entries());

  const parsed = TATT_REQ_FOLLOW_UP_FORM_SCHEMA.safeParse(formValues);

  const actionResults: TattRequestFormState = {
    tattooRequest: null,
    errors: null,
  };

  if (!parsed.success) {
    const { issues } = parsed.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }

  const serviceClient = createServiceClient();

  const tattRequestValues = parsed.data;

  const tattRequestData = {
    user_id: process.env.ARTIST_ID!,
    ...tattRequestValues,
  };

  const result = await createTattooRequest(serviceClient, tattRequestData);

  if (result.error) {
    actionResults.errors = {
      ...actionResults.errors,
      root: result.error.message,
    };

    return actionResults;
  }

  if (result.data === undefined || result.data === null) {
    actionResults.errors = {
      tattooRequest: "tattoo request results were undefined or null",
    };
  }

  actionResults.tattooRequest = result.data;

  return actionResults;
}
