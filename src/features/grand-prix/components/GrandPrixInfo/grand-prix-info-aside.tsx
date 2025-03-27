import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Flag, MapPin } from 'lucide-react';


type Props = {
  country: string,
  locality: string,
  time: string,
  season: string,
  date: string,
  circuitUrl: string,
  circuitName: string,
  round: string,
}

const GrandPrixInfoAside = ({country, locality, time, season, date, circuitUrl, circuitName, round}: Props) => {
  return (
    <Card className="bg-[#1e1e1e] border-[#333] overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-[#e10600] to-[#ff4d4d] relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold animate-in">
            {circuitName}
          </h2>
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
            <Calendar className="mr-3 text-[#e10600]" />
            <div>
              <p className="text-sm text-gray-400">Race Date</p>
              <p className="font-medium">{date}</p>
            </div>
          </div>
          <div className="flex items-center animate-in">
            <Clock className="mr-3 text-[#e10600]" />
            <div>
              <p className="text-sm text-gray-400">Race Time</p>
              <p className="font-medium">{time}</p>
            </div>
          </div>
          <div className="flex items-center animate-in">
            <Flag className="mr-3 text-[#e10600]" />
            <div>
              <p className="text-sm text-gray-400">Round</p>
              <p className="font-medium">
                {round} of the {season} Season
              </p>
            </div>
          </div>
          <div className="mt-6 animate-in">
            <a
              href={circuitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e10600] hover:text-[#ff4d4d] transition-colors flex items-center"
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
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default GrandPrixInfoAside