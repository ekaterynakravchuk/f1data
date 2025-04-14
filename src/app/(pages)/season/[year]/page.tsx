import GrandPrixContent from "@/features/seasons/components/GrandPrixList/grand-prix-content";
import React from "react";

type Props = {
  params: Promise<{
    year: string;
  }>;
};

export default async function GrandPrixSeasonPage({ params }: Props) {
  const { year } = await params;

  return (
    <main className="py-6 flex flex-col gap-6">
      <GrandPrixContent year={year} />
    </main>
  );
}
