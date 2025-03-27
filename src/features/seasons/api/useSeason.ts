"use client";

import { GrandPrix } from "@/types/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSeasonGrandprix(year: number) {
  const API_URL = `https://api.jolpi.ca/ergast/f1/${year}/races/`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  const grandPrix: GrandPrix[] =
    data?.MRData?.RaceTable?.Races || [];

  return { grandPrix, error, isLoading };
}
