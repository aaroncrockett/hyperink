export const TATTOO_TABLE = "tattoos";

export const EDITABLE_TATTOO_COLS = {
  title: {
    key: "title",
    name: "Title",
  },
  needles_used: {
    key: "needles_used",
    name: "Needleds Used",
  },
  inks_used: {
    key: "inks_used",
    name: "Inks Used",
  },
  type: {
    key: "type",
    name: "Type",
  },
  tipped_amount: {
    key: "tipped_amount",
    name: "Amount Tipped in Total",
  },
  deposit_amount: {
    key: "deposit_amount",
    name: "Deposit Amount",
  },
  deposit_amount_progress: {
    key: "deposit_amount_progress",
    name: "Deposit Paid So Far",
  },
  deposit_amount_paid_at: {
    key: "deposit_amount_progress",
    name: "Deposit Completed?",
  },
  drawing_amount: {
    key: "drawing_amount",
    name: "Drawing Amount",
  },
  drawing_amount_progress: {
    key: "drawing_amount_progress",
    name: "Drawing Amount Paid So Far",
  },
  drawing_amount_paid_at: {
    key: "drawing_amount_progress",
    name: "Drawing Amount Completed?",
  },
  total_price: {
    key: "total_price",
    name: "Total Price",
  },
  paid_progress: {
    key: "paid_progress",
    name: "Price",
  },
  total_paid_at: {
    key: "total_paid_at",
    name: "All paid up?",
  },
  notes: {
    key: "notes",
    name: "Notes",
  },
};

export const EDITABLE_TATTOO_COLS_ARRAY = Object.values(EDITABLE_TATTOO_COLS);
