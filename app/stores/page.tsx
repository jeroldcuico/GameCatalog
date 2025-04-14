"use client";
import type { VapourStores } from "@/lib/types";
import { useFetch } from "@/hooks/useFetch";
import GameCard from "@/components/common/GameCard";
import GameSkeleton from "@/components/common/GameSkeleton";

export default function page() {
  const { data, loading, error } = useFetch<{ results: VapourStores[] }>(
    "api/stores"
  );
  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;
  const stores = data?.results || [];

  const heading = "Stores";
  const tagline = "Find your favorite games on these platforms.";

  return <GameCard items={stores} heading={heading} tagline={tagline}/>;
}
