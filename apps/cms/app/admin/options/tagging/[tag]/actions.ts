"use server";
import z from "zod";
//
import { redirect } from "next/navigation";
//
import { mergeUsersTagOptions } from "@hyperink/api-domain-helpers/options";
import { zodIssuesToErrors, type HIError } from "@hyperink/api-domain-helpers";
//
import { createSSClient } from "@/auth/server";
import { TAG_SELECTION_SCHEMA } from "./data";
import { normalizeToKabobCase } from "@hyperink/utils";
//
import { OptionsUIRow } from "@hyperink/api/options";

type OptionActionState = {
  error: null | HIError;
};

export async function upsertTagOpts(
  prevState: OptionActionState,
  formData: FormData,
): Promise<OptionActionState> {
  const formDataObject = Object.fromEntries(formData.entries());

  const validatedData = TAG_SELECTION_SCHEMA.safeParse(formDataObject);

  if (!validatedData.success) {
    const errors = zodIssuesToErrors(validatedData.error?.issues ?? []);

    return {
      error: { message: errors.message },
    };
  }

  const client = await createSSClient();

  const selectedStr = validatedData?.data.selected ?? "";
  const unSelectedStr = validatedData?.data.unselected ?? "";
  const tagType = validatedData?.data.type;
  const profileId = validatedData?.data.profile_id;

  const selectedArr = selectedStr.split("+").filter(Boolean);

  const { error } = await mergeUsersTagOptions(
    client,
    profileId,
    tagType as keyof OptionsUIRow,
    selectedArr,
  );

  if (error)
    return {
      error: { message: error.message ?? "error merging tag options" },
    };

  if (unSelectedStr.length) {
    const unselectedArr = unSelectedStr?.split("+").filter(Boolean);

    // easier to normalize if in an array form
    const normalUnselectedArr = unselectedArr?.map((tag) =>
      normalizeToKabobCase(tag),
    );

    const rejoinedUnselected = normalUnselectedArr?.join("+");
    redirect(
      `/admin/options/tagging/${tagType}/tagged-images?unselected=${encodeURIComponent(rejoinedUnselected ?? "")}`,
    );
  }

  redirect("/admin/");
}
