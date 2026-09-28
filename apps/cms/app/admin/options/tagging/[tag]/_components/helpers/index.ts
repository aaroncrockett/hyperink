import { capitalizeWords } from "@hyperink/utils";
import type { OptionState } from "../TaggingForm";

export function handleSelect(
  state: OptionState,
  option: string,
  action: "add" | "remove",
): OptionState {
  const selected = [...state.selected];
  const unselected = [...state.unselected];

  if (action === "add") {
    if (!selected.includes(option)) {
      selected.push(option);
    }

    const index = unselected.indexOf(option);
    if (index !== -1) {
      unselected.splice(index, 1);
    }
  }

  if (action === "remove") {
    const index = selected.indexOf(option);
    if (index !== -1) {
      selected.splice(index, 1);
    }

    if (!unselected.includes(option)) {
      unselected.push(option);
    }
  }

  return {
    ...state,
    selected,
    unselected,
  };
}

export function handleAddNewOption(
  state: OptionState,
  value: string,
): OptionState {
  const trimmedValue = value.trim();

  if (!trimmedValue) return state;

  const formattedValue = capitalizeWords(trimmedValue);

  return {
    ...state,
    selected: [...state.selected, formattedValue],
  };
}
