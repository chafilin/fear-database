import { getFilters } from "@/firebase/filters";
import { getGhost } from "@/firebase/ghosts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  const ghost = await getGhost(id);
  const filters = await getFilters();
  return new Response(JSON.stringify({ ghost, filters }), {
    headers: { "content-type": "application/json" },
  });
}
