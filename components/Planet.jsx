"use client";
import { useState } from "react";
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
          width={300}
          height={300}
          alt={currentPlanet.name}
          className="w-2/3"
        />
      );
    } else if (tabName === "Structure") {
      return (
        <Image
          src={currentPlanet.images.internal}
          width={300}
          height={300}
          alt={currentPlanet.name}
          className="w-2/3"
        />
      );
    } else {
      return (
        <>
          <Image
            src={currentPlanet.images.planet}
            width={300}
            height={300}
            alt={currentPlanet.name}
            className="w-2/3"
          />
          <Image
            src={currentPlanet.images.geology}
            width={150}
            height={150}
            alt={currentPlanet.name}
            className="absolute -bottom-16 "
          />
        </>
      );
    }
  }

  return (
    <div className="md:px-6 lg:px-40">
      <ul className="flex flex-row items-center justify-between border-y border-border px-6 pt-5 uppercase md:hidden">
        <TabButtons
          tabs={tabs}
          tabName={tabName}
          setTabName={setTabName}
          color={currentPlanet.color}
        />
      </ul>

      <div className="md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-x-16 lg:gap-0 lg:py-20">
        <div className="relative col-span-2 my-24 flex items-center justify-center p-6 lg:col-span-1 lg:row-span-2 lg:m-0">
          {getImage()}
        </div>
        <div className="px-6 text-center md:p-0 md:text-left lg:max-w-xs lg:justify-self-end">
          <span className="font-antonio text-4xl uppercase lg:text-[80px]">
            {currentPlanet.name}
          </span>
          <p className="mb-8 mt-4  font-spartan text-xs leading-5 lg:text-sm">
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

        <ul className="hidden w-full flex-row items-center justify-between px-10 md:flex md:flex-col md:p-0 lg:max-w-xs lg:justify-self-end">
          <TabButtons
            tabs={tabs}
            tabName={tabName}
            setTabName={setTabName}
            color={currentPlanet.color}
          />
        </ul>
      </div>
      <div className="mb-10 mt-7 grid gap-4 px-6 md:grid-cols-4 md:p-0">
        <InfoBox title="Rotation Time" info={currentPlanet.rotation} />
        <InfoBox title="Revolution Time" info={currentPlanet.revolution} />
        <InfoBox title="Radius" info={currentPlanet.radius} />
        <InfoBox title="Average temp." info={currentPlanet.temperature} />
      </div>
    </div>
  );
}
