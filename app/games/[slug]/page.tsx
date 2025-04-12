// app/game/[slug]/page.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function GameDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const game = {
    title: "Super Mario Bros.",
    slug: params.slug,
    description:
      "Super mario is a platform game developed by Nintendo. It is the first game in the Super Mario series and was released in 1985 for the Nintendo Entertainment System (NES). The game follows Mario, a plumber, as he travels through the Mushroom Kingdom to rescue Princess Toadstool from Bowser, the main antagonist.",
    genres: ["RPG", "Fantasy", "Adventure"],
    rating: 4.7,
    banner:
      "https://miro.medium.com/v2/resize:fit:2000/1*NIMNMFbIjby9aLcpZNYdhw.jpeg",
    cover:
      "https://m.media-amazon.com/images/M/MV5BYTZkZmEyNGItZDY0ZS00ZDYwLThiYTEtZjYzMzgzOTk0ZDI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "March 2025",
    developer: "Lunar Forge Studios",
    platform: ["PC", "PlayStation", "Xbox"],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 dark:text-white">
      <div
        className="h-64 md:h-96 bg-cover bg-center rounded-2xl shadow-lg"
        style={{ backgroundImage: `url(${game.banner})` }}
      />

      <div className="mt-6 grid md:grid-cols-4 gap-6">
        {/* Cover Image */}
        <div className="md:col-span-1">
          <img
            src={game.cover}
            alt={game.title}
            className="rounded-2xl shadow-md w-full"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-3 space-y-4">
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-lg font-medium">{game.rating}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {game.genres.map((genre, index) => (
              <Badge key={index}>{genre}</Badge>
            ))}
          </div>

          <p>{game.description}</p>

          <Card className="mt-4">
            <CardContent className="p-4 text-sm space-y-1">
              <div>
                <strong>Developer:</strong> {game.developer}
              </div>
              <div>
                <strong>Release Date:</strong> {game.releaseDate}
              </div>
              <div>
                <strong>Platform:</strong> {game.platform.join(", ")}
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
