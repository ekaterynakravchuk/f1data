"use client";

import { useConstructorsStandings } from "@/hooks/useConstructorsStandings";
import { ConstructorStanding } from "@/types/types";
import { getTeamColor } from "@/utils/getConstructorColor";
import { getCountryFlag } from "@/utils/getCountryFlag";
import { getTeamSmallLogos } from "@/utils/getTeamLogos";
import Image from "next/image";
import { F1LightsLoader } from "../Loader";

const ConstructorCard = ({
  constructor,
  bgColor,
  position,
  flagUrl,
  code,
  logo
}: {
  constructor: ConstructorStanding;
  bgColor: string;
  position: number;
  flagUrl?: string;
  code?: string;
  logo?: string
}) => {
  return (
    <li
      key={constructor.Constructor.constructorId}
      className="p-4 border rounded-lg flex items-center gap-4 relative overflow-hidden"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: bgColor,
          opacity: 0.4,
          zIndex: -1
        }}
      />
      <span className="font-f1-wide text-2xl">
        {constructor.position ? constructor.position : position}
      </span>
      {logo && (
        <Image
          src={logo}
          alt={constructor.Constructor.name}
          width={40}
          height={40}
        />
      )}
      <div className="font-semibold flex items-end gap-2">
        <h2 className="text-3xl">{constructor.Constructor.name}</h2>
        <p className="text-sm text-gray-500 flex items-center">
          {flagUrl && (
            <Image
              src={flagUrl}
              alt={code || ""}
              className="w-6 h-6 mr-2"
              width={20}
              height={20}
            />
          )}
        </p>
      </div>
      <p className="ml-auto">
        <span className="font-f1-black text-6xl">{constructor.points}</span> pts
      </p>
    </li>
  );
};

export default function ConstructorsList({ year }: { year: number }) {
  const {
    constructors,
    error: driversError,
    isLoading: driversLoading,
  } = useConstructorsStandings(year);

  if (driversError) return <p>Error: {driversError}</p>;
  if (driversLoading) return <F1LightsLoader />;

  return (
    <ul className="grid grid-cols-1 gap-4">
      {constructors.map((constructor, index) => {
        const mainConstructor = constructor.Constructor.name || "";
        const bgColor = getTeamColor(mainConstructor);
        const { code, flagUrl } = getCountryFlag(constructor.Constructor.nationality);
        const logo = getTeamSmallLogos(mainConstructor);
        return (
          <ConstructorCard
            key={constructor.Constructor.constructorId}
            constructor={constructor}
            bgColor={bgColor}
            position={index + 1}
            flagUrl={flagUrl}
            code={code}
            logo={logo}
          />
        );
      })}
    </ul>
  );
}
