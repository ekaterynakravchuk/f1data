"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 11 }, (_, i) => currentYear - i);

export default function YearSelector({
  onYearChange,
}: {
  onYearChange: (year: number) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const urlYear = searchParams.get("year");
  const initialYear = urlYear ? parseInt(urlYear, 10) : currentYear;

  const [selectedYear, setSelectedYear] = useState<number>(initialYear);

  useEffect(() => {
    onYearChange(initialYear);
  }, [initialYear, onYearChange]);

  const handleClick = (year: number) => {
    setSelectedYear(year);
    onYearChange(year);

    const params = new URLSearchParams(searchParams);
    params.set("year", year.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Select season</h2>
      <div className="flex flex-wrap gap-2">
        {years.map((year) => (
          <Button
            variant={selectedYear === year ? "default" : "outline"}
            key={year}
            onClick={() => handleClick(year)}
            className={`
              relative px-4 py-2 rounded-md text-base
              transition-all duration-200 ease-out cursor-pointer
              ${
                selectedYear === year
                  ? "bg-gray-700 text-white border-b-2 border-gray-400 hover:bg-gray-700"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
              }
            `}
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}
