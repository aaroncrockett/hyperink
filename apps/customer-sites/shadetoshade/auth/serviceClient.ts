import { createServiceClient as createServiceClientDb } from "@hyperinkstudio/services";

export const createServiceClient = () =>
  createServiceClientDb(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
