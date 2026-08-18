import { useState } from "react";
import type { FileMetadata } from "./types";

export function useFileMetadata() {
  const [fileMetadata, setFileMetadata] = useState<FileMetadata[]>([]);

  function updateFileMetadata(
    id: string,
    updates: Partial<Omit<FileMetadata, "id">>,
    singleCollection?: string,
  ) {
    setFileMetadata((prev) =>
      prev.map((file) =>
        singleCollection || file.id === id
          ? {
              ...file,
              ...updates,
              ...(singleCollection && {
                collection: singleCollection,
              }),
            }
          : file,
      ),
    );
  }

  return {
    fileMetadata,
    setFileMetadata,
    updateFileMetadata,
  };
}
