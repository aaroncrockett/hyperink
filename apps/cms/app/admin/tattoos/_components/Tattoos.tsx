"use client";

//
import { TattoosProvider } from "./TattoosProvider";
import { TattoosRender } from "./TattoosRender";
//
import { TattooUI } from "../data";

type TattooProps = {
  tattoos: Partial<TattooUI>[];
  profile_tattoo_id: string;
};

export function Tattoos({ tattoos, profile_tattoo_id }: TattooProps) {
  return (
    <div className="flex flex-col gap-4 bg-surface-200-800/20 rounded p-2 md:p-4">
      <TattoosProvider tattoos={tattoos} profile_tattoo_id={profile_tattoo_id}>
        <TattoosRender />
      </TattoosProvider>
    </div>
  );
}
