import { fetchData } from "@/lib/api";
import { NextRequest } from "next/server";


export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params 
  return fetchData(`games/${slug}`, { page: 1, page_size: 10 , ordering: "-rating" });
}