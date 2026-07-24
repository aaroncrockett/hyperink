"use server";
// node
import { randomUUID } from "crypto";
// hyperink
import {
  getClientsPersonByEmail,
  getClientsPersonByPreferredName,
  getClientsPersonByPhone,
  getClientTattoosByClientId,
} from "@hyperinkstudio/db";
// Local
import { getImageFormInputs } from "./_helpers";
// Local Parents
import { LOOKUP_CLIENT_COLS } from "@/db/clientPersons";
import type { ClientTable, TattooImage } from "@/db/types";
import { createSSClient, getAuthedUser } from "@/db/server";
import { handleStringFormValues } from "@hyperinkstudio/utils";

import { uploadTattooImage } from "@/db/server";

export type ClientFormState = {
  client: Partial<ClientTable> | null;
  errors: Record<string, string> | null;
};

export type TattooFormState = {
  tattoos: Partial<ClientTable> | null;
  errors: Record<string, string> | null;
};

export type ImageFormState = {
  tattooImages: Partial<TattooImage>[] | null;
  errors: Record<string, string> | null;
};

export async function getClients(
  _prevState: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  const {
    hasError: hasClientError,
    values: clientValues,
    errors: clientErrors,
  } = handleStringFormValues(formData, LOOKUP_CLIENT_COLS);

  if (hasClientError) {
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...clientErrors,
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

  let client: Partial<ClientTable> | null = null;

  if (clientValues.email) {
    const { data } = await getClientsPersonByEmail(
      authedClient,
      clientValues.email,
    );
    client = Array.isArray(data) ? (data[0] ?? null) : data;
  }

  if (clientValues.phone) {
    const { data } = await getClientsPersonByPhone(
      authedClient,
      clientValues.phone,
    );
    client = Array.isArray(data) ? (data[0] ?? null) : data;
  }

  if (clientValues.preferredName) {
    const { data } = await getClientsPersonByPreferredName(
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
  _prevState: ImageFormState,
  formData: FormData,
): Promise<ImageFormState> {
  const { files, styles, tags, collections, setOrder, readableNames } =
    getImageFormInputs(formData);

  const authedClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    return {
      ..._prevState,
      tattooImages: null,
      errors: { Unauthorized: "unauthorized" },
    };
  }

  const isImgSet = files.length > 1;
  const setId = isImgSet ? randomUUID() : null;

  const uploads = await Promise.all(
    files.map((file, index) => {
      const rawOrder = isImgSet ? setOrder[index] : null;
      const parsedOrder =
        rawOrder == null ? null : parseInt(String(rawOrder), 10);
      return uploadTattooImage(authedClient, file, {
        styles: styles,
        tags,
        readable_name: readableNames[index],
        collections,
        name: file.name,
        user_id: user.id,
        set_order: Number.isNaN(parsedOrder) ? null : parsedOrder,
        set_id: setId,
      });
    }),
  );

  return {
    ..._prevState,
    tattooImages: null,
    errors: null,
  };
}

export async function getTattoos(
  _prevState: TattooFormState,
  formData: FormData,
): Promise<TattooFormState> {
  const clientId = formData.get("clientId")?.toString();

  if (!clientId) {
    return {
      ..._prevState,
      tattoos: null,
      errors: {
        clientId: "Client id is required",
      },
    };
  }

  const authedClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  if (!user) {
    return {
      ..._prevState,
      tattoos: null,
      errors: {
        unauthorized: "The person is unauthorized",
      },
    };
  }

  const { data: tattoos, error } = await getClientTattoosByClientId(
    authedClient,
    clientId,
  );

  return {
    ..._prevState,
    tattoos: tattoos ?? null,
    errors: error ? { tattoos: error.message } : null,
  };
}
