import { useState } from "react";

export function useTattooItemMenu() {
  const [menuState, setMenuState] = useState(false);

  const handleTattooItemClick = () => {
    setMenuState((isOpen) => !isOpen);
  };

  return {
    menuState,
    handleTattooItemClick,
  };
}
