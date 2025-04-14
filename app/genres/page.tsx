"use client";
import type { VapourGenres } from "@/lib/types";
import { useFetch } from "@/hooks/useFetch";
import GameCard from "@/components/common/GameCard";

export default function page() {
  const { data, loading, error } = useFetch<{ results: VapourGenres[] }>(
    "api/genres"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const genres = data?.results || [];
  const heading = "Genres";
  const tagline = "Explore games by genre.";

  return <GameCard items={genres} {...{ heading, tagline }} />;
}
