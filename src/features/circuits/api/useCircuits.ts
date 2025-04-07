import { Circuit } from "@/types/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Сопоставление стран и континентов
const continentMap: Record<string, string> = {
  // Европа
  UK: "Europe",
  Germany: "Europe",
  Azerbaijan: "Europe",
  Portugal: "Europe",
  Switzerland: "Europe",
  Spain: "Europe",
  France: "Europe",
  Hungary: "Europe",
  Italy: "Europe",
  Turkey: "Europe",
  Monaco: "Europe",
  Belgium: "Europe",
  Austria: "Europe",
  Russia: "Europe",
  Netherlands: "Europe",
  Sweden: "Europe",

  // Азия
  India: "Asia",
  Japan: "Asia",
  Singapore: "Asia",
  Malaysia: "Asia",
  China: "Asia",
  Korea: "Asia",
  
  // Middle East
  Bahrain: "Middle East",
  "Saudi Arabia": "Middle East",
  Qatar: "Middle East",
  UAE: "Middle East",

  // Америка
  USA: "North America",
  Canada: "North America",
  Mexico: "North America",
  
  // South America
  Argentina: "South America",
  Brazil: "South America",
  Chile: "South America",
  Uruguay: "South America",
  Colombia: "South America",
  Paraguay: "South America",

  // Африка
  Morocco: "Africa",
  "South Africa": "Africa",

  // Океания
  Australia: "Oceania",
};

export function useCircuits() {
  const API_URL = `https://api.jolpi.ca/ergast/f1/circuits/?limit=100`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  const circuits: Circuit[] = data?.MRData?.CircuitTable?.Circuits || [];

  console.log(circuits.map((circuit) => circuit.circuitId));
  

  const circuitsByContinent = circuits.reduce<Record<string, Circuit[]>>(
    (acc, circuit) => {
      const continent = continentMap[circuit.Location.country] || "Unknown";
      if (!acc[continent]) acc[continent] = [];
      acc[continent].push(circuit);
      return acc;
    },
    {}
  );

  return { circuitsByContinent, error, isLoading };
}
