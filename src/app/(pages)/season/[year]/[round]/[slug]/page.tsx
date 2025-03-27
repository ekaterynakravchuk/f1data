import React from "react";
import GrandPrixInfo from "@/features/grand-prix/components/GrandPrixInfo/grand-prix-info";

type Props = {
  params: {
    year: string;
    round: string;
    slug: string;
  };
};

export default function GrandPrixPage({ params }: Props) {
  const resolvedParams = React.use(Promise.resolve(params));

  return (
    <div>
      <GrandPrixInfo
        year={resolvedParams.year}
        round={resolvedParams.round}
        slug={resolvedParams.slug}
      />
    </div>
  );
}
