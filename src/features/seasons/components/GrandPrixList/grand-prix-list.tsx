"use client";

import { F1LightsLoader } from "@/components/Loader";
import { GrandPrix } from "@/types/types";
import { getRaceStatus } from "@/utils/getRaceEndTime";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import GrandPrixItem from "./grand-prix-item";

type Props = {
  grandPrix: GrandPrix[];
  error: unknown;
  isLoading: boolean;
};

const GrandPrixList = ({ grandPrix, error, isLoading }: Props) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const items = listRef.current.querySelectorAll(".gp-card");
    if (!items || items.length === 0) return;

    gsap.set(items, { opacity: 0, y: 20 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
      clearProps: "all",
    });
  }, [grandPrix]);

  

  if (error || isLoading) {
    return <F1LightsLoader />;
  }

  return (
    <div className="container">
      <div ref={listRef} className="space-y-4 mt-12">
        {grandPrix.map((gp) => {
          const isFinished = getRaceStatus(gp);
          return (
            <GrandPrixItem key={gp.round} gp={gp} isFinished={isFinished} />
          );
        })}
      </div>
    </div>
  );
};

export default GrandPrixList;
