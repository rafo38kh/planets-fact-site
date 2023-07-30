"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Planet({ currentPlanet }) {
  const tabs = ["Overview", "Structure", "Surface"];
  const [tabName, setTabName] = useState(tabs[0]);

  console.log(tabName);

  function getImage() {
    if (tabName === "Overview") {
      return (
        <Image
          src={currentPlanet.images.planet.slice(1)}
          width={200}
          height={200}
          alt={currentPlanet.name}
        />
      );
    } else if (tabName === "Structure") {
      return (
        <Image
          src={currentPlanet.images.internal.slice(1)}
          width={200}
          height={200}
          alt={currentPlanet.name}
        />
      );
    } else {
      return (
        <>
          <Image
            src={currentPlanet.images.planet.slice(1)}
            width={200}
            height={200}
            alt={currentPlanet.name}
          />
          <Image
            src={currentPlanet.images.geology.slice(1)}
            width={120}
            height={120}
            alt={currentPlanet.name}
            className="absolute -bottom-16 "
          />
        </>
      );
    }
  }

  console.log(currentPlanet.color);

  return (
    <div>
      <ul className="flex flex-row justify-between items-center px-10">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              className={`focus:border-b-4 border-[${currentPlanet.color}]`}
              onClick={() => setTabName(tab)}
              type="button"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <div className="relative flex items-center justify-center ">
          {getImage()}
        </div>
        <div>
          <span>{currentPlanet.name}</span>
          <p>
            {tabName === "Overview"
              ? currentPlanet.overview.content
              : tabName === "Structure"
              ? currentPlanet.structure.content
              : currentPlanet.geology.content}
          </p>
          <p>
            source :
            {tabName === "Overview" ? (
              <Link href={currentPlanet.overview.source}>Wikipedia</Link>
            ) : tabName === "Structure" ? (
              <Link href={currentPlanet.structure.source}>Wikipedia</Link>
            ) : (
              <Link href={currentPlanet.geology.source}>Wikipedia</Link>
            )}
          </p>
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
