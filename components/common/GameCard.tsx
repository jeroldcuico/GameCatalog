import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Gamepad } from "lucide-react";

import { CatalogItem } from "@/lib/types";

type GameCardProps = {
  items: CatalogItem[];
  heading: string;
  tagline: string;
};

export default function GameCard({ items, heading, tagline }: GameCardProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-2xl mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">{heading}</h2>
        <p className="text-lg text-center mb-10">{tagline}</p>
      </div>
      <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {items?.map((item) => (
          <Card className="max-w-2xl rounded-md shadow-lg" key={item.id}>
            <CardHeader className="relative">
              {/* Background Image */}
              <div className="w-full h-48 relative">
                <Image
                  src={item.image_background || "/default-image.jpg"}
                  alt={item.name}
                  layout="fill"
                  sizes="60"
                  objectFit="cover"
                />
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center items-center gap-3">
                <span className="font-semibold flex flex-wrap gap-2">
                  <Badge variant="destructive" className="text-xs">
                    {item.games_count} Games
                  </Badge>
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link
                href={`/games/category/${item.id}`}
                className="gap-2 inline-flex items-center justify-center rounded-sm bg-slate-500 text-white px-4 py-2 text-[12px] font-medium hover:bg-slate-600 transition duration-200"
              >
                <Gamepad className="!h-5 !w-5" /> Game List
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
