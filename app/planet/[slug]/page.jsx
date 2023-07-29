export default function Page({ params }) {
  console.log(params);

  return <div>Dashboard : {params.slug}</div>;
}

export async function generateStaticParams() {
  const planets = await fetch().then((res) => res.json());

  return planets.map((planet) => ({
    slug: planet.name.toLowercase(),
  }));
}
