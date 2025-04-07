import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GrandPrix, QualifyingResult, Sprint } from "@/types/types";
import React from "react";
import RaceResultsTab from "./race-results-tab";
import SprintResultsTab from "./sprint-results-tab";
import QualifyingList from "./qualifying-list";

type Props = {
  gp: GrandPrix;
  qualifying: QualifyingResult[];
  sprint: Sprint;
  resultsRef: React.RefObject<HTMLTableElement | null>;
};

const GrandPrixInfoTabs = ({ gp, qualifying, sprint, resultsRef }: Props) => {
  return (
    <div className="lg:col-span-2">
      <Tabs defaultValue="results" className="w-full">
        <TabsList className="bg-[#1e1e1e] border-b border-[#333] w-full justify-start mb-2">
          <TabsTrigger
            value="results"
            className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
          >
            Race
          </TabsTrigger>
          {qualifying && (
            <TabsTrigger
              value="qualifying"
              className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
            >
              Qualifying
            </TabsTrigger>
          )}
          {sprint && (
            <TabsTrigger
              value="sprint"
              className="dark:data-[state=active]:bg-background data-[state=active]:text-white cursor-pointer"
            >
              Sprint
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="results" className="mt-0">
          <RaceResultsTab gp={gp.Results || sprint.SprintResults} resultsRef={resultsRef} />
        </TabsContent>

        <TabsContent value="qualifying" className="mt-0">
          <QualifyingList qualifyngRef={resultsRef} qualifyingData={qualifying} />
        </TabsContent>

        <TabsContent value="sprint" className="mt-0">
          <SprintResultsTab gp={sprint} resultsRef={resultsRef} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrandPrixInfoTabs;
