import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Gamepad2Icon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type { VapourGames } from "@/lib/types";
interface GameListProps {
  games: VapourGames[];
  category?: string;
}


export default function GameList({ games , category }: GameListProps) {
  return (
    <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
      {games?.map((game, id) => (
        <Card className="max-w-2xl rounded-md shadow-lg" key={id}>
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
              <span className="font-semibold">Released: {game.released || "No exact date"}</span>
              <span className="font-semibold flex flex-wrap gap-2">
                Genre:{" "}
                {game.genres?.map((g) => (
                  <Badge key={g.id}>{g.name}</Badge>
                )) || "No Genre"}
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
  );
}
