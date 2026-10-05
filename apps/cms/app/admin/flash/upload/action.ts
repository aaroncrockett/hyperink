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

      return {
        error: { message: errors.message },
        data: null,
      };
    }

    if (!validatedFileData || !validatedFileData.data)
      return { data: null, error: { message: "file error" } };

    return {
      error: null,
      data: {
        file: validatedFileData.data[index],
        ...result.data,
      },
    };
  });

  const results = await Promise.all(
    validatedData.map(async (result) => {
      if (!result.data)
        return {
          error: { message: "error in uploading flash, no data was returned" },
          data: null,
        };
      const response = await uploadFlash(dbClient, user.id, result.data);

      if (response?.error) {
        return {
          error: { message: response?.error ?? "error in uploading flash b" },
          data: null,
        };
      }

      return { data: response.data, error: null };
    }),
  );

  const found = results.find((result) => result.error);

  if (found && found.error) {
    return {
      error: { message: "error uploading flash" },
      data: null,
    };
  }

  redirect("/admin/flash");
}
