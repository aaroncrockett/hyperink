"use server";
import { z } from "zod";
//
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
//
import { zodIssuesToErrors } from "@hyperinkstudio/utils";
import type { TattooRequest } from "@hyperinkstudio/services";
//
import {
  createTattooRequest,
  FLASH_NAME,
  TATT_REQ_BODY,
  TYPE_FIELD,
  FLASH_ID,
} from "@/business/tattooRequest";
import { createServiceClient } from "@/auth/serviceClient";
import { sendEmail } from "@/utils/email";
//
import { customerEmail } from "./helpers";

export type TattRequestFormState = {
  errors: Record<string, string> | null;
};

export async function createTattooRequestAction(
  _prevState: TattRequestFormState,
  formData: FormData,
): Promise<TattRequestFormState> {
  const actionResults: TattRequestFormState = {
    errors: null,
  };

  const formValues = Object.fromEntries(formData.entries());

  const parsedReq = z
    .object({
      [TYPE_FIELD.id]: TYPE_FIELD.schema,
      [FLASH_ID.id]: FLASH_ID.schema,
      [FLASH_NAME.id]: FLASH_NAME.schema,
      ...Object.fromEntries(
        TATT_REQ_BODY.map(({ id, schema }) => [id, schema]),
      ),
    })
    .safeParse(formValues);

  if (!parsedReq.success) {
    console.error("1....");
    const { issues } = parsedReq.error;

    actionResults.errors = zodIssuesToErrors(issues);

    return actionResults;
  }

  const serviceClient = createServiceClient();

  const tattRequestValues = parsedReq.data as TattooRequest;

  const tattRequestData = {
    ...tattRequestValues,
    user_id: process.env.ARTIST_ID!,
  };

  const result = await createTattooRequest(serviceClient, tattRequestData);

  if (result.error) {
    console.error("2....");
    actionResults.errors = {
      ...actionResults.errors,
      root: result.error.message,
    };

    return actionResults;
  }

  if (result.data === undefined || result.data === null) {
    console.error("3....");
    actionResults.errors = {
      tattooRequest: "tattoo request results were undefined or null",
    };
  }

  await sendEmail({
    to: tattRequestData?.email,
    subject: "Thanks for reaching out!",
    html: `
        ${customerEmail()}
    `,
  });

  await sendEmail({
    to: process.env.SENDER_EMAIL!,
    subject: "An email was sent to a client!",
    html: `
        ${customerEmail()}
    `,
  });

  revalidatePath("/book");
  redirect("/book/thank-you");
}
