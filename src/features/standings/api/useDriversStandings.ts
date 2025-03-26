'use client'

import { DriverStanding } from "@/types/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useDriversStandings(year: number) {
  const API_URL = `https://api.jolpi.ca/ergast/f1/${year}/driverstandings.json`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  const drivers: DriverStanding[] =
    data?.MRData?.StandingsTable?.StandingsLists[0].DriverStandings || [];

  return { drivers, error, isLoading };
}

