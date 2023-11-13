import { sql } from "@vercel/postgres";

export async function GET() {
  const result = await sql`
    SELECT EXISTS (
      SELECT FROM information_schema.tables
      WHERE  table_schema = 'public'
      AND    table_name   = 'logs'
    );
  `;

  if (result.rows[0].exists) {
    return new Response(JSON.stringify({ message: "table exists" }), {
      headers: { "content-type": "application/json" },
    });
  }

  await sql`
      CREATE TABLE logs (
        id VARCHAR(255) PRIMARY KEY,
        message VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL
      );
    `;

  return new Response(JSON.stringify({ message: "table created" }), {
    headers: { "content-type": "application/json" },
  });
}
