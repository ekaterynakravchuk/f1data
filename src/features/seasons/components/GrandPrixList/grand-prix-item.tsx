import { GrandPrix } from '@/types/types'
import { Calendar, Clock, Flag, Globe, MapPin, Trophy } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from 'react'

type Props = {
  gp: GrandPrix;
  isFinished: boolean
}

const GrandPrixItem = ({ gp, isFinished }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5);
  };
  return (
    <div
      key={gp.round}
      className="gp-card relative bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:bg-gray-750 transition-colors"
    >
      <div className="flex flex-col md:flex-row relative z-0">
        <div className="p-4 md:p-5 flex-grow">
          <div className="flex items-center mb-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-700 mr-3">
              <Flag className="h-4 w-4 text-gray-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">ROUND {gp.round}</span>
              <h3 className="text-xl font-f1-wide text-white">{gp.raceName}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
              <span>
                {gp.Circuit.Location.locality}, {gp.Circuit.Location.country}
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>{formatDate(gp.date)}</span>
            </div>
          </div>

          {/* Race time */}
          <div className="flex items-center text-gray-300 mb-4">
            <Trophy className="h-4 w-4 mr-2 text-amber-500" />
            <span className="font-medium">
              Race: {formatDate(gp.date)} <span className='inline-block ml-6'>{formatTime(gp.time)}</span> UTC
            </span>
          </div>

          {/* Schedule Accordion */}
          {isFinished ? (
            <Link
              href={`/season/${gp.season}/${gp.round}/${gp.raceName.replace(
                / /g,
                "_"
              )}`}
              className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md text-sm font-medium transition-colors flex justify-center items-center relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              View Results
            </Link>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="schedule" className="border-gray-700">
                <AccordionTrigger className="py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer px-2">
                  FULL WEEKEND SCHEDULE
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                    {gp.FirstPractice && (
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400">PRACTICE 1</div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(gp.FirstPractice.date)}{" "}
                          <span className="inline-block ml-auto">
                            {formatTime(gp.FirstPractice.time)} UTC
                          </span>
                        </div>
                      </div>
                    )}

                    {gp.SecondPractice && (
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400">PRACTICE 2</div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(gp.SecondPractice.date)}{" "}
                          <span className="inline-block ml-auto">
                            {formatTime(gp.SecondPractice.time)} UTC
                          </span>
                        </div>
                      </div>
                    )}

                    {gp.ThirdPractice && (
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400">PRACTICE 3</div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(gp.ThirdPractice.date)}{" "}
                          <span className="inline-block ml-auto">
                            {formatTime(gp.ThirdPractice.time)} UTC
                          </span>
                        </div>
                      </div>
                    )}

                    {gp.Qualifying && (
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400">QUALIFYING</div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(gp.Qualifying.date)}{" "}
                          <span className="inline-block ml-auto">
                            {formatTime(gp.Qualifying.time)} UTC
                          </span>
                        </div>
                      </div>
                    )}

                    {gp.Sprint && (
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400">SPRINT</div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(gp.Sprint.date)}{" "}
                          <span className="inline-block ml-auto">
                            {formatTime(gp.Sprint.time)} UTC
                          </span>
                        </div>
                      </div>
                    )}

                    {gp.SprintQualifying && (
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400">
                          SPRINT QUALIFYING
                        </div>
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(gp.SprintQualifying.date)}{" "}
                          <span className="inline-block ml-auto">
                            {formatTime(gp.SprintQualifying.time)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>

        <div className="bg-gray-750 p-4 md:w-56 flex flex-col justify-center items-center md:border-l border-gray-700">
          <div className="text-center mb-3">
            <div className="text-xs text-gray-400 mb-1">CIRCUIT</div>
            <div className="text-gray-200 font-medium">
              {gp.Circuit.circuitName}
            </div>
          </div>

          {/* Geolocation with Google Maps link */}
          <div className="flex flex-col items-center">
            <Globe className="h-4 w-4 text-gray-400 mb-1" />
            <div className="text-xs text-gray-400">COORDINATES</div>
            <a
              href={`https://www.google.com/maps?q=${gp.Circuit.Location.lat},${gp.Circuit.Location.long}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 mt-1 hover:text-blue-400 transition-colors flex items-center relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {gp.Circuit.Location.lat}, {gp.Circuit.Location.long}
              <MapPin className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrandPrixItem