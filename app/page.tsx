
import Hero from "@/components/heroSection/hero";
import FeaturedGame from "./features/featuredGame";

// app/page.tsx   This is the main entry point for the Next.js application.
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGame /> 
    </>
  );
}
