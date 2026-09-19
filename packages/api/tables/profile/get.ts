import { createSupabaseQueries } from "@hyperink/api";

const profileQueries = createSupabaseQueries("profile", null);

export const getProfile = profileQueries.sbGetWhere;
