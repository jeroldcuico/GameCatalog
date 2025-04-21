"use client";
import { useFetch } from "@/hooks/useFetch";
import GameCard from "@/components/common/GameCard";
import GameSkeleton from "@/components/common/GameSkeleton";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();
  const { data, loading, error } = useFetch<{ results: [] }>(
    `/api/categories/${slug}`
  );
  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;
  const heading =
    typeof slug === "string"
      ? slug.charAt(0).toUpperCase() + slug.slice(1)
      : "";
  let tagline = "";
  switch (slug) {
    case "developers":
      tagline = "Crafting worlds, shaping experiences."
      break;
      case "genres":
        tagline = "Discover your next adventure in every genre."
      break;
    case "publishers":
      tagline = "Bringing games to life, one title at a time."
      break;
    case "platforms":
      tagline = "Where gaming meets innovation."
      break;
    case "stores":
      tagline = "Your gateway to gaming treasures."
      break;
    case "tags":
      tagline = "Explore the world of gaming through tags."
      break;
    default:
      break;
  }
  const items = data?.results || [];
  const slugProp = typeof slug === "string" ? slug : "" 

  console.log(items);
  

  return <GameCard items={items} {...{ heading, tagline, slug: slugProp }} />;
}
