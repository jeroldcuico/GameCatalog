"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import type { VapourGames } from "@/lib/types";
import Image from "next/image";
import { formatDateToLong } from "@/lib/utils";
import Link from "next/link";

interface FeaturedCarouselProps {
  games?: VapourGames[];
}

export default function ReusableCarousel({ games }: FeaturedCarouselProps) {
  console.log(games);

  return (
    <section className="flex flex-col items-center justify-center px-6 mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">FEATURED GAMES</h1>
      <div className="w-full flex justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {games?.map((game, index) => (
              <CarouselItem key={index} className="flex justify-center gap-3">
                <Card className="w-[1200px] rounded-none">
                  <CardContent className="flex gap-5 flex-col md:flex-row">
                    <div>
                      <Link href={`/games/${game.slug}`}>
                        <Image
                          src={game.background_image}
                          width={500}
                          height={150}
                          alt={game.name}
                        />
                      </Link>
                    </div>
                    <div>
                      <div className="mt-4 text-lg font-medium">
                        {game.name}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <b>Platform: </b>
                        {game.platforms?.map(({ platform }, i) => (
                          <Badge variant={"destructive"} key={i}>
                            {platform?.name}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <b>Genres: </b>
                        {game.genres?.map(({ name, slug, id }, i) => (
                          <Badge key={i}>{name}</Badge>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-gray-500 dark:text-green-100">
                        <b>Updated {formatDateToLong(game.updated || "")}</b>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
