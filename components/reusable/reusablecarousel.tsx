'use client'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"

interface Game {
  title: string
  tags: string[]
  description: string
}

interface FeaturedCarouselProps {
  title: string
  games: Game[]
}

export default function ReusableCarousel({ title, games }: FeaturedCarouselProps) {
  return (
    <section className="flex flex-col items-center justify-center px-6 mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-center mt-10">
        {title}
      </h1>

      <div className="w-full mt-6 flex justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {games.map((game, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Card className="w-[1200px] rounded-none">
                  <CardContent className="p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                    <div className="mt-4 text-lg font-medium">{game.title}</div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {game.tags.map((tag, i) => (
                        <Badge key={i}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-gray-500 dark:text-green-100">
                      {game.description}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
