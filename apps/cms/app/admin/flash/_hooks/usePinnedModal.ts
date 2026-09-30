import { useState } from "react";

export function usePinnedModal() {
  const [modalState, setModalState] = useState(false);

  const handleModalState = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalState((isOpen) => !isOpen);
  };

  return {
    modalState,
    handleModalState,
  };
}
