"use client";

import { useSeasonGrandprix } from "../../api/useSeason";
import GrandPrixList from "./grand-prix-list";
import GrandPrixListHeader from "./grand-prix-list-header";

interface GrandPrixListProps {
  year: string;
}

const GrandPrixContent = ({ year }: GrandPrixListProps) => {
  const { grandPrix, error, isLoading } = useSeasonGrandprix(Number(year));
  return (
    <section>
      <GrandPrixListHeader year={year} />
      <GrandPrixList
        grandPrix={grandPrix}
        error={error}
        isLoading={isLoading}
      />
    </section>
  );
};

export default GrandPrixContent;
