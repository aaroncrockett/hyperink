import { type DisplayFlash } from "@/business/flash";

export type GetFlash = () => Partial<FlashUI | undefined>[];

export type FlashUI = DisplayFlash & {
  publicUrl: string | null;
};
