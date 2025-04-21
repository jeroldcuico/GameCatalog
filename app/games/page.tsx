"use client";

import type { VapourGames } from "@/lib/types";

import { useFetch } from "@/hooks/useFetch";
import GameSkeleton from "@/components/common/GameSkeleton";
import GameList from "@/components/common/GameList";

export default function Page() {
  const { data, loading, error } = useFetch<{ results: VapourGames[] }>(
    "api/games"
  );
  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;
  const games = data?.results || [];
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        {/*Sort by*/}
        <div className="flex justify-between items-center my-5 w-full max-w-2xl">
          <h1 className="text-4xl font-bold">All Games</h1>
          <select className="border border-gray-300 rounded p-2">
            <option value="sort-by">Sort by</option>
            <option value="name">Name</option>
            <option value="release-date">Release Date</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div className="relative z-10 text-center max-w-2xl mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome to Vapour
          </h2>
          <p className="text-lg text-center mb-10">
            Your one-stop destination for all your gaming needs.
          </p>
        </div>
        <GameList games={games} />
      </div>
    </>
  );
}
