'use client';

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useCircuits } from "@/features/circuits/api/useCircuits";
import CircuitsTabs from "@/features/circuits/components/circuits-tabs";
import React from "react";

const Circuits = () => {
  const { circuitsByContinent, error, isLoading } = useCircuits();

  
  return (
    <main className="py-6 flex flex-col gap-6">
      <div className="f1-header bg-[#e10600] py-6 px-4 min-h-[144px]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            F1 CIRCUITS
          </h1>
          <TypingAnimation className="text-lg mt-2 opacity-90" duration={40}>
            Formula 1 Championship Circuits
          </TypingAnimation>
        </div>
      </div>
      <CircuitsTabs
        circuitsByContinent={circuitsByContinent}
        error={error}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Circuits;
