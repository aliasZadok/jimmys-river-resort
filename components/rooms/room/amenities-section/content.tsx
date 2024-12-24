'use client';

import Image from 'next/image';
import { AmenityCard } from './amenity-card';
import { useMediaQuery } from '@/components/home/testimonials-section/use-media-query';
import { amenities } from './data';

export function Content() {
  const isMobile = useMediaQuery('(max-width: 480px)');
  
  return (
    <div className={`
      container
      ${isMobile ? '' : 'grid grid-cols-[31px_1fr_31px] md:grid-cols-[40px_1fr_40px] items-center gap-8 md:gap-12 lg:gap-16'}
    `}>
      {/* Left Pattern - Hidden on mobile */}
      {!isMobile && (
        <div className="relative w-full hidden sm:block">
          <div className="pb-[1683%]" />
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/room-page/vertical_pattern.svg"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 31px, (max-width: 1024px) 40px, 40px"
            />
          </div>
        </div>
      )}

      {/* Middle Content Column */}
      <div className="w-full flex flex-col space-y-8 sm:space-y-12 md:space-y-16">
        {/* Section Title - Left aligned on mobile, centered on larger screens */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--jrr-blue)] text-left sm:text-center">
          Room Amenities
        </h2>

        {/* Amenities Grid/Scroll Container */}
        {isMobile ? (
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="inline-flex gap-4 pb-4 px-1">
              {amenities.map((amenity, index) => (
                <div key={index} className="w-[260px] flex-none">
                  <AmenityCard
                    icon={amenity.icon}
                    title={amenity.title}
                    description={amenity.description}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {amenities.map((amenity, index) => (
              <AmenityCard
                key={index}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Pattern - Hidden on mobile */}
      {!isMobile && (
        <div className="relative w-full hidden sm:block">
          <div className="pb-[1683%]" />
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/room-page/vertical_pattern.svg"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 31px, (max-width: 1024px) 40px, 40px"
            />
          </div>
        </div>
      )}
    </div>
  );
}