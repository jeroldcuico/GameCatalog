import { fetchData } from "@/lib/api";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: number , category: string} }) {
  const { id , category } = params;
  return fetchData(`games/${category}/${id}`);
}
