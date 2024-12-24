import { ReactNode } from 'react';
import Image from 'next/image';

interface ActivityCardProps {
  stamp?: string;
  headline: ReactNode;
  subtext?: string;
  sideContent?: ReactNode;
  rotation?: number;
  disableHover?: boolean;
}

export function ActivityCard({
  stamp = '/home-page/jimmys_stamp.png',
  headline,
  subtext,
  sideContent,
  rotation = 0,
  disableHover = false,
}: ActivityCardProps) {
  return (
    <div 
      className={`
        relative w-full 
        ${!disableHover && 'group'}
      `} 
      style={{ 
        paddingBottom: 'calc(343 / 513 * 100%)',
        transform: `rotate(${rotation}deg)`
      }}
    >
      <div 
        className={`
          absolute 
          inset-0 
          bg-[var(--jrr-dark-beige)]
          transition-all
          duration-300
          ${!disableHover && 'group-hover:scale-105 group-hover:z-30'}
        `}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0">
          <Image
            src="/home-page/card_pattern.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Content container */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex"
          style={{ 
            width: 'calc(475 / 513 * 100%)', 
            height: 'calc(263.98 / 343 * 100%)' 
          }}
        >
          {/* Left column */}
          <div className="
            flex-1 
            flex 
            flex-col 
            justify-start 
            p-3 sm:p-6 md:p-8 
            border-r
            border-[#2B2A29]/30
          ">
            {/* Stamp and headline */}
            <div className="mb-2 sm:mb-4 md:mb-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 relative">
                <Image
                  src={stamp}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base sm:text-xl md:text-2xl font-normal text-[var(--jrr-blue)]">
                {headline}
              </h3>
            </div>

            {/* Optional subtext */}
            {subtext && (
              <p className="text-xs sm:text-base md:text-lg text-[var(--jrr-blue)]">{subtext}</p>
            )}
          </div>

          {/* Right column */}
          <div className="
            flex-1 
            flex 
            items-center 
            p-3 sm:p-6 md:p-8 
            text-[var(--jrr-black)]
            text-xs sm:text-base md:text-lg
          ">
            {sideContent}
          </div>
        </div>
      </div>
    </div>
  );
}