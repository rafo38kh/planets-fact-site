import Image from "next/image";
import { getPlanet } from "../../../lib/getData";

export default async function Page({ params }) {
  // console.log(planets[0].name);

  const planets = await getPlanet();
  const currentPlanet = planets.filter(
    (planet) => planet.name.toLowerCase() === params.slug
  );

  console.log(currentPlanet);

  return (
    <div>
      <div>
        <Image src="/assets/planet-mercury.svg" width={200} height={200} />
      </div>
      {planets?.map((el) => el.name)}
    </div>
  );
}

export async function generateStaticParams() {
  const planets = await fetch(
    "https://raw.githubusercontent.com/rafo38kh/planets-fact-site/main/public/data.json"
  ).then((res) => res.json());

  return planets.map((planet) => ({
    slug: planet.name.toLowerCase(),
  }));
}
