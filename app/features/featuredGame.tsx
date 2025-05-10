"use client";
import LoadingScreen from "@/components/common/LoadingScreen";
import ReusableCarousel from "@/components/reusable/reusablecarousel";
import { useFetchFeature } from "@/hooks/useFetchFeature";
import type { VapourGames } from "@/lib/types";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

export default function FeaturedGame() {
  const dateQueries = "&dates=2024-01-01,2025-12-31&ordering=-added";
  const { data, loading, error } = useFetchFeature<{ results: VapourGames[] }>(
    `https://api.rawg.io/api/games?key=${API_KEY}${dateQueries}`
  );

  const games = data?.results;

  if (loading) return <LoadingScreen />;
  return <ReusableCarousel games={games} />;
}
