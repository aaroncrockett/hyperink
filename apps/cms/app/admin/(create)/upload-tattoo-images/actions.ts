"use server";

import { randomUUID } from "crypto";

import {
  createServerClientAndAuth,
  getAuthedUser,
  uploadUserImage,
} from "@/utils/db/server";
import {
  getClientPersonByEmail as getClientPersonByEmailInktree,
  getClientPersonByPhone as getClientPersonByPhoneInkTree,
} from "@inktree/db";
import type { ClientTable, ClientTattoo, TattooImage } from "@inktree/db";

import { getImageFormInputs } from "./helpers";

export type ClientFormState = {
  client: Partial<ClientTable> | null;
  // clientTattoos: Partial<ClientTattoo>[] | null;
  // tattooImages: Partial<TattooImage>[] | null;
  error: string | null;
};

export async function getClient(
  state: ClientFormState,
  formData: FormData,
): Promise<ClientFormState> {
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  const newState = {};

  if (!user) {
    return {
      ...state,
      error: "unahorized",
    };
  }
  let client;
  if (email) {
    client = getClientPersonByEmailInktree(authedClient, email);
  }
  if (phone) {
    client = getClientPersonByEmailInktree(authedClient, phone);
  }

  if (!client) {
    return {
      ...state,
      client: null,
      error: "no client",
    };
  }

  return {
    ...state,
    client: client,
    error: null,
  };
}

// export async function getClientPersonByPhone(
//   state: FormState,
//   formData: FormData,
// ): Promise<FormState> {
//   const phone = formData.get("phone");

//   if (typeof phone !== "string") {
//     return {
//       ...state,
//       client: null,
//       error: "Invalid phone",
//     };
//   }

//   const authedClient = await createServerClientAndAuth();

//   const {
//     data: { user },
//   } = await getAuthedUser(authedClient);

//   if (!user) {
//     return {
//       ...state,
//       client: null,
//       error: "unauthorized",
//     };
//   }

//   const client = await getClientPersonByPhoneInkTree(authedClient, phone);

//   if (!client) {
//     return {
//       ...state,
//       client: null,
//       error: "no client",
//     };
//   }

//   return {
//     ...state,
//     client,
//     error: null,
//   };
// }

export async function uploadImage(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const { files, styles, tags, setOrder, readableNames } =
      await getImageFormInputs(formData);

    const authedClient = await createServerClientAndAuth();

    const {
      data: { user },
    } = await getAuthedUser(authedClient);

    if (!user) {
      return {
        ...state,
        tattooImages: null,
        error: "no client",
      };
    }

    const isImgSet = files.length > 1;
    const setId = isImgSet ? randomUUID() : null;

    const uploads = await Promise.all(
      files.map((file, index) =>
        uploadUserImage(authedClient, file, {
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
      error: "no client",
    };
  } catch (err) {
    return {
      ...state,
      tattooImages: null,
      error: err instanceof Error ? err.message : "Something went wrong",
    };
  }
}
