import { LineShadowText } from '@/components/magicui/line-shadow-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import React from 'react'

type Props = {
  year: string
  name: string
  winnerColor: string
}

const GrandPrixInfoHeader = ({ year, name, winnerColor }: Props) => {
  return (
    <div className={`f1-header py-6 px-4 min-h-[144px]`} style={{ backgroundColor: winnerColor || "transparent" }}>
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          {name}{" "}
          {year && (
            <LineShadowText className="font-f1-wide italic" shadowColor="white">
              {`${year}`}
            </LineShadowText>
          )}
        </h1>
        <TypingAnimation className="text-lg mt-2 opacity-90" duration={40}>
          {`Formula 1 Grand Prix ${year} information and results`}
        </TypingAnimation>
      </div>
    </div>
  );
}

export default GrandPrixInfoHeader;