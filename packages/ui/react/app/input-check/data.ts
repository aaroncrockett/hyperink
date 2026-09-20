export const docs = [
  {
    name: "checked",
    description: "Controls whether the checkbox is checked.",
    type: "boolean",
  },
  {
    name: "error",
    description: "An error message displayed below the checkbox.",
    type: "string | null",
  },
  {
    name: "errorClassName",
    description: "Adds to the error classes.",
    type: "string",
  },
  {
    name: "errorUtilClassName",
    description: "Overrides the error utility classes. hI-input-error",
    type: "string",
  },
  {
    name: "id",
    description: "The unique ID of the checkbox.",
    type: "string",
  },
  {
    name: "inputUtilClassName",
    description: "Overrides the checkbox input utility classes. hI-input-check",
    type: "string",
    default: '"hI-input-check"',
  },
  {
    name: "label",
    description: "The checkbox label.",
    type: "string",
  },
  {
    name: "labelClassName",
    description: "Adds to the label classes.",
    type: "string",
  },
  {
    name: "labelOrder",
    description:
      "Determines whether the label appears before or after the checkbox.",
    type: '"before" | "after"',
    default: '"after"',
  },
  {
    name: "labelUtilClassName",
    description: "Overrides the label utility classes.",
    type: "string",
    default: '"hI-input-label"',
  },
  {
    name: "name",
    description: "The name of the checkbox input.",
    type: "string",
  },
  {
    name: "textColorUtilClassName",
    description:
      "Overrides the text color utility classes. hI-input-text-color",
    type: "string",
    default: '"hI-input-text-color"',
  },

  {
    name: "wrapperClassName",
    description: "Adds to the wrapper classes.",
    type: "string",
  },
  {
    name: "wrapperUtilClassName",
    description:
      "Overrides the wrapper utility classes. hI-input-check-wrap hI-input-check-wrap-align hI-input-check-wrap-layout",
    type: "string",
    default: '"hI-input-check-wrap"',
  },
];
