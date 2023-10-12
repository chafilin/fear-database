import { getFilters } from "@/firebase/filters";
import { getGhosts } from "@/firebase/ghosts";

export async function GET(): Promise<Response> {
  const filters = (await getFilters()).sort((a, b) => a.priority - b.priority);
  const ghosts = await getGhosts();
  return new Response(JSON.stringify({ filters, ghosts }), {
    headers: { "content-type": "application/json" },
  });
}
