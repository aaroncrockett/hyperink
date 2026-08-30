"use client";
// react
import { useState } from "react";
//
import { Heading } from "@/ui";
// Local
import { FlashProvider } from "./FlashProvider";
import { FlashRender } from "./FlashRender";

//
import { FlashUI } from "../types";

// import { setPinned } from "../helpers";

export function Flash({
  flash,
  collection,
}: {
  collection: string;
  flash: FlashUI[];
}) {
  return (
    <div className="flex flex-col gap-4 bg-surface-200-800/20 rounded p-2 md:p-4">
      <Heading as="h4" weightCls="font-bold">
        Colleciton: {collection}
      </Heading>

      <FlashProvider flash={flash} collection={collection}>
        <FlashRender />
      </FlashProvider>
    </div>
  );
}
