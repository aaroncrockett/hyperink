import { Database } from "./index";

type KeyOfTables = keyof Database["public"]["Tables"];

type Row<T extends KeyOfTables> = Database["public"]["Tables"][T]["Row"];

type KeyOfColumns<T extends KeyOfTables> = keyof Row<T>;

export type Where<T extends KeyOfTables, K extends KeyOfColumns<T>> = {
  columnKey: K;
  value: Row<T>[K];
};
