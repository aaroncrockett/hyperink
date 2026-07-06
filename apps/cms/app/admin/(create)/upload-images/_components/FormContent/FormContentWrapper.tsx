import {
  getUserTattooOptionsByGroups,
  getUserTattooOptionsByCategories,
  getUserTattooOptionsByStyles,
  getUserTattooOptionsByTags,
} from "../../_utils";

import { createServerClientAndAuth } from "@/utils/db/server";
import { default as FormContent } from "./FormContent";

const client = await createServerClientAndAuth();

export default async function FormContentWrapper() {
  const styles = (await getUserTattooOptionsByStyles(client)) as string[];
  const categories = (await getUserTattooOptionsByCategories(
    client,
  )) as string[];
  const groups = (await getUserTattooOptionsByGroups(client)) as string[];
  const tags = (await getUserTattooOptionsByTags(client)) as string[];

  return (
    <FormContent
      styles={styles}
      categories={categories}
      groups={groups}
      tags={tags}
    />
  );
}
