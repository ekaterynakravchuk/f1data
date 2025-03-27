import { SingleGrandPrix } from "@/types/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGrandPrix(year: number, round: number) {
  const API_URL = `/api/grand-prix?year=${year}&round=${round}`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  const grandPrix: SingleGrandPrix = data?.MRData?.RaceTable?.Races[0] || null;

  return { grandPrix, error, isLoading };
}
