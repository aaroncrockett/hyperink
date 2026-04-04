import { createClient } from "@/utils/supabase/server";
import { type UserImage } from "@inktree/db/";

const client = await createClient();

const res: { data: UserImage[] | null; error: unknown } =
  await client.selectFrom({
    table: "user_images",
    values: {
      select: "*",
      contains: { key: "groups", value: ["hp"] },
      order: { key: "created_at", value: { ascending: false } },
    },
  });

const { data } = res as {
  data: UserImage[] | null;
};

export { data };
