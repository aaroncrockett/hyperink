"use server";
import {
  EDITABLE_TATTOO_REQUEST_COLS,
  getProfileIdByArtistId,
  createTattooRequest,
} from "@/db/tattooRequest";
import type { TattooRequest } from "@/db/types";
import { handleStringFormValues } from "@hyperinkstudio/utils";
import { createClient } from "@supabase/supabase-js";

export type TattRequestFormState = {
  errors: Record<string, string> | null;
  request?: Partial<TattooRequest> | null;
  artist_id: string;
};

export async function createTattooRequestAction(
  _prevState: TattRequestFormState,
  formData: FormData,
): Promise<TattRequestFormState> {
  const {
    hasError: hasTattReqFormError,
    values: tattFormValues,
    errors: tattReqFormErrors,
  } = handleStringFormValues(formData, EDITABLE_TATTOO_REQUEST_COLS);

  const artistId = formData.get("artist_id")?.toString() ?? "";

  if (hasTattReqFormError) {
    return {
      ..._prevState,
      errors: {
        ..._prevState.errors,
        ...tattReqFormErrors,
      },
    };
  }

  const serviceClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data: userId } = await getProfileIdByArtistId(
    serviceClient,
    artistId,
  );

  if (!userId) {
    return {
      ..._prevState,
      errors: {
        noArtist: "Artist not found",
      },
      artist_id: artistId,
    };
  }
  const { data, error } = await createTattooRequest(serviceClient, {
    ...tattFormValues,
    user_id: userId,
  });

  if (error) {
    return {
      errors: {
        database: error.message,
      },
      request: tattFormValues,
      artist_id: tattFormValues.artist_id,
    };
  }

  return {
    errors: null,
    request: data as Partial<TattooRequest> | null,
    artist_id: tattFormValues.artist_id,
  };
}
