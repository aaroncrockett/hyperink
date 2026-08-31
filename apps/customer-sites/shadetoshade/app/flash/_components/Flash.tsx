"use client";

import Image from "next/image";
//
import { useState } from "react";
// @s
import { capitalizeWords } from "@hyperinkstudio/utils";
// local
import { FlashItem } from "./FlashItem";
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
          <FlashItem
            key={data.id}
            id={data.id}
            readable_name={data.readable_name}
            publicUrl={data.publicUrl}
          />
        ) : null,
      )}
    </ul>
  );
}
