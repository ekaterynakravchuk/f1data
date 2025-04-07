import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprint } from "@/types/types";
import React from "react";
import FastestLapsTab from "./fastest-laps-list";
import RaceResultsList from "./race-results-list";

type Props = {
  gp: Sprint;
  resultsRef: React.RefObject<HTMLTableElement | null>;
};

const SprintResultsTab = ({ gp, resultsRef }: Props) => {
  return (
    <Tabs defaultValue="results">
      <TabsList className="bg-[#1e1e1e] border-b border-[#333] w-full justify-start mb-2">
        <TabsTrigger
          value="results"
          className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
        >
          Sprint Results
        </TabsTrigger>
        <TabsTrigger
          value="fastest"
          className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
        >
          Fastest Laps
        </TabsTrigger>
      </TabsList>
      <TabsContent value="results" className="mt-0">
        <RaceResultsList gp={gp.SprintResults} resultsRef={resultsRef} />
      </TabsContent>
      <TabsContent value="fastest" className="mt-0">
        <FastestLapsTab gp={gp.SprintResults} />
      </TabsContent>
    </Tabs>
  );
};

export default SprintResultsTab;
