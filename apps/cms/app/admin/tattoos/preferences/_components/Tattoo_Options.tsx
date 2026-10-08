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
import { TagOpts } from "@hyperink/api/options";
import { toLabelValue } from "@hyperink/api-domain-helpers";
import { NextLinkWrapper } from "@/ui";

type FlashOptionsProps = {
  defaultCollection: string;
  tagOpts: TagOpts;
  id: string;
};

export function TattooOptions({
  defaultCollection,
  tagOpts,
  id,
}: FlashOptionsProps) {
  const [isEditing, setIsEditing] = useState(
    defaultCollection === "" ? true : false,
  );

  const [collection, setCollection] = useState(defaultCollection ?? "");

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
    <div className="bg-surface-100-900 p-2 rounded">
      nothing to see here RN
      {/* {hasError && <ErrorDisplay error={error} />}
      {!tagOpts?.collections?.length && (
        <div>
          You need to create collections in order to pick a default.{" "}
          <NextLinkWrapper href="/admin/options/tagging/collections"></NextLinkWrapper>
        </div>
      )}
      {!hasError && !isEditing && (
        <div className="flex flex-col gap-3 items-start text-lg">
          <span className="text-2xl flex gap-2">Default Collection:</span>
          <span className="text-lg flex gap-3 bg-surface-200-800/50 p-2 rounded w-full font-bold">
            {collection}{" "}
            <button
              className="hI-btn hI-btn-primary btn-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </span>
        </div>
      )}

      {!hasError && tagOpts?.collections?.length && isEditing && (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-3"
        >
          <Select
            label={FLASH_OPTS_METADATA.default_collection.label}
            name={FLASH_OPTS_METADATA.default_collection.id}
            options={tagOpts?.collections.map((value: string) =>
              toLabelValue(value),
            )}
            onChange={handleInput}
          />
        </Form>
      )} */}
    </div>
  );
}
