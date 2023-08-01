export async function getPlanet() {
  const planets = await fetch(
    "https://raw.githubusercontent.com/rafo38kh/planets-fact-site/main/public/data.json"
  ).then((res) => res.json());

  return planets;
}
