import FeaturedGame from "@/components/features/Featuredgame";
import Hero from "@/components/heroSection/hero";

// app/page.tsx   This is the main entry point for the Next.js application.
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGame />
    </>
  );
}
