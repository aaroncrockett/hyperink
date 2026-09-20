export const docs = [
  {
    name: "desc",
    description: "A description",
    type: "string",
  },
  {
    name: "descClassName",
    description: "Adds to description classes",
    type: "string",
  },
  {
    name: "descUtilClassName",
    description: "Overrides description classes",
    type: "string",
  },
  {
    name: "defaultValue",
    description: "A default value",
    type: "string",
  },
  {
    name: "dir",
    description:
      "Determines if flex col or row is used. Also affects wrapper gap and alignments",
    type: "col|row",
  },
  {
    name: "disabled",
    description: "is or is not disabled",
    type: "boolean",
  },
  {
    name: "errorClassName",
    description: "Adds to error class name",
    type: "string",
  },
  {
    name: "errorUtilClassName",
    description: "Overrides error classes. hI-input-error",
    type: "string",
  },
  {
    name: "error",
    description: "A string error message",
    type: "string",
  },
  {
    name: "id",
    description: "string",
    type: "string",
  },
  {
    name: "inputUtilClassName",
    description:
      "Overrides input classes. className is on props and adds to the input classes. hI-input-check",
    type: "string",
  },
  {
    name: "label",
    description: "The input label.",
    type: "string",
  },
  {
    name: "labelClassName",
    description: "Adds to label classes.",
    type: "string",
  },
  {
    name: "labelUtilClassName",
    description: "Overrides label classes. hI-input-label",
    type: "string",
  },
  {
    name: "name",
    description: "The input name.",
    type: "string",
  },
  {
    name: "placeholder",
    description: "The input placeholder text.",
    type: "string",
  },
  {
    name: "readOnly",
    description: "Makes the input read-only.",
    type: "boolean",
  },
  {
    name: "required",
    description: "Marks the input as required.",
    type: "boolean",
  },
  {
    name: "textColorUtilClassName",
    description:
      "Overrides text color for all text colors except placeholder and description. To override a specific text color, use !important and pass it as a className. hI-input-text-color.",
    type: "string",
  },

  {
    name: "type",
    description: "The input type.",
    type: "React.HTMLInputTypeAttribute",
  },
  {
    name: "value",
    description: "The input value.",
    type: "string",
  },
  {
    name: "wrapperAlignUtilClassName",
    description:
      "Overrides alignment classes. This is needed in isolation because the alignment is computed based on the layout prop.",
    type: "string",
  },
  {
    name: "wrapperGapUtilClassName",
    description:
      "Overrides gap classes. Gap is needed in isolation because the gap is computed based on the layout prop.",
    type: "string",
  },
  {
    name: "wrapperClassName",
    description: "Adds to wrapper classes.",
    type: "string",
  },
  {
    name: "wrapperUtilClassName",
    description: "Overrides wrapper classes. wrapperUtilClassName.",
    type: "string",
  },
  {
    name: "...props",
    description: "All other props are applied to the Input element.",
    type: 'ComponentPropsWithoutRef<"input">',
  },
];
