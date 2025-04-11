// components/grid-section.tsx

import { Card, CardContent } from "@/components/ui/card";
import { BackgroundPattern } from "@/components/heroSection/background-pattern";
import Image from "next/image";

interface GridItem {
  name: string;
  logo: string;
  link: string;
}

interface GridSectionProps {
  title: string;
  tagline: string;
  items: GridItem[];
}

export default function PageSection({
  title,
  tagline,
  items,
}: GridSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <BackgroundPattern />
      <div className="relative z-10 text-center max-w-2xl mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-lg text-center mb-10">{tagline}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Card className="flex items-center justify-center p-4 h-40 shadow-md">
                <CardContent className="flex flex-col items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <span className="text-center font-medium">{item.name}</span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
