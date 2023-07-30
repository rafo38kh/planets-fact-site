import { getPlanet } from "@/lib/getData";
import Planet from "@/components/Planet";

export default async function Page({ params }) {
  const planets = await getPlanet();
  const currentPlanet = planets
    .filter((planet) => planet.name.toLowerCase() === params.slug)
    ?.at(0);

  return <Planet currentPlanet={currentPlanet} />;
}

export async function generateStaticParams() {
  const planets = await fetch(
    "https://raw.githubusercontent.com/rafo38kh/planets-fact-site/main/public/data.json",
    { cache: "no-store" }
  ).then((res) => res.json());

  return planets.map((planet) => ({
    slug: planet.name.toLowerCase(),
  }));
}
