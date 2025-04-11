import PageSection from "@/components/reusable/reusablepage";

const platforms = [
  {
    name: "Steam",
    logo: "/images/platforms/steam.png",
    link: "https://store.steampowered.com/",
  },
  {
    name: "Epic Games",
    logo: "/images/platforms/epic.png",
    link: "https://www.epicgames.com/store/",
  },
  {
    name: "Xbox",
    logo: "/images/platforms/xbox.png",
    link: "https://www.xbox.com/",
  },
  {
    name: "PlayStation",
    logo: "/images/platforms/playstation.png",
    link: "https://www.playstation.com/",
  },
];

export default function PlatformsPage() {
  return (
    <PageSection
      title="Available Platforms"
      items={platforms}
      tagline="Explore a variety of platforms to find your next adventure."
    />
  );
}
