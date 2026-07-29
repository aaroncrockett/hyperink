import { type TattooRequest } from "@/db/types";
import { TATTOO_REQUEST_FORM_SCHEMA } from "@/db/tattooRequest";
import { zodIssuesToErrors } from "@/db/_helpers";

type TattooRequestForm = TattooRequest & {
  existingClient: string;
};

type TattooFormState = {
  tattooRequest: Record<
    keyof TattooRequestForm,
    FormDataEntryValue | undefined
  > | null;
  errors: Partial<Record<keyof TattooRequest, string>> | null;
};

export async function createAClientTattooAndHandleClient(
  prevState: TattooFormState,
  formValues: FormData,
): Promise<TattooFormState> {
  const parsed = TATTOO_REQUEST_FORM_SCHEMA.safeParse(formValues);

  const actionResults: TattooFormState = {
    tattooRequest: null,
    errors: null,
  };

  if (!parsed.success) {
    const { issues } = parsed.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }

  return actionResults;
}
