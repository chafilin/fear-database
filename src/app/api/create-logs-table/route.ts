import { sql } from "@vercel/postgres";

export async function GET() {
  await sql`
    CREATE TABLE logs (
      id VARCHAR(255) PRIMARY KEY,
      message VARCHAR(255) NOT NULL,
      created_at TIMESTAMP NOT NULL
    );
  `;

  return new Response(JSON.stringify({ message: "ok" }), {
    headers: { "content-type": "application/json" },
  });
}
