"use client";
import { fetchGames } from "@/lib/api";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Game {
  id: number;
  title: string;
  name: string;
  description: string;
  background_image: string;
}

export default function page() {
  const [gamelist, setGameList] = useState<Game[]>([]);
  const [errormsg, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const data = await fetchGames();
        setGameList(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchAllGames();
  }, []);

  console.log(gamelist);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        {/*Sort by*/}
        <div className="flex justify-between items-center mb-4 w-full max-w-2xl">
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
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {gamelist.map((game) => (
            <div key={game.id} className="transition transform hover:scale-105">
              <div className="flex flex-wrap items-center flex-col justify-center p-4 h-40 shadow-md">
                <img
                  src={game.background_image}
                  className="w-32 h-32 mb-2"
                  alt={game.name}
                />
              </div>
              <div className="text-center font-medium">{game.name}</div>
              <p className="text-sm text-gray-500">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
