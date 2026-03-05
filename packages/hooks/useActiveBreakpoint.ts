"use client";

import { useEffect, useState } from "react";

export function useActiveBreakpoint<T extends string>(
  queries: Record<T, string>,
): T | null {
  const [active, setActive] = useState<T | null>(null);

  useEffect(() => {
    const entries = Object.entries(queries) as [T, string][];

    const mediaQueryLists = entries.map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }));

    const checkActive = () => {
      const match = mediaQueryLists.find(({ mql }) => mql.matches);
      setActive(match ? match.key : null);
    };

    checkActive();

    mediaQueryLists.forEach(({ mql }) => {
      mql.addEventListener("change", checkActive);
    });

    return () => {
      mediaQueryLists.forEach(({ mql }) => {
        mql.removeEventListener("change", checkActive);
      });
    };
  }, [queries]);

  return active;
}
