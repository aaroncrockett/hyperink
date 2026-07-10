"use client";

import { useState, ReactNode } from "react";

type LookupType = "email" | "phone" | "preferredName";

type Props = {
  children: (lookupType: LookupType) => ReactNode;
};

export default function ClientLookup({ children }: Props) {
  return <>{children(lookupType)}</>;
}
