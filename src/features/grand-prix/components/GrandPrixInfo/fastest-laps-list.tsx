import { GrandPrixResult } from "@/types/types";
import { getTeamSmallLogos } from "@/utils/getTeamLogos";
import { Gauge } from "lucide-react";
import Image from "next/image";

type Props = {
  gp: GrandPrixResult[] ;
};

const FastestLapsList = ({ gp }: Props) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#2a2a2a] text-gray-300">
              <th className="py-3 px-4 text-left">Pos</th>
              <th className="py-3 px-4 text-left">Driver</th>
              <th className="py-3 px-4 text-left">Lap</th>
              <th className="py-3 px-4 text-left">Time</th>
              {gp.some(
                (result) => result.FastestLap?.AverageSpeed?.speed
              ) && <th className="py-3 px-4 text-right">Avg Speed</th>}
            </tr>
          </thead>
          <tbody>
            {gp.filter((result) => result.FastestLap)
              .sort(
                (a, b) =>
                  Number(a.FastestLap?.rank || 0) -
                  Number(b.FastestLap?.rank || 0)
              )
              .map((result, index) => {
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
                          <span>{result.FastestLap?.rank}</span>
                          <Gauge size={16} className="ml-1 text-purple-500" />
                        </div>
                      ) : (
                        <span>{result.FastestLap?.rank}</span>
                      )}
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
                        <div>
                          <div className="font-medium">
                            {result.Driver.givenName} {result.Driver.familyName}
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
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FastestLapsList;
