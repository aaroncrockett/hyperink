"use client";

import { createContext, useContext, useState } from "react";
//
import { capitalizeWords } from "@hyperink/utils";
//
import type { FlashUIPublic } from "../data";

type FlashContextType = {
  collections: string[];
  collectionState: string;
  flashState: Partial<FlashUIPublic>[];
  getFirstThreeFlash: () => Partial<FlashUIPublic>[];
  setCollectionState: React.Dispatch<React.SetStateAction<string>>;
  setFlashState: React.Dispatch<React.SetStateAction<Partial<FlashUIPublic>[]>>;
  userId: string;
};

const FlashContext = createContext<FlashContextType | null>(null);

export function FlashProvider({
  children,
  collection,
  collections,
  flash,
  userId,
}: {
  children: React.ReactNode;
  collection: string | null;
  collections: string[];
  flash: Partial<FlashUIPublic>[];
  userId: string;
}) {
  const [flashState, setFlashState] = useState<Partial<FlashUIPublic>[]>(flash);
  const [collectionState, setCollectionState] = useState(
    capitalizeWords(collection ?? ""),
  );

  const getFirstThreeFlash = () => flashState.slice(0, 3);

  return (
    <FlashContext.Provider
      value={{
        collections,
        collectionState,
        flashState,
        getFirstThreeFlash,
        setCollectionState,
        setFlashState,
        userId,
      }}
    >
      {children}
    </FlashContext.Provider>
  );
}

export function useFlashContext() {
  const context = useContext(FlashContext);

  if (!context) {
    throw new Error("Must be within a provider ot useFlash");
  }

  return context;
}
