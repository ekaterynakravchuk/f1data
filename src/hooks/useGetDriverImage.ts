"use client";

import useSWR from "swr";

type Driver = {
  broadcast_name: string;
  country_code: string;
  driver_number: number;
  first_name: string | null;
  full_name: string;
  headshot_url: string | null;
  last_name: string | null;
  meeting_key: number;
  name_acronym: string;
  session_key: number;
  team_colour: string;
  team_name: string;
};

type Props = {
  firstName: string;
  lastName: string;
};

const fetcher = (url: string): Promise<Driver[]> =>
  fetch(url).then((res) => res.json());

function normalizeName(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function useGetDriverImage({ firstName, lastName }: Props) {
  const API_URL = `https://api.openf1.org/v1/drivers`;
  const { data, error, isLoading } = useSWR<Driver[]>(API_URL, fetcher);

  if (!data || !Array.isArray(data)) {
    return { imageUrl: null, error, isLoading };
  }

  const normalizedFirstName = normalizeName(firstName);
  const normalizedLastName = normalizeName(lastName);

  const driver = data.find(
    (d) =>
      d.first_name &&
      d.last_name &&
      d.headshot_url &&
      normalizeName(d.first_name) === normalizedFirstName &&
      normalizeName(d.last_name) === normalizedLastName
  );

  return { imageUrl: driver?.headshot_url || null, error, isLoading };
}
