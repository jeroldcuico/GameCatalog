"use client";
import type { VapourDevelopers } from "@/lib/types";
import { useFetch } from "@/hooks/useFetch";
import GameCard from "@/components/common/GameCard";
import GameSkeleton from "@/components/common/GameSkeleton";

export default function page() {
  const { data, loading, error } = useFetch<{ results: VapourDevelopers[] }>(
    "api/developers"
  );
  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;
  const developers = data?.results || [];

  const heading = "Developers";
  const tagline = "Discover the creators behind your favorite games.";

  return <GameCard items={developers} {...{ heading, tagline }} />;
}
