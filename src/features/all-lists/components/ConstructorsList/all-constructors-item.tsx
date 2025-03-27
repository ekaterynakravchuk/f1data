"use client";

import { AllConstructor } from "@/types/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



interface ConstructorRowProps {
  constructor: AllConstructor;
  code: string;
  flagUrl: string;
}

export default function AllConstructorsItem({
  constructor,
  code,
  flagUrl,
}: ConstructorRowProps) {

  return (
    <Link
      href={constructor.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative flex items-center justify-between p-4 rounded-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-800 overflow-hidden mb-2 bg-transparent hover:dark:bg-gray-800 hover:bg-gray-100">
        <div className="absolute left-0 top-0 h-full w-1 bg-gray-400 dark:bg-gray-600" />

        <div className="flex flex-col flex-grow min-w-0">
          <div className="flex items-center">
            <h3 className="text-xl font-f1-wide font-bold truncate transition-colors">
              <span className="uppercase">{constructor.name}</span>
            </h3>
          </div>

          <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
            <div className="mr-2 p-0.5 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
              {flagUrl && (
                <Image
                  src={flagUrl || "/placeholder.svg"}
                  alt={code || ""}
                  className="w-5 h-5 object-cover rounded-sm"
                  width={20}
                  height={20}
                />
              )}
            </div>
            <span className="text-sm">{constructor.nationality}</span>
          </div>
        </div>

        <div className="flex items-center mr-2">
          {constructor.url && (
            <span className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mr-4 underline-offset-2 hover:underline">
              Wiki
            </span>
          )}
        </div>

        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 opacity-50 shrink-0">
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
