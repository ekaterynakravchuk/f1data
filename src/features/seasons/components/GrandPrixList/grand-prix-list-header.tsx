import { LineShadowText } from '@/components/magicui/line-shadow-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import React from 'react'

type Props = {
  year: string
}

const GrandPrixListHeader = ({ year }: Props) => {
  return (
    <div className="f1-header bg-[#e10600] py-6 px-4 min-h-[144px]">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          F1 Grand Prix{" "}
          {year && (
            <LineShadowText className="font-f1-wide italic" shadowColor="white">
              {`${year}`}
            </LineShadowText>
          )}
        </h1>
        <TypingAnimation className="text-lg mt-2 opacity-90" duration={40}>
          {`Formula 1 Grand Prix Season ${year}`}
        </TypingAnimation>
      </div>
    </div>
  );
}

export default GrandPrixListHeader;