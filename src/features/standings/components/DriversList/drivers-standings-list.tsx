"use client";

import { F1LightsLoader } from "@/components/Loader";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useDriversStandings } from "@/features/standings/api/useDriversStandings";
import { useGetDriverImage } from "@/hooks/useGetDriverImage";
import { getTeamColor } from "@/utils/getConstructorColor";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
    permanentNumber: string;
    code: string;
  };
  Constructors: Constructor[];
  position: string;
  points: string;
}

type DriverCardProps = {
  driver: Driver;
  bgColor: string;
  position: number;
};

export const DriverCard = ({ driver, bgColor, position }: DriverCardProps) => {
  const { imageUrl, isLoading: imageLoading, error: imageError, } = useGetDriverImage({ firstName: driver.Driver.givenName, lastName: driver.Driver.familyName, });

  const cardRef = useRef<HTMLLIElement>(null);
  const stripeRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const pointsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .to(
        stripeRef.current,
        {
          width: "8px",
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        avatarRef.current,
        {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0
      )
      .to(
        nameRef.current,
        {
          x: 3,
          duration: 0.2,
          ease: "power1.out",
        },
        0
      )
      .to(
        pointsRef.current,
        {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        cardRef.current,
        {
          y: -5,
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );

    const card = cardRef.current;

    const onEnter = () => hoverTl.play();
    const onLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      hoverTl.kill();
    };
  }, []);

  return (
    <li
      ref={cardRef}
      key={driver.Driver.driverId}
      className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-lg dark:border-gray-800"
    >
      <Link href={`/driver/${driver.Driver.driverId}`}>
        <div
          ref={stripeRef}
          className="absolute left-0 top-0 h-full w-2"
          style={{ backgroundColor: bgColor }}
        />

        <div className="flex items-center gap-4 p-6 pl-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="font-f1-wide text-2xl font-bold">
              {driver.position ? driver.position : position}
            </span>
          </div>

          <div ref={avatarRef} className="relative">
            {imageLoading ? (
              <Avatar
                className="h-20 w-20 border-2 shadow-md"
                style={{ borderColor: bgColor }}
              >
                <AvatarImage
                  src={"/images/stig.png"}
                  alt={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
                  className="object-cover"
                />
              </Avatar>
            ) : imageError ? (
              <Avatar
                className="h-20 w-20 border-2 shadow-md"
                style={{ borderColor: bgColor }}
              >
                <AvatarImage
                  src={"/images/stig.png"}
                  alt={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
                  className="object-cover"
                />
              </Avatar>
            ) : (
              <Avatar
                className="h-20 w-20 border-2 shadow-md"
                style={{ borderColor: bgColor }}
              >
                <AvatarImage
                  src={imageUrl || "/images/stig.png"}
                  alt={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
                  className="object-cover"
                />
              </Avatar>
            )}

            {/* Driver number badge */}
            {driver.Driver.permanentNumber && (
              <div
                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: bgColor }}
              >
                <span className="text-sm">
                  {driver.Driver.permanentNumber === "33"
                    ? "1"
                    : driver.Driver.permanentNumber}
                </span>
              </div>
            )}
          </div>

          {/* Driver info */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2
                ref={nameRef}
                className="font-f1-wide text-xl font-bold tracking-wide"
              >
                {driver.Driver.givenName}{" "}
                <span style={{ color: bgColor }}>
                  {driver.Driver.familyName}
                </span>
              </h2>
              {driver.Driver.code && (
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-bold dark:bg-gray-800">
                  {driver.Driver.code}
                </span>
              )}
            </div>

            {/* Team info */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {driver.Constructors.map((constructor) => (
                <span
                  key={constructor.constructorId}
                  className="flex items-center"
                >
                  <span
                    className="mr-1.5 inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: bgColor }}
                  />
                  {constructor.name}
                </span>
              ))}
            </div>
          </div>

          {/* Points */}
          <div className="ml-auto flex flex-col items-end">
            <span className="text-sm font-medium text-gray-500">POINTS</span>
            <p className="flex items-baseline" style={{ color: bgColor }}>
              <span
                ref={pointsRef}
                className="font-f1-black text-4xl font-black"
              >
                {driver.points}
              </span>
              <span className="ml-1 text-sm">PTS</span>
            </p>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full" style={{ backgroundColor: bgColor }} />
      </Link>
    </li>
  );
};

export default function DriverList({ year }: { year: number }) {
  const {
    drivers,
    error: driversError,
    isLoading: driversLoading,
  } = useDriversStandings(year);

  const cardsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (cardsRef.current && drivers?.length) {
      // Clear any existing animations
      gsap.killTweensOf(cardsRef.current.children);

      // Initial state - all cards are invisible and offset
      gsap.set(cardsRef.current.children, {
        opacity: 0,
        x: -100,
        clearProps: "transform", // Clear any previous transforms
      });

      // Animate cards in with stagger
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          onComplete: () => {
            if (cardsRef.current) {
              gsap.set(cardsRef.current.children, { clearProps: "transform" });
            }
          },
        }
      );
    }
  }, [drivers]);

  if (driversError) return <p>Error: {driversError}</p>;
  if (driversLoading) return <F1LightsLoader />;

  return (
    <ul ref={cardsRef} className="grid grid-cols-1 gap-4">
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
