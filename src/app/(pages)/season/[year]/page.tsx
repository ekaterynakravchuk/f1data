
import GrandPrixContent from "@/features/seasons/components/GrandPrixList/grand-prix-content";

type Props = {
  params: {
    year: string;
  };
};

const GrandPrixSeasonPage = ({ params }: Props) => {

  return (
    <main className="py-6 flex flex-col gap-6">
      <GrandPrixContent year={params.year} />
    </main>
  );
};

export default GrandPrixSeasonPage;
