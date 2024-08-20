import { NextRequest } from "next/server";
import { houses, HouseData } from "./data";
export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const data: HouseData[] = query
    ? houses.filter((items) =>
        items.address.toLowerCase().includes(query.toLowerCase())
      )
    : houses;
  return Response.json(data);
}
