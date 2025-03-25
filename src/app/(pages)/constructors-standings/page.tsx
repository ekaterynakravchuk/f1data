'use client'


import ConstructorsList from '@/components/ConstrurtorsList/ConstructorsList';
import YearSelector from '@/components/DriversList/YearSelector';
import { F1LightsLoader } from '@/components/Loader';
import { useEffect, useState } from 'react';


const ConstructorsStandings = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) return <F1LightsLoader />;
  return (
    <main className="py-6 container flex flex-col gap-6">
      <h1 className="text-2xl font-bold">
        <span className="font-f1-wide text-4xl">F1 {year}</span> – Constructors
      </h1>
      <YearSelector onYearChange={setYear} />
      <ConstructorsList year={year} />
    </main>
  );
}

export default ConstructorsStandings;