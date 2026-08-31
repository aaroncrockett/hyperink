import { DisplayFlash as DisplayFlash_src } from "@hyperinkstudio/business";
export type DisplayFlash = DisplayFlash_src;
export type FlashUI = DisplayFlash & {
  publicUrl: string | null;
};
