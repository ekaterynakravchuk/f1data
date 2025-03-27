"use client";

import { F1LightsLoader } from "@/components/Loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircuitsByContinent } from "@/types/types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import CircuitsTabItem from "./circuits-tab-item";

interface CircuitsTabsProps {
  circuitsByContinent: CircuitsByContinent;
  error: unknown;
  isLoading: boolean;
}

function CircuitsTabs({
  circuitsByContinent,
  error,
  isLoading,
}: CircuitsTabsProps) {
  const continents = Object.keys(circuitsByContinent) as Array<
    keyof CircuitsByContinent
  >;
  const defaultTab = "Europe";
  const tabContentRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (tabContentRef.current) {
      const circuitItems = tabContentRef.current.querySelectorAll("li");

      gsap.killTweensOf(circuitItems);

      gsap.set(circuitItems, {
        opacity: 0,
        y: 50,
      });

      gsap.to(circuitItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [circuitsByContinent]);

  const handleTabChange = () => {
    setTimeout(() => {
      if (tabContentRef.current) {
        const circuitItems = tabContentRef.current.querySelectorAll("li");

        gsap.killTweensOf(circuitItems);
        gsap.set(circuitItems, { opacity: 0, y: 50 });
        gsap.to(circuitItems, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }, 50);
  };

  if (isLoading || error) return <F1LightsLoader />;

  return (
    <div className="container">
      <Tabs defaultValue={defaultTab} onValueChange={handleTabChange}>
        <TabsList className="w-full mb-6 border-b border-gray-800 p-0 rounded-none bg-transparent h-auto">
          {continents.map((continent) => (
            <TabsTrigger
              key={continent}
              value={continent}
              className="px-6 cursor-pointer py-3 h-auto text-base whitespace-nowrap transition-all duration-200 dark:data-[state=active]:bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 focus:outline-none rounded-none data-[state=active]:border-b-2 dark:data-[state=active]:border-white dark:hover:text-white"
            >
              {continent}
            </TabsTrigger>
          ))}
        </TabsList>

        {continents.map((continent) => (
          <TabsContent
            key={continent}
            value={continent}
            className="tabs-content"
          >
            <ul
              ref={tabContentRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {circuitsByContinent[continent]?.map((circuit) => (
                <CircuitsTabItem key={circuit.circuitId} circuit={circuit} />
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default CircuitsTabs;
