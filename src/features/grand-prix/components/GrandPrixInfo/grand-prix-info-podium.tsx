import React from "react";

type Props = {};

const GrandPrixInfoPodium = (props: Props) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Podium Finishers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleGrandPrix.Results.slice(0, 3).map((result, index) => (
          <Card
            key={result.Driver.driverId}
            className="bg-[#1e1e1e] border-[#333] overflow-hidden"
          >
            <div
              className={`h-2 ${
                index === 0
                  ? "bg-yellow-500"
                  : index === 1
                  ? "bg-gray-400"
                  : "bg-amber-700"
              }`}
            ></div>
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-[#2a2a2a]">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold">
                    {result.Driver.givenName} {result.Driver.familyName}
                  </h3>
                  <div className="text-sm text-gray-400">
                    {result.Constructor.name}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-gray-400">Time</div>
                  <div>{result.Time?.time}</div>
                </div>
                <div>
                  <div className="text-gray-400">Points</div>
                  <div>{result.points}</div>
                </div>
                <div>
                  <div className="text-gray-400">Grid</div>
                  <div>{result.grid}</div>
                </div>
                <div>
                  <div className="text-gray-400">Fastest Lap</div>
                  <div>{result.FastestLap?.Time.time || "N/A"}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GrandPrixInfoPodium;
