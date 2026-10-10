"use client";

import { createContext, useContext, useState } from "react";

//
import type { TattooUIPublic } from "../data";

type TattoosContextType = {
  tattoosState: Partial<TattooUIPublic>[];
  getFirstThreeTattoos: () => Partial<TattooUIPublic>[];
  setTattoosState: React.Dispatch<
    React.SetStateAction<Partial<TattooUIPublic>[]>
  >;
  profile_tattoo_id: string;
};

const TattoosContext = createContext<TattoosContextType | null>(null);

export function TattoosProvider({
  children,
  tattoos,
  profile_tattoo_id,
}: {
  children: React.ReactNode;
  tattoos: Partial<TattooUIPublic>[];
  profile_tattoo_id: string;
}) {
  const [tattoosState, setTattoosState] =
    useState<Partial<TattooUIPublic>[]>(tattoos);

  const getFirstThreeTattoos = () => tattoosState.slice(0, 3);

  return (
    <TattoosContext.Provider
      value={{
        tattoosState,
        getFirstThreeTattoos,
        setTattoosState,
        profile_tattoo_id,
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
