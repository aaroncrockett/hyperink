"use client";

import { createContext, useContext, useState } from "react";
//
import { capitalizeWords } from "@hyperinkstudio/utils";
//
import type { FlashUI } from "../types";

type FlashContextType = {
  flashState: FlashUI[];
  getFirstThreeFlash: () => FlashUI[];
  setFlashState: React.Dispatch<React.SetStateAction<FlashUI[]>>;
  setCollectionState: React.Dispatch<React.SetStateAction<string>>;
  collectionState: string;
};

const FlashContext = createContext<FlashContextType | null>(null);

export function FlashProvider({
  children,
  flash,
  collection,
}: {
  children: React.ReactNode;
  flash: FlashUI[];
  collection: string;
}) {
  const [flashState, setFlashState] = useState<FlashUI[]>(flash);
  const [collectionState, setCollectionState] = useState(
    capitalizeWords(collection),
  );

  const getFirstThreeFlash = () => flashState.slice(0, 3);

  return (
    <FlashContext.Provider
      value={{
        flashState,
        getFirstThreeFlash,
        setFlashState,
        collectionState,
        setCollectionState,
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
