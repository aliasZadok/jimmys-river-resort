'use client';

import Image from 'next/image';
import { DecorativePattern } from './components/decorative-pattern';
import { Letter } from './components/letter';

function VerticalLine() {
  return (
    <svg 
      className="w-[8px] sm:w-[12px] lg:w-[16px]" 
      height="100%" 
      viewBox="0 0 16 853" 
      preserveAspectRatio="none" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1.89082 0H0.352478V853H1.89082V0Z" fill="#D4BF9B"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4596 0H13.9213V853H15.4596V0Z" fill="#D4BF9B"/>
    </svg>
  );
}

export function Content() {
  return (
    <div className="h-full grid grid-cols-[16px_1fr_16px] sm:grid-cols-[32px_1fr_32px] lg:grid-cols-[56px_1fr_56px] gap-2 sm:gap-4 lg:gap-8 p-2 sm:p-3 lg:p-[0.9375rem]">
      {/* Row 1: Top Patterns */}
      <DecorativePattern />
      <div className="flex justify-center items-center w-full">
        <div className="w-full relative aspect-[20/1]">
          <Image
            src="/about-page/double_horizontal_lines.svg"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 480px) 250px, (max-width: 768px) 688px, (max-width: 1024px) 900px, 1012px"
          />
        </div>
      </div>
      <DecorativePattern />

      {/* Row 2: Letter Content */}
      <div className="flex justify-center h-full">
        <VerticalLine />
      </div>
      <div className="h-full flex items-center">
        <div className="w-full">
          <Letter />
        </div>
      </div>
      <div className="flex justify-center h-full">
        <VerticalLine />
      </div>

      {/* Row 3: Bottom Patterns */}
      <DecorativePattern />
      <div className="flex justify-center items-center w-full">
        <div className="w-full relative aspect-[20/1]">
          <Image
            src="/about-page/double_horizontal_lines.svg"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 480px) 250px, (max-width: 768px) 688px, (max-width: 1024px) 900px, 1012px"
          />
        </div>
      </div>
      <DecorativePattern />
    </div>
  );
}