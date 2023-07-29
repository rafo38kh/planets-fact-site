import Image from "next/image";
import { getPlanet } from "../../../lib/getData";

export default async function Page({ params }) {
  const planets = await getPlanet();
  const currentPlanet = planets
    .filter((planet) => planet.name.toLowerCase() === params.slug)
    ?.at(0);

  console.log(currentPlanet);

  return (
    <div>
      <div>
        <Image
          src={currentPlanet.images.planet.slice(1)}
          width={200}
          height={200}
          alt={currentPlanet.name}
        />
        <div>
          <span>{currentPlanet.name}</span>
          <p>{currentPlanet.overview.content}</p>
          <p>source{currentPlanet.overview.source}</p>
        </div>
      </div>
      {/* {planets?.map((el) => el.name)} */}
      <div>
        <div>
          <span>ROTATION TIME</span> <span>{currentPlanet.rotation}</span>
        </div>
        <div>
          <span>REVOLUTION TIME</span> <span>{currentPlanet.revolution}</span>
        </div>
        <div>
          <span>radius</span> <span>{currentPlanet.radius}</span>
        </div>
        <div>
          <span>AVERAGE TEMP.</span> <span>{currentPlanet.temperature}</span>
        </div>
      </div>
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
