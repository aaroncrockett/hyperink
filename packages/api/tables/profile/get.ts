import { createSupabaseGetQueries } from "@hyperink/api";

const profileQueries = createSupabaseGetQueries("profile", null);

export const getProfile = profileQueries.sbGetWhere;
