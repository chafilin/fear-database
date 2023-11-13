import { sql } from "@vercel/postgres";

export function GET() {
  return sql`
    CREATE TABLE logs (
      id VARCHAR(255) PRIMARY KEY,
      message VARCHAR(255) NOT NULL,
      created_at TIMESTAMP NOT NULL
    );
  `;
}
