"use client";

import { useDrivers } from "@/hooks/useDriversStandings";
import { useGetDriverImage } from "@/hooks/useGetDriverImage";
import { getTeamColor } from "@/utils/getConstructorColor";
import { Loader2 } from "lucide-react";
import { F1LightsLoader } from "../Loader";
import { Avatar, AvatarImage } from "../ui/avatar";

interface Constructor {
  constructorId: string;
  name: string;
}

interface Driver {
  Driver: {
    driverId: string;
    givenName: string;
    familyName: string;
    nationality: string;
  };
  Constructors: Constructor[];
  position: string;
  points: string;
}

const DriverCard = ({
  driver,
  bgColor,
  position,
}: {
  driver: Driver;
  bgColor: string;
  position: number;
}) => {
  const {
    imageUrl,
    isLoading: imageLoading,
    error: imageError,
  } = useGetDriverImage({
    firstName: driver.Driver.givenName,
    lastName: driver.Driver.familyName,
  });

  return (
    <li
      key={driver.Driver.driverId}
      className="p-4 border rounded-lg flex items-center gap-4"
    >
      <span className="font-f1-wide text-2xl">
        {driver.position ? driver.position : position}
      </span>
      {imageLoading ? (
        <Loader2 className="animate-spin w-16" />
      ) : imageError ? (
        <p>Error: {imageError}</p>
      ) : (
        <Avatar className="shrink-0 w-16 h-16">
          <AvatarImage
            src={imageUrl || "/images/stig.png"}
            alt={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
            className="object-cover"
          />
        </Avatar>
      )}
      <div className="font-semibold flex flex-col gap-2">
        <h2 className="text-3xl">
          {driver.Driver.givenName} {driver.Driver.familyName}
        </h2>
        {driver.Constructors.map((constructor) => (
          <span key={constructor.constructorId}>{constructor.name}</span>
        ))}
      </div>
      <p className="ml-auto" style={{ color: bgColor }}>
        <span className="font-f1-black text-6xl">{driver.points}</span> points
      </p>
    </li>
  );
};

export default function DriverList({ year }: { year: number }) {
  const {
    drivers,
    error: driversError,
    isLoading: driversLoading,
  } = useDrivers(year);

  if (driversError) return <p>Error: {driversError}</p>;
  if (driversLoading) return <F1LightsLoader />;

  return (
    <ul className="grid grid-cols-1 gap-4">
      {drivers.map((driver, index) => {
        const mainConstructor = driver.Constructors[0]?.name || "";
        const bgColor = getTeamColor(mainConstructor);
        return (
          <DriverCard
            key={driver.Driver.driverId}
            driver={driver}
            bgColor={bgColor}
            position={index + 1}
          />
        );
      })}
    </ul>
  );
}
