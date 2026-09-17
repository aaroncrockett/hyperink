import { createServiceClient as createServiceClientDb } from "@hyperink/service-providers";

export const createServiceClient = () =>
  createServiceClientDb(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_API_KEY!,
  );
