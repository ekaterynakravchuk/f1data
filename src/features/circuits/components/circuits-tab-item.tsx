import { Circuit } from '@/types/types';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface CircuitsTabItemProps {
  circuit: Circuit
}

const CircuitsTabItem = ({ circuit }: CircuitsTabItemProps) => {
  return (
    <li>
      <Link
        href={circuit.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-3 h-full rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors"
      >
        <div className="flex-shrink-0 mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-gray-700">
          <MapPin className="h-4 w-4 text-gray-300" />
        </div>
        <div>
          <p className="text-gray-200 text-2xl">{circuit.circuitName}</p>
          <p className="text-sm text-gray-400 font-f1-italic">
            {circuit.Location.country}, {circuit.Location.locality}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default CircuitsTabItem