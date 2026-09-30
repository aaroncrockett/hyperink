"use client";

import { createContext, useContext, useState } from "react";

//
import type { FlashUIPublic } from "../data";

type FlashContextType = {
  collections: string[];
  collectionState: string;
  flashState: Partial<FlashUIPublic>[];
  getFirstThreeFlash: () => Partial<FlashUIPublic>[];
  setCollectionState: React.Dispatch<React.SetStateAction<string>>;
  setFlashState: React.Dispatch<React.SetStateAction<Partial<FlashUIPublic>[]>>;
  user_id: string;
};

const FlashContext = createContext<FlashContextType | null>(null);

export function FlashProvider({
  children,
  collection,
  collections,
  flash,
  user_id,
}: {
  children: React.ReactNode;
  collection: string | null;
  collections: string[];
  flash: Partial<FlashUIPublic>[];
  user_id: string;
}) {
  const [flashState, setFlashState] = useState<Partial<FlashUIPublic>[]>(flash);
  const [collectionState, setCollectionState] = useState(collection ?? "");

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
        user_id,
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
