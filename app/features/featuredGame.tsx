import ReusableCarousel from "@/components/reusable/reusablecarousel";

const games = [
  {
    title: "Elden Ring",
    tags: ["RPG", "Open World", "Action"],
    description:
      "Battle your way through the Lands Between in this stunning dark fantasy world by FromSoftware.",
  },
  {
    title: "Hollow Knight",
    tags: ["Platformer", "Metroidvania", "Indie"],
    description:
      "Explore a hauntingly beautiful underground kingdom filled with bugs, mystery, and challenge.",
  },
  {
    title: "Stardew Valley",
    tags: ["Simulation", "Farming", "Indie"],
    description:
      "Build your dream farm, make friends, and explore the charming world of Pelican Town.",
  },
  {
    title: "Cyberpunk 2077",
    tags: ["RPG", "Open World", "Action"],
    description:
      "Dive into the neon-lit streets of Night City in this ambitious open-world RPG.",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    tags: ["RPG", "Open World", "Fantasy"],
    description:
      "Embark on an epic journey as Geralt of Rivia in this critically acclaimed RPG.",
  },
  {
    title: "Celeste",
    tags: ["Platformer", "Indie", "Challenging"],
    description:
      "Climb the treacherous mountain of Celeste in this beautifully crafted platformer.",
  },
  {
    title: "DOOM Eternal",
    tags: ["FPS", "Action", "Shooter"],
    description:
      "Rip and tear through hordes of demons in this fast-paced first-person shooter.",
  },
  {
    title: "Hades",
    tags: ["Rogue-like", "Action", "Indie"],
    description:
      "Battle your way out of the Underworld in this critically acclaimed rogue-like dungeon crawler.",
  },
];

export default function FeaturedGame() {
  return <ReusableCarousel games={games} title="Featured Games"  />;
}
