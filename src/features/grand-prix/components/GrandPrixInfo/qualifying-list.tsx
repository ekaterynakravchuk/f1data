import { Badge } from "@/components/ui/badge";
import { QualifyingResult } from "@/types/types";
import { getTeamSmallLogos } from "@/utils/getTeamLogos";
import { Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  qualifyngRef: React.RefObject<HTMLTableElement | null>;
  qualifyingData: QualifyingResult[];
};

const QualifyingList = ({ qualifyngRef, qualifyingData }: Props) => {
  const madeItToSession = (result: QualifyingResult, session: "Q2" | "Q3") => {
    return result[session] !== "";
  };

  // Function to get the fastest time from each session
  const getFastestTime = (session: "Q1" | "Q2" | "Q3") => {
    const validTimes = qualifyingData
      .filter((result) => result[session] !== "")
      .map((result) => result[session]);

    if (validTimes.length === 0) return "";

    return validTimes.reduce((fastest, current) => {
      if (fastest === "") return current;
      return current < fastest ? current : fastest;
    }, "");
  };

  const fastestQ1 = getFastestTime("Q1");
  const fastestQ2 = getFastestTime("Q2");
  const fastestQ3 = getFastestTime("Q3");
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full" ref={qualifyngRef}>
          <thead>
            <tr className="bg-[#2a2a2a] text-gray-300">
              <th className="py-3 px-4 text-left">Pos</th>
              <th className="py-3 px-4 text-left">Driver</th>
              <th className="py-3 px-4 text-left">Team</th>
              <th className="py-3 px-4 text-left">Q1</th>
              <th className="py-3 px-4 text-left">Q2</th>
              <th className="py-3 px-4 text-left">Q3</th>
            </tr>
          </thead>
          <tbody>
            {qualifyingData.map((result, index) => {
              const teamLogos = getTeamSmallLogos(result.Constructor.name);
              return (
                <tr
                  key={result.position}
                  className={`border-t border-[#333] hover:bg-[#252525] transition-colors ${
                    index === 0 ? "bg-[#2a2a2a]/30" : ""
                  }`}
                >
                  <td className="py-4 px-4">
                    {index === 0 ? (
                      <div className="flex items-center">
                        <Zap size={16} className="mr-1 text-yellow-500" />
                        <span>{result.position}</span>
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
                          #{result.Driver.permanentNumber === "33" ? "1" : result.Driver.permanentNumber}
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
                    <span
                      className={
                        result.Q1 === fastestQ1
                          ? "text-purple-400 font-medium"
                          : ""
                      }
                    >
                      {result.Q1}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {madeItToSession(result, "Q2") ? (
                      <span
                        className={
                          result.Q2 === fastestQ2
                            ? "text-purple-400 font-medium"
                            : ""
                        }
                      >
                        {result.Q2}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {madeItToSession(result, "Q3") ? (
                      <span
                        className={
                          result.Q3 === fastestQ3
                            ? "text-purple-400 font-medium"
                            : ""
                        }
                      >
                        {result.Q3}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
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

export default QualifyingList;
