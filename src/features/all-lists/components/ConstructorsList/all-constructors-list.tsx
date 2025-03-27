"use client";

import { Skeleton } from "@/components/ui/skeleton";
import DriversPagination from "@/features/all-lists/components/pagination";
import { AllConstructor } from "@/types/types";
import { getCountryFlag } from "@/utils/getCountryFlag";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import AllConstructorsItem from "./all-constructors-item";

interface ConstructorsListProps {
  constructors: AllConstructor[];
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
  totalPages: number;
  isLoading: boolean;
}

export default function AllConstructorsList({
  constructors,
  page,
  setPage,
  totalPages,
  isLoading,
}: ConstructorsListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && constructors?.length) {
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
  }, [listRef, constructors]);
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
          {constructors.map((constructor) => {
            const { code, flagUrl } = getCountryFlag(constructor.nationality);

            return (
              <AllConstructorsItem
                key={`${constructor.constructorId}-${constructor.name}-${constructor.nationality}`}
                constructor={constructor}
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
