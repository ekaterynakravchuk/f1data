'use client'

import { ConstructorStanding } from "@/types/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useConstructorsStandings(year: number) {
  const API_URL = `https://api.jolpi.ca/ergast/f1/${year}/constructorstandings.json`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  const constructors: ConstructorStanding[] =
    data?.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings || [];

  return { constructors, error, isLoading };
}

