"use client";

import { Button } from "@/components/ui/button";

interface AlphabetFilterProps {
  selectedLetter: string | null;
  onSelectLetter: (letter: string | null) => void;
}

export default function NameSelector({
  selectedLetter,
  onSelectLetter,
}: AlphabetFilterProps) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter: string) => {
    if (selectedLetter === letter) {
      onSelectLetter(null); // Clear filter if clicking the same letter
    } else {
      onSelectLetter(letter);
    }
  };

  return (
    <div
      className="flex flex-wrap justify-center gap-2 p-4 bg-[#15151e] rounded-lg"
    >
      <div className="w-full text-center mb-3">
        <h2 className="text-xl font-bold">Filter by Last Name</h2>
      </div>

      {alphabet.map((letter) => (
        <Button
          key={letter}
          variant={selectedLetter === letter ? "default" : "outline"}
          className={`letter-button h-10 w-10 rounded-md ${
            selectedLetter === letter
              ? "bg-[#e10600] hover:bg-[#ff0000]"
              : "bg-[#1e1e2a] hover:bg-[#2a2a3a] text-white"
          }`}
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </Button>
      ))}

      {selectedLetter && (
        <Button
          variant="ghost"
          className="ml-2 text-sm"
          onClick={() => onSelectLetter(null)}
        >
          Clear Filter
        </Button>
      )}
    </div>
  );
}
