import PageSection from "@/components/reusable/reusablepage";

const genres = [
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
  return (
    <>
      <PageSection title="Genres" tagline="Explore a variety of game genres to find your next adventure." items={genres} />
    </>
  );
}
