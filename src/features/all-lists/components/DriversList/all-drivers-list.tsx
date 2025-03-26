"use client";

import { Skeleton } from "@/components/ui/skeleton";
import DriversPagination from "@/features/all-lists/components/pagination";
import { AllDriver } from "@/types/types";
import { getCountryFlag } from "@/utils/getCountryFlag";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import AllDriversItem from "./all-drivers-item";

interface DriverListProps {
  drivers: AllDriver[];
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
  totalPages: number;
  isLoading: boolean;
}

export default function AllDriversList({
  drivers,
  page,
  setPage,
  totalPages,
  isLoading,
}: DriverListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && drivers?.length) {
      gsap.killTweensOf(listRef.current.children);

      gsap.set(listRef.current.children, {
        opacity: 0,
        y: 20,
        clearProps: "transform",
      });

      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            if (listRef.current) {
              gsap.set(listRef.current.children, { clearProps: "transform" });
            }
          },
        }
      );
    }
  }, [drivers]);
  return (
    <>
      {isLoading ? (
        <Skeleton className="w-[400px] h-9 rounded-sm mx-auto mb-6" />
      ) : (
        <DriversPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
      {isLoading ? (
        <div className="grid grid-cols-2 gap-4">
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <Skeleton className="h-[113px] rounded-sm m-auto" />
              </div>
            ))}
        </div>
      ) : (
        <div ref={listRef} className="grid grid-cols-2 gap-4">
          {drivers.map((driver) => {
            const { code, flagUrl } = getCountryFlag(driver.nationality);

            return (
              <AllDriversItem
                key={driver.driverId}
                driver={driver}
                code={code}
                flagUrl={flagUrl}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
