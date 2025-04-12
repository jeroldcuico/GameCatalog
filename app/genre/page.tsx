"use client";
import PageSection from "@/components/reusable/reusablepage";
import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
  slug: string;
};
const API_KEY = process.env.RAWG_API_KEY;
const genrelist = [
  {
    name: "Action",
    logo: "/images/genres/action.png",
    link: "https://www.igdb.com/games?genres=action",
  },
  {
    name: "Adventure",
    logo: "/images/genres/adventure.png",
    link: "https://www.igdb.com/games?genres=adventure",
  },
  {
    name: "Role-Playing",
    logo: "/images/genres/rpg.png",
    link: "https://www.igdb.com/games?genres=rpg",
  },
  {
    name: "Simulation",
    logo: "/images/genres/simulation.png",
    link: "https://www.igdb.com/games?genres=simulation",
  },
  {
    name: "Strategy",
    logo: "/images/genres/strategy.png",
    link: "https://www.igdb.com/games?genres=strategy",
  },
  {
    name: "Sports",
    logo: "/images/genres/sports.png",
    link: "https://www.igdb.com/games?genres=sports",
  },
  {
    name: "Puzzle",
    logo: "/images/genres/puzzle.png",
    link: "https://www.igdb.com/games?genres=puzzle",
  },
  {
    name: "Horror",
    logo: "/images/genres/horror.png",
    link: "https://www.igdb.com/games?genres=horror",
  },
];

export default function page() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGenres(data.results))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  console.log(genres);
  return (
    <>
      <PageSection
        title="Genres"
        tagline="Explore a variety of game genres to find your next adventure."
        items={genrelist}
      />
    </>
  );
}
