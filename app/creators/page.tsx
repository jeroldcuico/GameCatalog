"use client";
import type { VapourCreators } from "@/lib/types";
import { useFetch } from "@/hooks/useFetch";
import GameCard from "@/components/common/GameCard";
import GameSkeleton from "@/components/common/GameSkeleton";

export default function page() {
  const { data, loading, error } = useFetch<{ results: VapourCreators[] }>(
    "api/creators"
  );
  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;
  const creators = data?.results || [];
  const heading = "Creators";
  const tagline = "Discover the minds behind your favorite games.";

  return <GameCard items={creators} {...{ heading, tagline }} />;
}
