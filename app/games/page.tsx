"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
//import { rawData } from "../../lib/testObj";
import type { VapourGames } from "@/lib/types";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Gamepad2Icon } from "lucide-react";
import { useFetch } from "@/hooks/useFetch";
import GameSkeleton from "@/components/common/GameSkeleton";

export default function Page() {
  const { data, loading, error } = useFetch<{ results: VapourGames[] }>(
    "api/games"
  );
  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;
  const games = data?.results;
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
        <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
          {games?.map((game) => (
            <Card className="max-w-2xl rounded-md shadow-lg" key={game.id}>
              <CardHeader className="relative">
                {/* Background Image */}
                <div className="w-full h-48 relative">
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    layout="fill"
                    sizes="60"
                    objectFit="cover"
                  />
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4">
                    <h3 className="text-white text-2xl font-semibold">
                      {game.name}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <span className="font-semibold">
                    Released: {game.released}
                  </span>
                  <span className="font-semibold flex flex-wrap gap-2">
                    Genre:{" "}
                    {game.genres.map((g) => (
                      <Badge key={g.id}>{g.name}</Badge>
                    ))}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href={`/games/${game.slug}`}
                  className="inline-flex items-center gap-2 justify-center rounded-sm bg-slate-500 text-white px-4 py-2 text-[12px] font-medium hover:bg-slate-600 transition duration-200"
                >
                  <Gamepad2Icon className="!h-5 !w-5" /> Game Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
