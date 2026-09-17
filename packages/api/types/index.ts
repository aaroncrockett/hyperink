import { MergeDeep } from "type-fest";
import type { Database as DatabaseGenerated } from "@hyperink/service-providers";
export type { Tables } from "@hyperink/service-providers";
import { CustomFlashRow as CustomFlashRowSrc } from "./flash";
export type { FlashTagging, FlashUIRow } from "./flash";

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        flash: {
          Row: CustomFlashRowSrc;
        };
      };
    };
  }
>;

export type UIMetaData<T, K extends keyof T> = {
  id: K;
  label: string;
  readOnly?: boolean;
  display?: boolean;
};

export type UIRowMeta<T> = {
  [K in keyof T]: UIMetaData<T, K>;
};
