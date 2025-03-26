"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import DriverList from "@/features/standings/components/DriversList/drivers-standings-list";
import YearSelector from "@/features/standings/components/year-selector";
import { useEffect, useState } from "react";

const DriversStandings = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <main className="py-6 flex flex-col gap-6">
      <div className="f1-header bg-[#e10600] py-6 px-4 min-h-[144px]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            F1 DRIVERS{" "}
            {year && 
            <LineShadowText className="font-f1-wide italic" shadowColor="white">
              {`${year }`}
            </LineShadowText>
            }
          </h1>
          <TypingAnimation className="text-lg mt-2 opacity-90" duration={40}>
            Formula 1 Championship Drivers Standings
          </TypingAnimation>
        </div>
      </div>
      <div className="container">
        <YearSelector onYearChange={setYear} />
        <DriverList year={!year ? new Date().getFullYear() : year} />
      </div>
    </main>
  );
};

export default DriversStandings;
