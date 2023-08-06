"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import chevron from "../public/assets/icon-chevron.svg";
import burger from "../public/assets/icon-hamburger.svg";

export default function Nav() {
  const pathname = usePathname().split("/").at(-1);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const planets = [
    { name: "Mercury", color: "#DEF4FC" },
    { name: "Venus", color: "#F7CC7F" },
    { name: "Earth", color: "#545BFE" },
    { name: "Mars", color: "#FF6A45" },
    { name: "Jupiter", color: "#ECAD7A" },
    { name: "Saturn", color: "#FCCB6B" },
    { name: "Uranus", color: "#65F0D5" },
    { name: "Neptune", color: "#497EFA" },
  ];
  return (
    <div className="  flex w-full items-center justify-between px-6 py-4 pb-7 md:flex-col  md:border-b lg:flex-row">
      <span className="text-[1.75rem] uppercase md:mb-10 lg:m-0">
        the planets
      </span>

      <ul className="hidden w-full md:flex md:justify-between lg:flex lg:w-1/2 lg:justify-between">
        {planets.map((planet) => (
          <li
            style={{
              borderTop: `2px solid ${
                pathname === planet.name.toLowerCase()
                  ? planet.color
                  : "transparent"
              }`,
            }}
            className="rounded-sm font-spartan text-base font-bold uppercase md:py-0"
            key={planet.name}
          >
            {
              <Link href={`/planet/${planet.name.toLowerCase()}`}>
                {planet.name}
              </Link>
            }
          </li>
        ))}
      </ul>

      <button
        className="md:hidden"
        onClick={() => setIsNavOpen((prevState) => !prevState)}
      >
        <Image alt="burger" src={burger} height={17} width={24} />
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg> */}
      </button>

      {isNavOpen && (
        <ul className="absolute inset-0 z-40 mt-16 h-[calc(100vh-68px)] w-full overflow-hidden bg-background px-6 md:hidden">
          {planets.map((planet) => (
            <li
              key={planet.name}
              className="flex items-center justify-between border-b border-solid border-darkSilver last:border-b-0"
            >
              <div className="flex items-center justify-center gap-6">
                <div
                  style={{ background: planet.color }}
                  className={`h-6 w-6 rounded-full`}
                />

                <div
                  className="py-5 font-spartan text-xl font-bold uppercase "
                  onClick={() => setIsNavOpen(false)}
                >
                  {
                    <Link href={`/planet/${planet.name.toLowerCase()}`}>
                      {planet.name}
                    </Link>
                  }
                </div>
              </div>
              <Image src={chevron} alt="chevron" height={5} width={5} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
