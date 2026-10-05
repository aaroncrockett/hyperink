"use client";
import Image from "next/image";
//
import { useState } from "react";
//
import { type FlashUIRow } from "@hyperink/api/flash";
import { capitalizeWords } from "@hyperink/utils";
//
import { Page, Select } from "@hyperink/ui-react/components";
import { createBrowserClient } from "@/auth/client";

const client = createBrowserClient();

type TaggedImagesProps = {
  item: Partial<FlashUIRow>;
  tag: string;
  tags: string[];
};

export function TaggedImagesComponent({ item, tags, tag }: TaggedImagesProps) {
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

    setSelectedImages([]);
    setIsSubmitting(false);
  };

  return (
    <Page>
      <h1 className="hI-h1">Tagged Images</h1>

      <button
        className="hI-btn hI-btn-primary"
        disabled={!selectedTag || !selectedImages.length || isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {tag === "collections" && (
        <Select
          id="collection"
          name="collection"
          label="Collections"
          value={selectedTag}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedTag(e.target.value)
          }
          options={tags.map((tag) => ({
            label: tag,
            value: capitalizeWords(tag),
          }))}
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {item?.map((flash, i) => {
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
                  src={flash.public_url ?? ""}
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
