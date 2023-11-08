import { Database, LogInsert } from "./schema";
import { createKysely } from "@vercel/postgres-kysely";

// Create a Kysely instance.
const db = createKysely<Database>();

export const newLog = async (log: LogInsert) => {
  return await db
    .insertInto("logs")
    .values(log)
    .returningAll()
    .executeTakeFirstOrThrow();
};

export const getLogs = async () => {
  return await db
    .selectFrom("logs")
    .selectAll()
    .orderBy("created_at asc")
    .execute();
};
