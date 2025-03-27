"use client";

import { useGrandPrix } from "../../api/useGrandPrix";
import GrandPrixInfoInner from "./gran-prix-info-inner";
import GrandPrixInfoHeader from "./grand-prix-info-header";

interface GrandPrixInfoProps {
  year: string;
  round: string;
  slug: string;
}

const GrandPrixInfo = ({ year, round, slug }: GrandPrixInfoProps) => {
  const { grandPrix, error, isLoading } = useGrandPrix(Number(year), Number(round));
  return (
    <section className="flex flex-col gap-12">
      <GrandPrixInfoHeader year={year} name={slug.replace(/_/g, " ")} />
      <GrandPrixInfoInner gp={grandPrix} error={error} isLoading={isLoading} />
    </section>
  );
};

export default GrandPrixInfo;
