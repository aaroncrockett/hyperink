import { createSupabaseGetQueries } from "@hyperink/api";

const baseGetTagOpts = createSupabaseGetQueries("options", null);

export const getOptions = baseGetTagOpts.sbGetWhere;
