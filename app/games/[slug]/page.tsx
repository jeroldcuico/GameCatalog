// app/game/[slug]/page.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";
import { VapourGameDetails } from "@/lib/types";

export default function GameDetailsPage() {
  const { slug } = useParams(); // dynamic route param from /games/[slug]
  const { data, loading, error } = useFetch<VapourGameDetails>(
    `/api/games/${slug}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found</p>;

  const game = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 dark:text-white">
      <div
        className="h-64 md:h-96 bg-cover bg-center rounded-sm shadow-lg"
        style={{ backgroundImage: `url(${game.background_image_additional})` }}
      />

      <div className="mt-6 grid md:grid-cols-4 gap-6">
        {/* Cover Image */}
        <div className="md:col-span-1">
          <img
            src={game.background_image}
            alt={game.name_original}
            className="rounded-sm shadow-md w-full"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-3 space-y-4">
          <h1 className="text-3xl font-bold">{game.name}</h1>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-lg font-medium">{game.rating}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {game.genres?.map((genre, index) => (
              <Badge key={index}>{genre.name}</Badge>
            ))}
          </div>

          <p>{game.description_raw}</p>

          <Card className="mt-4">
            <CardContent className="p-4 text-sm space-y-1 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <strong>Developer:</strong>
                {game.developers?.map((developer, index) => (
                  <div key={index}>
                    <Badge className="text-sm">{developer.name}</Badge>
                  </div>

                ))}
              </div>
              <div>
              <strong> Released:</strong> <Badge className="text-sm" variant="secondary">{game.released}</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <strong>Platform:</strong> 
                {game.platforms?.map(({platform}, index) => (
                  <div key={index}>
                    <Badge className="text-sm" variant="outline">{platform?.name}</Badge>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <strong>Tags:</strong> 
                {game.tags.map((tag, index) => (
                  <div key={index}>
                    <Badge className="text-sm" variant="destructive">{tag?.name}</Badge>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <strong>Stores:</strong> 
                {game.stores?.map(({store}, index) => (
                  <div key={index}>
                    <Badge className="text-sm" variant="outline">{store?.name}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Additional sections can be added here, such as reviews, similar games, etc. */}
      <div className="mt-10">
        {/* Similar games */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Similar Games</h2>
        <div className="flex flex-wrap gap-5 justify-evenly">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              className="dark:bg-white text-black shadow-md rounded-lg transition-transform transform hover:scale-105"
            >
              <CardContent>
                <span className="text-3xl font-semibold aspect-square flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="mt-4 text-lg font-medium">Game Title</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  <Badge>RPG</Badge>
                  <Badge>Platformer</Badge>
                  <Badge>Action</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
