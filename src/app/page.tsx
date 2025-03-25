'use client'

import { F1LightsLoader } from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) return <F1LightsLoader />;
  return (
    <main className="p-6">
      <h1 className="text-ferrari">F1 {year}</h1>
      <span className="font-f1-digits">776766667</span>
    </main>
  );
}
