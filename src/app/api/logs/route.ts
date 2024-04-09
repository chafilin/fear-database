import { newLog, getLogs } from "@/lib/database";
import { LogInsert } from "@/lib/schema";
import { nanoid } from "nanoid";

export async function GET(): Promise<Response> {
  const logs = await getLogs();

  return new Response(JSON.stringify(logs), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  const message = body.message;

  const log: LogInsert = {
    id: nanoid(),
    message: message,
    created_at: new Date(),
  };

  const resultLog = await newLog(log);

  return new Response(JSON.stringify({ log: resultLog }), {
    headers: { "content-type": "application/json" },
  });
}
