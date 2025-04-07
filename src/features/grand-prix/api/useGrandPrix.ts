import {
  QualifyingResult,
  SingleGrandPrix,
  Sprint,
} from "@/types/types";
import useSWR from "swr";

// Функция для получения данных
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGrandPrix(year: number, round: number) {
  const API_URL = `/api/grand-prix?year=${year}&round=${round}`;
  const QUALIFYING_URL = `https://api.jolpi.ca/ergast/f1/${year}/${round}/qualifying/`;
  const SPRINT_URL = `https://api.jolpi.ca/ergast/f1/${year}/${round}/sprint/`;

  const {
    data: grandPrixData,
    error: grandPrixError,
    isLoading: isLoadingGrandPrix,
  } = useSWR(API_URL, fetcher);

  const {
    data: qualifyingData,
    error: qualifyingError,
    isLoading: isLoadingQualifying,
  } = useSWR(QUALIFYING_URL, fetcher);

  const {
    data: sprintData,
    error: sprintError,
    isLoading: isLoadingSprint,
  } = useSWR(SPRINT_URL, fetcher);

  const grandPrix: SingleGrandPrix =
    grandPrixData?.MRData?.RaceTable?.Races[0] || null;

  const qualifyingResults: QualifyingResult[] =
    qualifyingData?.MRData?.RaceTable?.Races[0]?.QualifyingResults || null;

    const sprintResults: Sprint =
      sprintData?.MRData?.RaceTable?.Races[0] || null;

  const combinedData = {
    grandPrix,
    qualifyingResults,
    sprintResults
  };

  const error = grandPrixError || qualifyingError || sprintError;

  const isLoading =
    isLoadingGrandPrix || isLoadingQualifying || isLoadingSprint;

  return { combinedData, error, isLoading };
}
