"use client";

// local
import { FlashProvider } from "./FlashProvider";
import { FlashRender } from "./FlashRender";
//
import { FlashUI } from "../types";

type FlashProps = {
  collection: string;
  flash: FlashUI[];
  collectionOpts: string[];
};

export function Flash({ flash, collection, collectionOpts }: FlashProps) {
  return (
    <div className="flex flex-col gap-4 bg-surface-200-800/20 rounded p-2 md:p-4">
      <FlashProvider flash={flash} collection={collection}>
        <FlashRender collectionOptions={collectionOpts} />
      </FlashProvider>
    </div>
  );
}
