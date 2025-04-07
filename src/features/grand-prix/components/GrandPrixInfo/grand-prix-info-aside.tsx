import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Flag, MapPin } from "lucide-react";
import Link from "next/link";
import { getCircuitImage } from "@/utils/getCircuitImage";
import Image from "next/image";

type Props = {
  country: string;
  locality: string;
  time: string;
  season: string;
  date: string;
  circuitUrl: string;
  circuitName: string;
  round: string;
  winnerColor: string;
  circuitId: string;
};

const GrandPrixInfoAside = ({
  country,
  locality,
  time,
  season,
  date,
  circuitUrl,
  circuitName,
  round,
  winnerColor,
  circuitId,
}: Props) => {
  const curcuitImage = getCircuitImage(circuitId);
  
  return (
    <Card className="bg-[#1e1e1e] border-[#333] overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-[#e10600] to-[#ff4d4d] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center">
          <Image
            src={curcuitImage}
            alt={circuitName}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold animate-in">{circuitName}</h2>
          <div className="flex items-center mt-1 animate-in">
            <MapPin size={16} className="mr-1" />
            <span>
              {locality}, {country}
            </span>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center animate-in">
            <Calendar
              className="mr-3 text-[#e10600]"
              style={{ color: winnerColor || "white" }}
            />
            <div>
              <p className="text-sm text-gray-400">Race Date</p>
              <p className="font-medium">{date}</p>
            </div>
          </div>
          <div className="flex items-center animate-in">
            <Clock
              className="mr-3 text-[#e10600]"
              style={{ color: winnerColor || "white" }}
            />
            <div>
              <p className="text-sm text-gray-400">Race Time</p>
              <p className="font-medium">{time}</p>
            </div>
          </div>
          <div className="flex items-center animate-in">
            <Flag
              className="mr-3 text-[#e10600]"
              style={{ color: winnerColor || "white" }}
            />
            <div>
              <p className="text-sm text-gray-400">Round</p>
              <p className="font-medium">
                {round} of the {season} Season
              </p>
            </div>
          </div>
          <div className="mt-6 animate-in">
            <Link
              href={circuitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors flex items-center"
              style={{ color: winnerColor }}
            >
              <span>More about this circuit</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GrandPrixInfoAside;
