
import GrandPrixContent from "@/features/seasons/components/GrandPrixList/grand-prix-content";
import React from "react";

type Props = {
  params: {
    year: string;
  };
};

const GrandPrixSeasonPage = ({ params }: Props) => {
  const resolvedParams = React.use(Promise.resolve(params));


  return (
    <main className="py-6 flex flex-col gap-6">
      <GrandPrixContent year={resolvedParams.year} />
    </main>
  );
};

export default GrandPrixSeasonPage;
