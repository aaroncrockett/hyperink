import {
  getUserTattooOptionsByGroups,
  getUserTattooOptionsByCategories,
  getUserTattooOptionsByStyles,
  getUserTattooOptionsByTags,
} from "./helpers";

import { createServerClientAndAuth } from "@/utils/db/server";
import { default as ImageUploadInputs } from "./ImageInputs";

const client = await createServerClientAndAuth();

export default async function ImageInputsWrapper() {
  const styles = (await getUserTattooOptionsByStyles(client)) as string[];
  const categories = (await getUserTattooOptionsByCategories(
    client,
  )) as string[];
  const groups = (await getUserTattooOptionsByGroups(client)) as string[];
  const tags = (await getUserTattooOptionsByTags(client)) as string[];

  return (
    <ImageUploadInputs
      styles={styles}
      categories={categories}
      groups={groups}
      tags={tags}
    />
  );
}
