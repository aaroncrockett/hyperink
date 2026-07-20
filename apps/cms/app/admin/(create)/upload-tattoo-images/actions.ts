"use server";
// node
import { randomUUID } from "crypto";
// hyperink
import {
  getClientPersonByEmail,
  getClientPersonByPreferredName,
  getClientPersonByPhone,
} from "@hyperinkstudio/db";
// Local
import { getImageFormInputs } from "./_helpers";
// Local Parents
import { LOOKUP_CLIENT_COLS } from "@/utils/db/clientPersons";
import type { ClientTable } from "@/utils/db/types";
import { createServerClientAndAuth, getAuthedUser } from "@/utils/db/server";
import { handleStringFormValues } from "@hyperinkstudio/utils";

import { uploadTattooImage } from "@/utils/db/server";

export type ClientFormState = {
  client: Partial<ClientTable> | null;
  errors: Record<string, string> | null;
};

export async function getClient(
  _prevState: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  const {
    hasError: hasClientError,
    values: clientValues,
    errors: clientErrors,
  } = handleStringFormValues(formData, LOOKUP_CLIENT_COLS);
  console.time("getClient");

  if (hasClientError) {
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...clientErrors,
      },
    };
  }

  const authedClient = await createServerClientAndAuth();

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

  let client: Partial<ClientTable> | null = null;

  if (clientValues.email) {
    const { data } = await getClientPersonByEmail(
      authedClient,
      clientValues.email,
    );
    client = Array.isArray(data) ? (data[0] ?? null) : data;
  }

  if (clientValues.phone) {
    const { data } = await getClientPersonByPhone(
      authedClient,
      clientValues.phone,
    );
    client = Array.isArray(data) ? (data[0] ?? null) : data;
  }

  if (clientValues.preferredName) {
    const { data } = await getClientPersonByPreferredName(
      authedClient,
      clientValues.preferredName,
    );
    client = Array.isArray(data) ? (data[0] ?? null) : data;
  }

  return {
    ..._prevState,
    client,
    errors: _prevState?.errors ?? {},
  };
}

export async function uploadImage(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const { files, styles, tags, setOrder, readableNames } =
      getImageFormInputs(formData);

    const authedClient = await createServerClientAndAuth();

    const {
      data: { user },
    } = await getAuthedUser(authedClient);

    if (!user) {
      return {
        ...state,
        tattooImages: null,
        error: "Unauthorized",
      };
    }

    const isImgSet = files.length > 1;
    const setId = isImgSet ? randomUUID() : null;

    const uploads = await Promise.all(
      files.map((file, index) =>
        uploadTattooImage(authedClient, file, {
          styles,
          tags,
          readable_name: readableNames[index],
          name: file.name,
          user_id: user.id,
          set_order: isImgSet ? setOrder[index] : null,
          set_id: setId,
        }),
      ),
    );

    return {
      ...state,
      tattooImages: uploads,
      error: null,
    };
  } catch (err) {
    return {
      ...state,
      tattooImages: null,
      error: err instanceof Error ? err.message : "Something went wrong",
    };
  }
}
