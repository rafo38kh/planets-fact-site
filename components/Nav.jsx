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
    <div className="flex items-center justify-between w-full px-6 py-4 relative">
      <span className="uppercase text-[1.75rem]">the planets</span>
      <button onClick={() => setIsNavOpen((prevState) => !prevState)}>
        <Image alt="burger" src={burger} height={17} width={24} />
      </button>

      {isNavOpen && (
        <ul className="absolute w-full z-40 inset-0 h-[calc(100vh-68px)] bg-slate-100 mt-16 overflow-hidden">
          {planets.map((planet) => (
            <li key={planet} onClick={() => setIsNavOpen(false)}>
              {<Link href={`/planet/${planet.toLowerCase()}`}>{planet}</Link>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
