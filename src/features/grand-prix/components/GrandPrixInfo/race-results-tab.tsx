import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GrandPrixResult } from "@/types/types";
import React from "react";
import FastestLapsList from "./fastest-laps-list";
import RaceResultsList from "./race-results-list";

type Props = {
  gp: GrandPrixResult[];
  resultsRef: React.RefObject<HTMLTableElement | null>;
};

const RaceResultsTab = ({ gp, resultsRef }: Props) => {
  return (
    <Tabs defaultValue="results">
      <TabsList className="bg-[#1e1e1e] border-b border-[#333] w-full justify-start mb-2">
        <TabsTrigger
          value="results"
          className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
        >
          Race Results
        </TabsTrigger>
        <TabsTrigger
          value="fastest"
          className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
        >
          Fastest Laps
        </TabsTrigger>
      </TabsList>
      <TabsContent value="results" className="mt-0">
        <RaceResultsList gp={gp} resultsRef={resultsRef} />
      </TabsContent>
      <TabsContent value="fastest" className="mt-0">
        <FastestLapsList gp={gp} />
      </TabsContent>
    </Tabs>
  );
};

export default RaceResultsTab;
