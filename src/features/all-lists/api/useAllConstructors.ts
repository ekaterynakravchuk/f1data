import useSWR from "swr";

const API_BASE_URL = "https://api.jolpi.ca/ergast/f1/constructors";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch constructors");
  }
  const data = await res.json();

  return {
    constructors: data.MRData.ConstructorTable.Constructors,
    total: Number(data.MRData.total),
  };
};

const useAllConstructors = (page = 0, limit = 30) => {
  const { data, error, isLoading } = useSWR(
    `${API_BASE_URL}/?limit=${limit}&offset=${page * limit}`,
    fetcher
  );

  return {
    constructors: data?.constructors || [],
    totalPages: data ? Math.ceil(data.total / limit) : 0,
    isLoading,
    isError: error,
  };
};

export default useAllConstructors;
