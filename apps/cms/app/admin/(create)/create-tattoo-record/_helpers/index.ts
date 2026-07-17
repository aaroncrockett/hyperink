import { EDITABLE_CLIENT_TATTOO_COLS } from "@inktree/db";

type TattooColKey = keyof typeof EDITABLE_CLIENT_TATTOO_COLS;

export const TATTOO_FORM_COLS = [
  { key: "title", inputType: "text" },
  { key: "type", inputType: "select" },

  { key: "deposit_amount_paid_at", inputType: "checkbox" },
  { key: "notes", inputType: "textarea" },
] satisfies {
  key: TattooColKey;
  inputType: "text" | "number" | "checkbox" | "textarea" | "select";
}[];

export function getClientTattooInputs(formData: FormData) {
  return Object.fromEntries(
    TATTOO_FORM_COLS.map(({ key, inputType }) => [
      key,
      inputType === "checkbox"
        ? formData.has(key)
          ? new Date().toISOString()
          : null
        : formData.get(key),
    ]),
  ) as Record<TattooColKey, FormDataEntryValue | string | null>;
}
