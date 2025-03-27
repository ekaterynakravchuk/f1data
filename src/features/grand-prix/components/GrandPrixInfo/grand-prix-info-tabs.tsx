import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GrandPrix } from "@/types/types";
import { Gauge, Trophy } from "lucide-react";
import React from "react";

type Props = {
  gp: GrandPrix;
  resultsRef: React.RefObject<HTMLTableElement | null>;
};

const GrandPrixInfoTabs = ({ gp, resultsRef }: Props) => {
  return (
    <div className="lg:col-span-2">
      <Tabs defaultValue="results" className="w-full">
        <TabsList className="bg-[#1e1e1e] border-b border-[#333] w-full justify-start mb-6">
          <TabsTrigger
            value="results"
            className="data-[state=active]:bg-[#e10600] data-[state=active]:text-white"
          >
            Race Results
          </TabsTrigger>
          <TabsTrigger
            value="fastest"
            className="data-[state=active]:bg-[#e10600] data-[state=active]:text-white"
          >
            Fastest Laps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="results" className="mt-0">
          <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" ref={resultsRef}>
                <thead>
                  <tr className="bg-[#2a2a2a] text-gray-300">
                    <th className="py-3 px-4 text-left">Pos</th>
                    <th className="py-3 px-4 text-left">Driver</th>
                    <th className="py-3 px-4 text-left">Team</th>
                    <th className="py-3 px-4 text-left">Grid</th>
                    <th className="py-3 px-4 text-left">Time</th>
                    <th className="py-3 px-4 text-right">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {gp.Results.map((result, index) => (
                    <tr
                      key={result.Driver.driverId}
                      className={`border-t border-[#333] hover:bg-[#252525] transition-colors ${
                        index === 0 ? "bg-[#2a2a2a]/30" : ""
                      }`}
                    >
                      <td className="py-4 px-4">
                        {index === 0 ? (
                          <div className="flex items-center">
                            <Trophy
                              size={16}
                              className="mr-1 text-yellow-500"
                            />
                            <span>{result.position}</span>
                          </div>
                        ) : (
                          <span>{result.position}</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3">
                            {result.Driver.nationality && <span>un</span>}
                          </div>
                          <div>
                            <div className="font-medium flex items-center">
                              <span className="mr-2">
                                {result.Driver.givenName}{" "}
                                {result.Driver.familyName}
                              </span>
                              <Badge
                                variant="outline"
                                className="text-xs bg-[#333] text-gray-300"
                              >
                                {result.Driver.code}
                              </Badge>
                            </div>
                            <div className="text-xs text-gray-400">
                              #{result.Driver.permanentNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3">
                            {result.Driver.nationality && <span>un</span>}
                          </div>
                          <span>{result.Constructor.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">{result.grid}</td>
                      <td className="py-4 px-4">
                        {index === 0 ? (
                          result.Time?.time
                        ) : (
                          <span className="text-gray-400">
                            {result.Time?.time}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-right font-medium">
                        {result.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="fastest" className="mt-0">
          <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2a2a2a] text-gray-300">
                    <th className="py-3 px-4 text-left">Pos</th>
                    <th className="py-3 px-4 text-left">Driver</th>
                    <th className="py-3 px-4 text-left">Lap</th>
                    <th className="py-3 px-4 text-left">Time</th>
                    {gp.Results.some(
                      (result) => result.FastestLap?.AverageSpeed?.speed
                    ) && <th className="py-3 px-4 text-right">Avg Speed</th>}
                  </tr>
                </thead>
                <tbody>
                  {gp.Results.filter((result) => result.FastestLap)
                    .sort(
                      (a, b) =>
                        Number(a.FastestLap?.rank || 0) -
                        Number(b.FastestLap?.rank || 0)
                    )
                    .map((result, index) => (
                      <tr
                        key={result.Driver.driverId}
                        className={`border-t border-[#333] hover:bg-[#252525] transition-colors ${
                          index === 0 ? "bg-[#2a2a2a]/30" : ""
                        }`}
                      >
                        <td className="py-4 px-4">
                          {index === 0 ? (
                            <div className="flex items-center">
                              <Gauge
                                size={16}
                                className="mr-1 text-purple-500"
                              />
                              <span>{result.FastestLap?.rank}</span>
                            </div>
                          ) : (
                            <span>{result.FastestLap?.rank}</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-6 h-6 mr-3">
                              {result.Driver.nationality && <span>un</span>}
                            </div>
                            <div>
                              <div className="font-medium">
                                {result.Driver.givenName}{" "}
                                {result.Driver.familyName}
                              </div>
                              <div className="text-xs text-gray-400">
                                {result.Constructor.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">{result.FastestLap?.lap}</td>
                        <td className="py-4 px-4">
                          {index === 0 ? (
                            <span className="font-medium text-purple-400">
                              {result.FastestLap?.Time.time}
                            </span>
                          ) : (
                            result.FastestLap?.Time.time
                          )}
                        </td>
                        {result.FastestLap?.AverageSpeed?.speed &&
                          result.FastestLap?.AverageSpeed?.units && (
                            <td className="py-4 px-4 text-right">
                              <div className="flex items-center justify-end">
                                {result.FastestLap?.AverageSpeed.speed || "-"}{" "}
                                {result.FastestLap?.AverageSpeed.units}
                              </div>
                            </td>
                          )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrandPrixInfoTabs;
