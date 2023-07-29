"use client";
import { useState } from "react";
import Image from "next/image";

import burger from "../public/assets/icon-hamburger.svg";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  return (
    <div className="flex items-center justify-between w-full px-8 py-4 relative">
      <span className="uppercase">the planets</span>
      <button onClick={() => setIsNavOpen((prevState) => !prevState)}>
        <Image alt="burger" src={burger} height={30} width={30} />
      </button>

      {isNavOpen && (
        <ul className="absolute">
          {planets.map((planet) => (
            <li key={planet}>{planet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
