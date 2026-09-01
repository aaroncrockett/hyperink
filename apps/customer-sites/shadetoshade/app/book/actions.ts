"use server";
import { z } from "zod";
//
import { createTattooRequest } from "@/business/tattooRequest";
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
import { createServiceClient } from "@/auth/serviceClient";
//
import { type TattReqFormDisplayWithFlash } from "./types";

import { TATT_REQ_BODY, TYPE_FIELD, FLASH_ID } from "@/business/tattooRequest";

export type TattRequestFormState = {
  errors: Record<string, string> | null;
  tattooRequest?: TattReqFormDisplayWithFlash | null;
};

export async function createTattooRequestAction(
  _prevState: TattRequestFormState,
  formData: FormData,
): Promise<TattRequestFormState> {
  const actionResults: TattRequestFormState = {
    tattooRequest: null,
    errors: null,
  };

  const formValues = Object.fromEntries(formData.entries());

  console.log(formValues);

  const parsedReq = z
    .object({
      [TYPE_FIELD.id]: TYPE_FIELD.schema,
      [FLASH_ID.id]: FLASH_ID.schema,
      ...Object.fromEntries(
        TATT_REQ_BODY.map(({ id, schema }) => [id, schema]),
      ),
    })
    .safeParse(formValues);

  console.log("A**");
  console.log(parsedReq);
  console.log("A**");

  if (!parsedReq.success) {
    console.error("1....");
    const { issues } = parsedReq.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }

  const serviceClient = createServiceClient();

  const tattRequestValues = parsedReq.data;

  const tattRequestData = {
    user_id: process.env.ARTIST_ID!,
    ...tattRequestValues,
  };

  console.log("A**");

  const result = await createTattooRequest(serviceClient, tattRequestData);

  if (result.error) {
    console.error("2....");
    actionResults.errors = {
      ...actionResults.errors,
      root: result.error.message,
    };

    return actionResults;
  }

  console.log("B**");

  if (result.data === undefined || result.data === null) {
    console.error("3....");
    actionResults.errors = {
      tattooRequest: "tattoo request results were undefined or null",
    };
  }

  console.log("C**");

  actionResults.tattooRequest = result.data;

  console.log("D**");

  return actionResults;
}
