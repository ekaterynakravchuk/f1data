"use client";

import { F1LightsLoader } from "@/components/Loader";
import { useConstructorsStandings } from "@/features/standings/api/useConstructorsStandings";
import { ConstructorStanding } from "@/types/types";
import { getTeamColor } from "@/utils/getConstructorColor";
import { getCountryFlag } from "@/utils/getCountryFlag";
import { getTeamSmallLogos } from "@/utils/getTeamLogos";
import gsap from "gsap";
import { ChevronRight, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type ConstructorCardProps = {
  constructor: ConstructorStanding;
  bgColor: string;
  position: number;
  flagUrl?: string;
  code?: string;
  logo?: string;
};

export const ConstructorCard = ({
  constructor,
  bgColor,
  position,
  flagUrl,
  code,
  logo,
}: ConstructorCardProps) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .to(
        bgRef.current,
        {
          opacity: 0.2,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .to(
        positionRef.current,
        {
          scale: 1.1,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0
      )
      .to(
        pointsRef.current,
        {
          scale: 1.05,
          y: -3,
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

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      hoverTl.kill();
    };
  }, []);
  return (
    <li
      ref={cardRef}
      key={constructor.Constructor.constructorId}
      className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md hover:shadow-lg dark:border-gray-800"
    >
      <Link href={`/constructors/${constructor.Constructor.constructorId}`}>
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundColor: bgColor }}
      />

      <div className="relative z-10 flex items-center gap-6 p-6">
        <div
          ref={positionRef}
          className="flex h-14 w-18 items-center justify-center rounded-lg text-white"
          style={{ backgroundColor: bgColor }}
        >
          <span className="font-f1-wide text-2xl font-bold">
            {constructor.position ? constructor.position : position}
          </span>
        </div>

        {logo && (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-md">
            <Image
              src={logo || "/placeholder.svg?height=60&width=60"}
              alt={constructor.Constructor.name}
              width={60}
              height={60}
              className="h-auto w-auto object-contain"
            />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2
              className="font-f1-wide text-2xl font-bold tracking-wide"
              style={{ color: bgColor }}
            >
              {constructor.Constructor.name}
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            {flagUrl && (
              <div className="flex items-center gap-1">
                <Image
                  src={flagUrl || "/placeholder.svg"}
                  alt={code || ""}
                  className="h-5 w-5 rounded-sm object-cover"
                  width={20}
                  height={20}
                />
                {code && <span className="text-xs font-medium">{code}</span>}
              </div>
            )}

            {constructor.wins && (
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span>{constructor.wins} wins</span>
              </div>
            )}

            {constructor.Constructor.nationality && (
              <span className="text-xs">
                {constructor.Constructor.nationality}
              </span>
            )}
          </div>
        </div>

        <div className="ml-auto flex flex-col items-end">
          <span className="text-sm font-medium text-gray-500">
            CHAMPIONSHIP POINTS
          </span>
          <div className="flex items-baseline">
            <span
              ref={pointsRef}
              className="font-f1-black text-5xl font-black"
              style={{ color: bgColor }}
            >
              {constructor.points}
            </span>
            <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              PTS
            </span>
          </div>
        </div>

        <ChevronRight className="h-6 w-6 text-gray-400" />
      </div>

      <div className="h-1.5 w-full" style={{ backgroundColor: bgColor }} />
      </Link>
    </li>
  );
};

export default function ConstructorsList({ year }: { year: number }) {
  const {
    constructors,
    error: driversError,
    isLoading: driversLoading,
  } = useConstructorsStandings(year);

  const cardsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (cardsRef.current && constructors?.length) {
      gsap.killTweensOf(cardsRef.current.children);

      gsap.set(cardsRef.current.children, {
        opacity: 0,
        x: -100,
        clearProps: "transform",
      });

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
  }, [constructors]);

  if (driversError) return <p>Error: {driversError}</p>;
  if (driversLoading) return <F1LightsLoader />;

  return (
    <ul ref={cardsRef} className="grid grid-cols-1 gap-4">
      {constructors.map((constructor, index) => {
        const mainConstructor = constructor.Constructor.name || "";
        const bgColor = getTeamColor(mainConstructor);
        const { code, flagUrl } = getCountryFlag(
          constructor.Constructor.nationality
        );
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
