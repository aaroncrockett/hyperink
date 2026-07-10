export const TABLE_TATTOO_IMAGE = "tattoo_image";
export const BUCKET = "user-images";

export const EDITABLE_COLS = {
  collections: {
    key: "collections",
    name: "Collections",
  },
  styles: {
    key: "styles",
    name: "Styles",
  },
  tags: {
    key: "tags",
    name: "Tags",
  },
  readable_name: {
    key: "readable_name",
    name: "Name",
  },
  tattoo_id: {
    key: "tattoo_id",
    name: "Related tattoo",
  },
  pinned_order: {
    key: "pinned_order",
    name: "Pinned Order",
  },
};

export const EDITABLE_COLS_ARRAY = Object.values(EDITABLE_COLS);
