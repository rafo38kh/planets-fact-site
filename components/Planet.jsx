"use client";
import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";

import InfoBox from "./InfoBox";
import TabButtons from "./TabButtons";

import source from "../public/assets/icon-source.svg";

export default function Planet({ currentPlanet }) {
  const tabs = ["Overview", "Structure", "Surface"];
  const [tabName, setTabName] = useState(tabs[0]);

  function getWikiLink(tabName) {
    if (tabName === "Overview") {
      return currentPlanet.overview.source;
    } else if (tabName === "Structure") {
      return currentPlanet.structure.source;
    } else {
      return currentPlanet.geology.source;
    }
  }

  function getImage() {
    if (tabName === "Overview") {
      return (
        <Image
          src={currentPlanet.images.planet}
          width={200}
          height={200}
          alt={currentPlanet.name}
        />
      );
    } else if (tabName === "Structure") {
      return (
        <Image
          src={currentPlanet.images.internal}
          width={200}
          height={200}
          alt={currentPlanet.name}
        />
      );
    } else {
      return (
        <>
          <Image
            src={currentPlanet.images.planet}
            width={200}
            height={200}
            alt={currentPlanet.name}
          />
          <Image
            src={currentPlanet.images.geology}
            width={120}
            height={120}
            alt={currentPlanet.name}
            className="absolute -bottom-16 "
          />
        </>
      );
    }
  }

  return (
    <div className="md:px-6 lg:px-40">
      <ul className="flex flex-row justify-between items-center uppercase md:hidden border-y border-border px-6 pt-5">
        <TabButtons
          tabs={tabs}
          tabName={tabName}
          setTabName={setTabName}
          color={currentPlanet.color}
        />
      </ul>

      <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:items-center md:justify-center md:gap-x-16 file:lg:gap-0 lg:py-20 ">
        <div className="relative flex items-center justify-center col-span-2 my-24 lg:col-span-1  lg:row-span-2 lg:m-0">
          {getImage()}
        </div>
        <div className="text-center px-6 md:p-0 md:text-left lg:max-w-xs ">
          <span className="text-4xl uppercase font-antonio lg:text-[80px]">
            {currentPlanet.name}
          </span>
          <p className="font-spartan text-xs  lg:text-sm leading-5 mt-4 mb-8">
            {tabName === "Overview"
              ? currentPlanet.overview.content
              : tabName === "Structure"
              ? currentPlanet.structure.content
              : currentPlanet.geology.content}
          </p>
          <div className="flex items-center justify-center font-spartan text-xs opacity-50 md:justify-start lg:text-sm">
            <span>"source : "</span>
            <div className="flex items-center justify-center gap-1">
              <a
                target="_blank"
                href={getWikiLink(tabName)}
                className="font-bold leading-6 underline"
              >
                Wikipedia
              </a>
              <Image src={source} alt="source" height={10} width={10} />
            </div>
          </div>
        </div>

        <ul className="hidden md:flex flex-row justify-between items-center px-10 md:flex-col md:p-0 lg:max-w-xs">
          <TabButtons
            tabs={tabs}
            tabName={tabName}
            setTabName={setTabName}
            color={currentPlanet.color}
          />
        </ul>
      </div>
      <div className="px-6 grid gap-4 mt-7 mb-10 md:grid-flow-col lg:p-0">
        <InfoBox title="Rotation Time" info={currentPlanet.rotation} />
        <InfoBox title="Revolution Time" info={currentPlanet.revolution} />
        <InfoBox title="Radius" info={currentPlanet.radius} />
        <InfoBox title="Average temp." info={currentPlanet.temperature} />
      </div>
    </div>
  );
}
