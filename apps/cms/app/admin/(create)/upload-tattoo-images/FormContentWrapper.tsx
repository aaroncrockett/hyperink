"use server";
import {
  getProfileTaggingOptionsByStyles,
  getProfileTaggingOptionsByTags,
} from "@inktree/db";

import { createServerClientAndAuth } from "@/utils/db/server";
import { default as FormContent } from "./FormContent";

const client = await createServerClientAndAuth();

export default async function FormContentWrapper() {
  const styles = (await getProfileTaggingOptionsByStyles(client)) as string[];

  const tags = (await getProfileTaggingOptionsByTags(client)) as string[];

  return <FormContent styles={styles} tags={tags} />;
}
