// lib/api.ts

const API_BASE = "https://api.rawg.io/api";
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

export async function fetchGames() {
  const res = await fetch(`${API_BASE}/games?key=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await res.json();
  return data.results;
}
