"use server";
import {
  TATTOO_REQUEST_FORM_SCHEMA,
  createTattooRequest,
} from "@/db/tattooRequest";
import { zodIssuesToErrors } from "@/db/_helpers";
import { createServiceClient } from "@/db/serviceClient";

export type TattRequestFormState = {
  errors: Record<string, string> | null;
  tattooRequest?: Record<string, FormDataEntryValue | undefined> | null;
};

export async function createTattooRequestAction(
  _prevState: TattRequestFormState,
  formData: FormData,
): Promise<TattRequestFormState> {
  const formValues = Object.fromEntries(formData.entries());

  const parsed = TATTOO_REQUEST_FORM_SCHEMA.safeParse(formValues);

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
  const artistId = tattRequestValues?.artist_id;

  if (!artistId) {
    actionResults.errors = { artistIdError: "no artist id was found" };
    return actionResults;
  }
  const result = await createTattooRequest(serviceClient, tattRequestValues);

  if (result.error) {
    actionResults.errors = {
      ...actionResults.errors,
      ...result.error,
    };

    return actionResults;
  }

  if (result.results === undefined || result.results === null) {
    actionResults.errors = {
      tattooRequest: "tattoo request results were undefined or null",
    };
  }

  actionResults.tattooRequest = result.results as Record<
    string,
    FormDataEntryValue
  >;

  return actionResults;
}
