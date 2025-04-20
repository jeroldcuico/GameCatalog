// app/api/games/[slug]/route.ts

import { fetchData } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { slug: string } }) {
  const { slug } = context.params; // Correctly destructure the `slug` from the `params` object

  // Fetch data using the fetchData function
  const data = await fetchData(`games/${slug}`);

  // Return the fetched data as JSON
  return NextResponse.json(data);
}
