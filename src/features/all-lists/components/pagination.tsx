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
    <div className="flex justify-center items-center gap-2 my-4">
      <Button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="cursor-pointer"
      >
        Prev
      </Button>

      {pages.map((p, index) => (
        <div key={p} className="flex items-center gap-2">
          {index > 0 && p !== pages[index - 1] + 1 ? <span>...</span> : null}
          <Button
            variant={p === page ? "default" : "outline"}
            onClick={() => setPage(p)}
            className="cursor-pointer"
          >
            {p}
          </Button>
        </div>
      ))}

      <Button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page >= totalPages}
        className="cursor-pointer"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
