"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { getPlanet } from "../lib/getData";

import burger from "../public/assets/icon-hamburger.svg";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  return (
    <div className="flex items-center justify-between w-full px-8 py-4 relative">
      <span className="uppercase">the planets</span>
      <button onClick={() => setIsNavOpen((prevState) => !prevState)}>
        <Image alt="burger" src={burger} height={30} width={30} />
      </button>

      {isNavOpen && (
        <ul className="">
          {planets.map((planet) => (
            <li key={planet}>
              {<Link href={`/planet/${planet.toLowerCase()}`}>{planet}</Link>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
