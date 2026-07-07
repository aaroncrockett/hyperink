import { EDITABLE_TATTOO_COLS } from "@inktree/db";

type TattooColKey = keyof typeof EDITABLE_TATTOO_COLS;

export const TATTOO_FORM_COLS = [
  { key: "title", inputType: "text" },
  { key: "type", inputType: "select" },
  { key: "deposit_amount", inputType: "number" },
  { key: "deposit_amount_progress", inputType: "number" },
  { key: "deposit_amount_paid_at", inputType: "checkbox" },
  { key: "drawing_amount", inputType: "number" },
  { key: "drawing_amount_progress", inputType: "number" },
  { key: "drawing_amount_paid_at", inputType: "checkbox" },
  { key: "total_price", inputType: "number" },
  { key: "paid_progress", inputType: "number" },
  { key: "total_paid_at", inputType: "checkbox" },
  { key: "notes", inputType: "textarea" },
] satisfies {
  key: TattooColKey;
  inputType: "text" | "number" | "checkbox" | "textarea" | "select";
}[];

// export const CREATE_TATTOO_FORM_FIELDS = CREATE_TATTOO_FORM_COLS.map(
//   ({ key, inputType }) => ({
//     ...EDITABLE_TATTOO_COLS[key],
//     inputType,
//   }),
// );
