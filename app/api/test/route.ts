import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.RAWG_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const res = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch genres" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
