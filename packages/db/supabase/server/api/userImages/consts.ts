export const TABLE = "user_images";
export const BUCKET = "user-images";

export const EDITABLE_COLS = {
  collections: {
    key: "categories",
    name: "categories",
  },
  styles: {
    key: "styles",
    name: "Styles",
  },
  tags: {
    key: "tags",
    name: "Tags",
  },
  groups: {
    key: "groups",
    name: "Groups",
  },
  readable_name: {
    key: "readable_name",
    name: "Name",
  },
  tattoo_id: {
    key: "tattoo_id",
    name: "Related tattoo",
  },
  pinned: {
    key: "pinned",
    name: "Pinned order",
  },
};

export const EDITABLE_COLS_ARRAY = Object.values(EDITABLE_COLS);
