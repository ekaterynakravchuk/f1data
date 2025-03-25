"use client";

import { useState, useEffect } from "react";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 11 }, (_, i) => currentYear - i);


export default function YearSelector({
  onYearChange,
}: {
  onYearChange: (year: number) => void;
}) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setSelectedYear(currentYear);
    onYearChange(currentYear);
  }, [onYearChange]);

  const handleClick = (year: number) => {
    setSelectedYear(year);
    onYearChange(year);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Select Year</h2>
      <div className="flex flex-wrap gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleClick(year)}
            className={`px-3 py-1 rounded-lg cursor-pointer ${
              selectedYear === year ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
