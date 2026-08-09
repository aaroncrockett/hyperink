import * as Types from "./types";
export const TYPES_MAP = {
  textarea: "textarea",
  checkbox: "checkbox",
  select: "select",
  text: "input",
  number: "input",
  email: "input",
  tel: "input",
  hidden: "input",
} as const;

export const PlacementOptions: Types.SelectOption[] = [
  {
    label: "Thigh",
    value: "thigh",
  },
  {
    label: "Upper Arm",
    value: "upper-arm",
  },
  {
    label: "Lower Arm",
    value: "lower-arm",
  },
  {
    label: "Wrist",
    value: "wrist",
  },
];

export const SizeOptions: Types.SelectOption[] = [
  {
    label: '0-2"',
    value: "0-2in",
  },
  {
    label: '2-4"',
    value: "2-4in",
  },
  {
    label: '4-7"',
    value: "4-7in",
  },
  {
    label: '7-9"',
    value: "7-9in",
  },
  {
    label: '9-12"',
    value: "9-12in",
  },
  {
    label: '13+"',
    value: "13+in",
  },
];

export const TattooTypeOptions: Types.SelectOption[] = [
  {
    label: "Flash",
    value: "flash",
  },
  {
    label: "Custom",
    value: "custom",
  },
];
