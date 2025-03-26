import useSWR from "swr";

const API_BASE_URL = "https://api.jolpi.ca/ergast/f1/drivers";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch drivers");
  }
  const data = await res.json();

  return {
    drivers: data.MRData.DriverTable.Drivers,
    total: Number(data.MRData.total), // общее количество гонщиков
  };
};

const useAllDrivers = (page = 0, limit = 30) => {
  const { data, error, isLoading } = useSWR(
    `${API_BASE_URL}/?limit=${limit}&offset=${page * limit}`,
    fetcher
  );

  return {
    drivers: data?.drivers || [],
    totalPages: data ? Math.ceil(data.total / limit) : 0, // вычисляем общее количество страниц
    isLoading,
    isError: error,
  };
};

export default useAllDrivers;
