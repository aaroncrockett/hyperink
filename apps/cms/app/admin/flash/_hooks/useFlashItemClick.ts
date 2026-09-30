import { useState } from "react";

export function useFlashItemMenu() {
  const [menuState, setMenuState] = useState(false);

  const handleFlashItemClick = () => {
    setMenuState((isOpen) => !isOpen);
  };

  return {
    menuState,
    handleFlashItemClick,
  };
}
