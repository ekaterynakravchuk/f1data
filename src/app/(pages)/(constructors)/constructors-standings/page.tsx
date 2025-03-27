"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import ConstructorsList from "@/features/standings/components/ConstrurtorsList/constructors-standings-list";
import YearSelector from "@/features/standings/components/year-selector";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ConstructorsStandings = () => {
  const searchParams = useSearchParams();
  const urlYear = searchParams.get("year");
  const initialYear = urlYear
    ? parseInt(urlYear, 10)
    : new Date().getFullYear();
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    setYear(initialYear);
  }, [initialYear]);

  return (
    <main className="py-6 flex flex-col gap-6">
      <div className="f1-header bg-[#e10600] py-6 px-4 min-h-[144px]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            F1 CONSTRUCTORS{" "}
            {year && (
              <LineShadowText
                className="font-f1-wide italic"
                shadowColor="white"
              >
                {`${year}`}
              </LineShadowText>
            )}
          </h1>
          <TypingAnimation className="text-lg mt-2 opacity-90" duration={40}>
            Formula 1 Championship Constructors
          </TypingAnimation>
        </div>
      </div>
      <div className="container">
        <YearSelector onYearChange={setYear} />
        <ConstructorsList year={year} />
      </div>
    </main>
  );
};

export default ConstructorsStandings;
