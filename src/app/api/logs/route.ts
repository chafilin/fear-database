import { getLogs, postLog } from "@/firebase/log";

export async function GET(): Promise<Response> {
  const logs = await getLogs();
  const sordetLogs = logs.sort((a, b) => (a.date > b.date ? 1 : -1));
  return new Response(JSON.stringify({ logs: sordetLogs }), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request): Promise<Response> {
  const res = await request.json();
  await postLog(res.message);

  return Response.json({ message: "ok" });
}
