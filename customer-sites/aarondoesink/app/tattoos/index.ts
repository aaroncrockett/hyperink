import { getUserImagesByGroupsContaining, getUserImages } from "@inktree/db";
import { createServerClientAndAuth } from "@/utils/db/server";
export async function getImages() {
  const authClient = await createServerClientAndAuth();
  const images = await getUserImagesByGroupsContaining(
    authClient,
    "portfolio-tattoo",
    24,
  );

  return images;
}
