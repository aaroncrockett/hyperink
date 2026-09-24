import { MergeDeep } from "type-fest";
import type { Database as DatabaseGenerated } from "@hyperink/service-providers";
import {
  FlashRow as FlashRowSrc,
  FlashUIRow as FlashUIRowSrc,
} from "@hyperink/api/flash";
import {
  OptionsRow as OptionsRowSrc,
  OptionsUIRow as OptionsUIRowSrc,
} from "@hyperink/api/options";
import {
  ProfileRow as ProfileRowSrc,
  ProfileUIRow as ProfileUIRowSrc,
} from "@hyperink/api/profile";

export * from "./query";

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        flash: {
          Row: FlashRowSrc;
        };
        options: {
          Row: OptionsRowSrc;
        };
        profile: {
          Row: ProfileRowSrc;
        };
      };
    };
  }
>;

export type DatabaseUI = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        flash: {
          Row: FlashUIRowSrc;
        };
        profile: {
          Row: ProfileUIRowSrc;
        };
        options: {
          Row: OptionsUIRowSrc;
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
  [key: string]: any;
};

export type UIRowMeta<T> = {
  [K in keyof T]: UIMetaData<T, K>;
};

export type KeyOfTables = keyof Database["public"]["Tables"];
export type KeyOfColumns<T extends KeyOfTables> =
  keyof Database["public"]["Tables"][T]["Row"];
export type Column<
  T extends KeyOfTables,
  K extends KeyOfColumns<T>,
> = DatabaseUI["public"]["Tables"][T]["Row"][K];

export type KeyOfTablesUI = keyof DatabaseUI["public"]["Tables"];
export type KeyOfColumnsUI<T extends KeyOfTables> =
  keyof DatabaseUI["public"]["Tables"][T]["Row"];
export type ColumnUI<
  T extends KeyOfTablesUI,
  K extends KeyOfColumnsUI<T>,
> = DatabaseUI["public"]["Tables"][T]["Row"][K];
