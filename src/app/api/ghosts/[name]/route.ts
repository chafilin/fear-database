import { getFilters } from "@/firebase/filters";
import { getGhost } from "@/firebase/ghosts";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
): Promise<Response> {
  const { name } = params;
  const ghost = await getGhost(name);
  const filters = await getFilters();
  console.log(filters);
  return new Response(JSON.stringify({ ghost, filters }), {
    headers: { "content-type": "application/json" },
  });
}
