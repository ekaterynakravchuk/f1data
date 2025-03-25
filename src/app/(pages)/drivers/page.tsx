'use client'


import DriverList from '@/components/DriversList/DriversList';
import YearSelector from '@/components/DriversList/YearSelector';
import { F1LightsLoader } from '@/components/Loader';
import React, { useEffect, useState } from 'react'


const Drivers = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) return <F1LightsLoader />;
  return (
    <main className="py-6 container">
      <h1 className="text-2xl font-bold">F1 {year} – Drivers</h1>
      <YearSelector onYearChange={setYear} />
      <DriverList year={year} />
    </main>
  );
}

export default Drivers