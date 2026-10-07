"use client";

import { useState } from "react";
//
import { FLASH_OPTS_METADATA, EDIT_FLASH_SCHEMA } from "../data";
//
import {
  Select,
  FormClient as Form,
  ErrorDisplay,
} from "@hyperink/ui-react/components";
import { createBrowserClient } from "@/auth/client";
import { zodIssuesToErrors } from "@hyperink/api-domain-helpers";
import { mergeUsersDefaultCollection } from "@hyperink/api-domain-helpers/options";
import { FlashOptsUI, TagOpts } from "@hyperink/api/options";
import { toLabelValue } from "@hyperink/api-domain-helpers";
import { NextLinkWrapper } from "@/ui";

type FlashOptionsProps = {
  flashOpts: FlashOptsUI;
  tagOpts: TagOpts;
  id: string;
};

export function FlashOptions({ flashOpts, tagOpts, id }: FlashOptionsProps) {
  const [isEditing, setIsEditing] = useState(
    flashOpts?.default_collection === "" ? false : true,
  );

  const [collection, setCollection] = useState(
    flashOpts?.default_collection ?? "",
  );

  const [error, setError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setError("");
    setCollection(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const validatedData = EDIT_FLASH_SCHEMA.safeParse(data);

    if (!validatedData.success) {
      const errors = zodIssuesToErrors(validatedData.error?.issues ?? []);

      return {
        error: { message: errors.message ?? "edit flash error" },
      };
    }

    const client = await createBrowserClient();

    const { data: defaultCollection, error: collectionError } =
      await mergeUsersDefaultCollection(
        client,
        id,
        validatedData.data.default_collection,
      );

    if (collectionError) {
      setError("problem creating a default collection");
    }

    setCollection(defaultCollection);
  };

  const hasError = error !== "";

  return (
    <div>
      {hasError && <ErrorDisplay error={error} />}
      {!tagOpts.collections.length && (
        <div>
          You need to create collections in order to pick a default.{" "}
          <NextLinkWrapper href="/admin/options/tagging/collections"></NextLinkWrapper>
        </div>
      )}
      {!hasError && !isEditing && (
        <div>
          {collection}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}

      {!hasError && tagOpts.collections.length && isEditing && (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <Select
            label={FLASH_OPTS_METADATA.default_collection.label}
            name={FLASH_OPTS_METADATA.default_collection.id}
            defaultValue={collection}
            options={tagOpts?.collections.map((value: string) =>
              toLabelValue(value),
            )}
            onChange={handleInput}
          />
        </Form>
      )}
    </div>
  );
}
