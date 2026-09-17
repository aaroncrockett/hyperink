import {
  Client,
  Tables,
  Database,
  QueryData,
  // Where,
  // AllowedTable,
  // AppTables,
} from "@hyperink/service-providers";

const extractSelect = (selectKeys: string[]) =>
  selectKeys.length ? selectKeys.join(",") : "*";

type KeyOfTables = keyof Database["public"]["Tables"];
type KeyOfColumns<T extends KeyOfTables> =
  keyof Database["public"]["Tables"][T]["Row"];

export function createSupabaseQueries<T extends KeyOfTables>(table: T) {
  return {
    sbGet(client: Client, selectKeys: KeyOfColumns<T>[]) {
      const select = extractSelect(selectKeys.map(String));

      const query = client.from(table).select(select);

      type GenericQuery = QueryData<typeof query>;

      return query;
    },

    // sbGetWhere(
    //   client: Client,
    //   selectKeys: (keyof AppTables[T] & string)[],
    //   where: Where<T>[],
    // ) {
    //   let query = this.sbGet(client, selectKeys);

    //   for (const condition of where) {
    //     query = query.eq(condition.columnKey as any, condition.value!);
    //   }

    //   return query;
    // },

    // sbGetOverlapping(
    //   client: Client,
    //   selectKeys: (keyof AppTables[T] & string)[],
    //   overlaps: Where<T>[],
    // ) {
    //   let query = this.sbGet(client, selectKeys);

    //   for (const condition of overlaps) {
    //     query = query.overlaps(
    //       condition.columnKey as any,
    //       condition.value! as any[],
    //     );
    //   }

    //   return query;
    // },
  };
}
