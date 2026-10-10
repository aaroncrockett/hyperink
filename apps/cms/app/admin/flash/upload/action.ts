"use server";
import { redirect } from "next/navigation";
//
import {
  validateUploadFiles,
  zodIssuesToErrors,
  type HIFormData,
} from "@hyperink/api-domain-helpers";
import { uploadFlash } from "@hyperink/api-domain-helpers/flash";
//
import { UPLOAD_FILE_SCHEMA } from "./data";
//
import { createSSClient, getAuthedUser } from "@/auth/server";

export async function fileUploadDataAction(
  previousState: HIFormData,
  formData: FormData,
): Promise<HIFormData> {
  const dbClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(dbClient);

  if (!user) return { data: null, error: { message: "no user" } };

  const validatedFileData = validateUploadFiles(formData);

  const optType = formData.get("opt_type");
  const collections = formData.getAll("collection");

  const readableNames = formData.getAll("readable_name");
  const availablility = formData.getAll("total_availability");
  const name = formData.getAll("name");
  const description = formData.getAll("description");

  let schemaMapError: null | string = null;

  const validatedData = readableNames.map((readableName, index) => {
    const result = UPLOAD_FILE_SCHEMA.safeParse({
      collection: optType === "general" ? collections[index] : collections[0],
      readable_name: readableName,
      total_availability: availablility[index],
      description: description[index],
      name: name[index],
    });

    if (!result.success) {
      const errors = zodIssuesToErrors(result.error.issues);

      schemaMapError = errors.message ?? "error within schema map";

      console.error(schemaMapError, 1);

      return;
    }

    if (!validatedFileData || !validatedFileData.data) {
      schemaMapError = "error within schema map";

      console.error(schemaMapError, 2);

      return;
    }

    return {
      error: null,
      data: {
        file: validatedFileData.data[index],
        ...result.data,
      },
    };
  });

  if (schemaMapError) return { data: null, error: { message: schemaMapError } };

  let validatedDataMapError: null | string = null;

  await Promise.all(
    validatedData.map(async (result) => {
      if (!result || !result.data) {
        validatedDataMapError = "error within validated data mapping";

        console.error(validatedDataMapError, 1);

        return;
      }

      const response = await uploadFlash(dbClient, user.id, result.data);

      if (response?.error) {
        console.error(validatedDataMapError, 2);

        validatedDataMapError = "error within validated data mapping";

        return;
      }

      return { data: response.data, error: null };
    }),
  );

  if (validatedDataMapError) {
    return {
      error: { message: validatedDataMapError },
      data: null,
    };
  }

  redirect("/admin/flash");
}
