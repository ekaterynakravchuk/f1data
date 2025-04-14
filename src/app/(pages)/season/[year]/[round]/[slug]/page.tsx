import React from "react";
import GrandPrixInfo from "@/features/grand-prix/components/GrandPrixInfo/grand-prix-info";

type Props = {
  params: Promise<{
    year: string;
    round: string;
    slug: string;
  }>;
};

export default async function GrandPrixPage({ params }: Props) {
  const { year, round, slug } = await params;

  return (
    <div>
      <GrandPrixInfo year={year} round={round} slug={slug} />
    </div>
  );
}
