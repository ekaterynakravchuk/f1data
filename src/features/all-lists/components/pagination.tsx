import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  const visiblePages = 2;

  const getPages = () => {
    const pages = new Set<number>();

    pages.add(1);
    pages.add(totalPages);

    for (
      let i = Math.max(1, page - visiblePages);
      i <= Math.min(totalPages, page + visiblePages);
      i++
    ) {
      pages.add(i);
    }

    return Array.from(pages).sort((a, b) => a - b);
  };

  const pages = getPages();

  return (
    <div className="flex justify-center items-center gap-2 mb-6">
      <Button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`
          px-4 py-2 rounded-md text-base transition-all duration-200
          ${
            page === 1
              ? "bg-gray-800 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer"
          }
        `}
      >
        Prev
      </Button>

      {pages.map((p, index) => (
        <div key={p} className="flex items-center gap-2">
          {index > 0 && p !== pages[index - 1] + 1 ? (
            <span className="text-gray-500 px-1">•••</span>
          ) : null}
          <Button
            onClick={() => setPage(p)}
            className={`
              min-w-[40px] px-3 py-2 rounded-md font-bold text-base
              transition-all duration-200 ease-out cursor-pointer
              ${
                p === page
                  ? "bg-gray-700 text-white border-b-2 border-gray-400 hover:bg-gray-700"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
              }
            `}
          >
            {p}
          </Button>
        </div>
      ))}

      <Button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page >= totalPages}
        className={`
          px-4 py-2 rounded-md text-base transition-all duration-200
          ${
            page >= totalPages
              ? "bg-gray-800 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer"
          }
        `}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
