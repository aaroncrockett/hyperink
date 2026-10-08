"use client";

import { createContext, useContext, useState } from "react";

//
import type { TattooUIPublic } from "../data";

type TattoosContextType = {
  collections: string[];
  collectionState: string;
  tattoosState: Partial<TattooUIPublic>[];
  getFirstThreeTattoos: () => Partial<TattooUIPublic>[];
  setCollectionState: React.Dispatch<React.SetStateAction<string>>;
  setTattoosState: React.Dispatch<
    React.SetStateAction<Partial<TattooUIPublic>[]>
  >;
  user_id: string;
};

const TattoosContext = createContext<TattoosContextType | null>(null);

export function TattoosProvider({
  children,
  collection,
  collections,
  tattoos,
  user_id,
}: {
  children: React.ReactNode;
  collection: string | null;
  collections: string[];
  tattoos: Partial<TattooUIPublic>[];
  user_id: string;
}) {
  const [tattoosState, setTattoosState] =
    useState<Partial<TattooUIPublic>[]>(tattoos);
  const [collectionState, setCollectionState] = useState(collection ?? "");

  const getFirstThreeTattoos = () => tattoosState.slice(0, 3);

  return (
    <TattoosContext.Provider
      value={{
        collections,
        collectionState,
        tattoosState,
        getFirstThreeTattoos,
        setCollectionState,
        setTattoosState,
        user_id,
      }}
    >
      {children}
    </TattoosContext.Provider>
  );
}

export function useTattoosContext() {
  const context = useContext(TattoosContext);

  if (!context) {
    throw new Error("Must be within a provider ot useTattoos");
  }

  return context;
}
