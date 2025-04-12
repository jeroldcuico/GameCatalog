import { fetchData } from "@/lib/api";

export async function GET() {
  return fetchData("games", { page: 1, page_size: 10 });
}
