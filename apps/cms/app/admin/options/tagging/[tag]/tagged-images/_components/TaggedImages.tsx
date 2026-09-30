"use client";
import Image from "next/image";
//
import { useState } from "react";
//
import type { FlashRecord } from "@hyperinkstudio/services";
import { updateFlash } from "@hyperinkstudio/api";
import { capitalizeWords } from "@hyperinkstudio/utils";
//
import type { ProfileTaggingOptionsTags } from "@/business/profileTaggingOpts";
import { Button, Page, Heading, Select } from "@/ui";
import { createBrowserClient } from "@/auth/client";

const client = createBrowserClient();

type ImageData = (Partial<FlashRecord> & {
  publicUrl?: string;
})[];

type TaggedImagesProps = {
  imageData: ImageData;
  id: keyof ProfileTaggingOptionsTags;
  tags: string[];
};

export function TaggedImagesComponent({
  imageData,
  tags,
  id,
}: TaggedImagesProps) {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageClick = (imageId?: string) => {
    if (!imageId) return;

    setSelectedImages((prev) =>
      prev.includes(imageId)
        ? prev.filter((id) => id !== imageId)
        : [...prev, imageId],
    );
  };

  const handleSubmit = async () => {
    if (!selectedTag || !selectedImages.length) return;

    setIsSubmitting(true);

    if (id === "collections") {
      const results = await Promise.all(
        selectedImages.map((imageId) =>
          updateFlash(client, {
            id: imageId,
            collection: selectedTag,
          }),
        ),
      );

      const error = results.find((result) => result.error)?.error;

      if (error) {
        console.error(error);
        setIsSubmitting(false);
        return;
      }
    }

    setSelectedImages([]);
    setIsSubmitting(false);
  };

  return (
    <Page>
      <Heading>Heading</Heading>

      <Button
        className="btn btn-tertiary-500"
        disabled={!selectedTag || !selectedImages.length || isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      {id === "collections" && (
        <Select
          id="collection"
          name="collection"
          label="Collections"
          value={selectedTag}
          onChange={(e) =>
            setSelectedTag((e.target as HTMLSelectElement).value)
          }
          options={tags.map((tag) => ({
            label: tag,
            value: capitalizeWords(tag),
          }))}
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageData?.map((flash, i) => {
          const isSelected = flash.id
            ? selectedImages.includes(flash.id)
            : false;

          return (
            <button
              type="button"
              key={`${flash.id ?? "flash"}-${i}`}
              onClick={() => handleImageClick(flash.id)}
              className={isSelected ? "ring-4 ring-primary-500" : ""}
            >
              <div className="relative w-20 h-20 sm:w-30 sm:h-30 lg:w-40 lg:h-40 overflow-hidden">
                <Image
                  src={flash.publicUrl ?? ""}
                  alt={flash.readable_name ?? ""}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </button>
          );
        })}
      </div>
    </Page>
  );
}
