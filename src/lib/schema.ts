import { ColumnType, Generated, Insertable, Selectable } from "kysely";

export interface Database {
  logs: LogTable;
}

export interface LogTable {
  id: Generated<string>;
  message: string;
  created_at: string;
}

export type Log = Selectable<LogTable>;
export type LogInsert = Insertable<LogTable>;
