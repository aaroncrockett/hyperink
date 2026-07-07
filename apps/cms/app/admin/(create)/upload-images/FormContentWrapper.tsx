import {
  getProfileTattooOptionsByGroups,
  getProfileTattooOptionsByCategories,
  getProfileTattooOptionsByStyles,
  getProfileTattooOptionsByTags,
} from "@inktree/db";

import { createServerClientAndAuth } from "@/utils/db/server";
import { default as FormContent } from "./FormContent";

const client = await createServerClientAndAuth();

export default async function FormContentWrapper() {
  const styles = (await getProfileTattooOptionsByStyles(client)) as string[];
  const categories = (await getProfileTattooOptionsByCategories(
    client,
  )) as string[];
  const groups = (await getProfileTattooOptionsByGroups(client)) as string[];
  const tags = (await getProfileTattooOptionsByTags(client)) as string[];

  return (
    <FormContent
      styles={styles}
      categories={categories}
      groups={groups}
      tags={tags}
    />
  );
}
