"use client";
import { useState } from "react";
import Image from "next/image";
// @s
import { capitalizeWords } from "@hyperinkstudio/utils";
// local
import type { FlashUI } from "../types";

type FlashProps = {
  flash: FlashUI[];
};

export function Flash({ flash }: FlashProps) {
  const [flashState, setFlashState] = useState(flash);
  return (
    <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {flashState.map((data) =>
        data?.publicUrl ? (
          <div key={data.id}>
            <div className="flex flex-col gap-2 md:gap-4 justify-around p-2 sm:p-4 bg-surface-200-800/40 rounded-xl">
              <Image
                src={data.publicUrl}
                alt={`${data.readable_name ?? ""} - flash image`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto shadow"
              />

              <p className="text-lg text-center font-display text-surface-800-200">
                {capitalizeWords(data.readable_name)}
              </p>
            </div>
          </div>
        ) : null,
      )}
    </ul>
  );
}
