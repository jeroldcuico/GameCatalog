import { fetchData } from "@/lib/api";
import { NextRequest } from "next/server";

//https://api.rawg.io/api/developers?key=0be51244282640ca88cd585acc92d333&page=2&page_size=10

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parts = (slug as string).split("-");
  const getid = parts[0];
  const getcategory = parts[1];
  return fetchData(`games`, { page: 1, page_size: 10, [getcategory] : getid , ordering: "rating" });
}
