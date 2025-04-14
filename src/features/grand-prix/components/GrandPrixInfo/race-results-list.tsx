import { Badge } from "@/components/ui/badge";
import { GrandPrixResult } from "@/types/types";
import { getDriverPositionChange } from "@/utils/getDriverPositionChange";
import { getTeamSmallLogos } from "@/utils/getTeamLogos";
import { Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  gp: GrandPrixResult[];
  resultsRef: React.RefObject<HTMLTableElement | null>;
};

const RaceResultsList = ({ gp, resultsRef }: Props) => {
  return (
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
            {gp.map((result, index) => {
              const positionChange = getDriverPositionChange(
                result.grid,
                result.position
              );
              const teamLogos = getTeamSmallLogos(result.Constructor.name);
              return (
                <tr
                  key={result.Driver.driverId}
                  className={`border-t border-[#333] hover:bg-[#252525] transition-colors ${
                    index === 0 ? "bg-[#2a2a2a]/30" : ""
                  }`}
                >
                  <td className="py-4 px-4">
                    {index === 0 ? (
                      <div className="flex items-center">
                        <span>{result.position}</span>
                        <Trophy size={16} className="ml-1 text-yellow-500" />
                      </div>
                    ) : (
                      <span>{result.position}</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div>
                        <div className="font-medium flex items-center">
                          <span className="mr-2">
                            {result.Driver.givenName} {result.Driver.familyName}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs bg-[#333] text-gray-300"
                          >
                            {result.Driver.code}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-400">
                          #
                          {result.Driver.permanentNumber === "33"
                            ? "1"
                            : result.Driver.permanentNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      {teamLogos && (
                        <div className="w-6 h-6 mr-3">
                          <Image
                            src={teamLogos}
                            alt={result.Constructor.name}
                            width={24}
                            height={24}
                          />
                        </div>
                      )}
                      <span>{result.Constructor.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {result.grid}
                    <span className="text-xs inline-block ml-2">
                      {positionChange > 0 ? (
                        <span className="text-green-800">
                          +{positionChange}
                        </span>
                      ) : positionChange < 0 ? (
                        <span className="text-red-800">{positionChange}</span>
                      ) : (
                        <span className="text-gray-600">= 0</span>
                      )}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {index === 0 ? (
                      result.Time?.time
                    ) : (
                      <span className="text-gray-400">{result.Time?.time}</span>
                    )}
                    {!result.Time && (
                      <span className="text-gray-400">{result.status}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-right font-medium">
                    {result.points}
                    <span className="block text-[10px]">PTS</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RaceResultsList;
