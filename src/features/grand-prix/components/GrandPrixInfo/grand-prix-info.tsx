"use client";

import { getTeamColor } from "@/utils/getConstructorColor";
import { useGrandPrix } from "../../api/useGrandPrix";
import GrandPrixInfoInner from "./gran-prix-info-inner";
import GrandPrixInfoHeader from "./grand-prix-info-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface GrandPrixInfoProps {
  year: string;
  round: string;
  slug: string;
}

const GrandPrixInfo = ({ year, round, slug }: GrandPrixInfoProps) => {
  const {
    combinedData: allData,
    error,
    isLoading,
  } = useGrandPrix(Number(year), Number(round));

  const grandPrix = allData.grandPrix;
  const qualifying = allData.qualifyingResults;
  const sprint = allData.sprintResults;

  const winnerColor = getTeamColor(
    grandPrix?.Results[0].Constructor?.name || "Unknown"
  );
  return (
    <section className="flex flex-col gap-6">
      <GrandPrixInfoHeader
        year={year}
        name={slug.replace(/_/g, " ")}
        winnerColor={winnerColor}
      />
      <div className="container">
        <Button asChild variant="link">
          <Link href={`/season/${year}`}>
            <ArrowLeft className="mr-2" /> Back to season {year}
          </Link>
        </Button>
      </div>
      <GrandPrixInfoInner
        gp={grandPrix}
        qualifying={qualifying}
        sprint={sprint}
        error={error}
        isLoading={isLoading}
        winnerColor={winnerColor}
      />
    </section>
  );
};

export default GrandPrixInfo;
