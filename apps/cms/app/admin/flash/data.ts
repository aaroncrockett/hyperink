import type { TagOpts, OptionsUIRow } from "@hyperink/api/options";
import type { UIRowMeta } from "@hyperink/api";

type OptTagsUI = Pick<OptionsUIRow, "id"> | TagOpts;

const optsTagsUi: UIRowMeta<OptTagsUI> = {
  id: {
    id: "id",
    label: "Id",
    readOnly: true,
    display: false,
  },
  collections: {
    id: "collections",
    label: "Collections",
    readOnly: false,
    display: true,
  },
};
