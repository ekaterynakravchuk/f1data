"use client";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import useAllConstructors from "@/features/all-lists/api/useAllConstructors";
import AllConstructorsList from "@/features/all-lists/components/ConstructorsList/all-constructors-list";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AllConstructors = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = Math.max(
    1,
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [page, setPage] = useState<number>(initialPage);

  const { constructors, totalPages, isLoading } = useAllConstructors(page - 1);

  const handleSetPage = (newPage: number | ((prev: number) => number)) => {
    const updatedPage = typeof newPage === "function" ? newPage(page) : newPage;

    setPage(updatedPage);

    const params = new URLSearchParams(searchParams);

    params.set("page", updatedPage.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <main className="py-6 flex flex-col gap-12">
      <div className="f1-header bg-[#e10600] py-6 px-4 min-h-[144px]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            F1 CONSTRUCTORS
          </h1>
          <TypingAnimation className="text-lg mt-2 opacity-90" duration={40}>
            All Formula 1 Championship Constructors
          </TypingAnimation>
        </div>
      </div>
      <div className="container">
        <AllConstructorsList
          constructors={constructors}
          page={page}
          setPage={handleSetPage}
          totalPages={totalPages}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default AllConstructors;
