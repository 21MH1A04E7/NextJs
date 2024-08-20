export const dynamic="force-dynamic" //by default auto
export async function GET(): Promise<Response> {
  return Response.json(new Date().toLocaleTimeString());
}
