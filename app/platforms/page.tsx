"use client";
import type { VapourPlatforms } from "@/lib/types";
import { useFetch } from "@/hooks/useFetch";
import GameCard from "@/components/common/GameCard";
import GameSkeleton from "@/components/common/GameSkeleton";

export default function Page() {
  const { data, loading, error } = useFetch<{ results: VapourPlatforms[] }>(
    "api/platforms"
  );
  if (loading) return <GameSkeleton/>;
  if (error) return <p>Error: {error}</p>;
  const platforms = data?.results || [];
  const heading = "Platforms";
  const tagline = "Explore games by platform.";

  return <GameCard items={platforms} {...{ heading, tagline }} />;
}
