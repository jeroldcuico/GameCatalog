// app/developers/page.tsx

import PageSection from "@/components/reusable/reusablepage"
const developers = [
  {
    name: "FromSoftware",
    logo: "/images/developers/fromsoftware.png",
    link: "https://www.fromsoftware.jp/",
  },
  {
    name: "CD Projekt Red",
    logo: "/images/developers/cdpr.png",
    link: "https://en.cdprojektred.com/",
  },
]

export default function DevelopersPage() {
  return <PageSection title="Top Developers" items={developers} tagline="Discover the masterminds behind your favorite games." />
}
