import { createSupabaseGetQueries } from "@hyperink/api";

const tagOpts = createSupabaseGetQueries("profile", null);

export const getTagOpts = tagOpts.sbGetWhere;
