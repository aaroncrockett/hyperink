export const TABLE_CLIENT_TATTOO = "client_tattoo";

export const EDITABLE_CLIENT_TATTOO_COLS = {
  title: {
    key: "title",
    name: "Title",
  },
  type: {
    key: "type",
    name: "Type",
  },
  deposit_amount: {
    key: "deposit_amount",
    name: "Deposit Amount",
  },
  deposit_amount_progress: {
    key: "deposit_amount_progress",
    name: "Deposit Amount Paid",
  },
  deposit_amount_paid_at: {
    key: "deposit_amount_paid_at",
    name: "Deposit Payment Complete",
  },
  drawing_amount: {
    key: "drawing_amount",
    name: "Drawing Amount",
  },
  drawing_amount_progress: {
    key: "drawing_amount_progress",
    name: "Drawing Amount Paid",
  },
  drawing_amount_paid_at: {
    key: "drawing_amount_paid_at",
    name: "Drawing Payment Complete",
  },
  total_price: {
    key: "total_price",
    name: "Total Price",
  },
  paid_progress: {
    key: "paid_progress",
    name: "Paid Amount",
  },
  total_paid_at: {
    key: "total_paid_at",
    name: "Total Payment Complete",
  },
  notes: {
    key: "notes",
    name: "Notes",
  },
} as const;

export const EDITABLE_CLIENT_TATTOO_COLS_ARRAY = Object.values(
  EDITABLE_CLIENT_TATTOO_COLS,
);
