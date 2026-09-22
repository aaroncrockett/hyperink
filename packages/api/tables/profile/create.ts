import { createSupabaseCreateQueries } from "@hyperink/api";

const profileQueries = createSupabaseCreateQueries("profile", null);

export const createProfile = profileQueries.create;
