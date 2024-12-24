import Image from 'next/image';

export function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Row 1: Headline - Left aligned on mobile, centered on larger screens */}
      <div className="text-left sm:text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--jrr-blue)]">
          We Care About Your<br className="hidden sm:block"/> Comfort and Safety
        </h2>
      </div>

      {/* Row 2: Grid Layout - 2x2 on mobile, 4x1 on larger screens */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Column 1 - Wildlife Encounters */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-6">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[90px] md:h-[90px]">
            <Image
              src="/home-page/wildlife.svg"
              alt="Wildlife icon"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 90px"
            />
          </div>
          <p className="text-[var(--jrr-black)] text-xs sm:text-sm md:text-base">
            <strong className="block text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Wildlife Encounters</strong>
            Our grounds are carefully monitored to ensure safety from wildlife intrusion.
          </p>
        </div>

        {/* Column 2 - Hygiene Standards */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-6">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[90px] md:h-[90px]">
            <Image
              src="/home-page/hygiene.svg"
              alt="Hygiene icon"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 90px"
            />
          </div>
          <p className="text-[var(--jrr-black)] text-xs sm:text-sm md:text-base">
            <strong className="block text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Hygiene Standards</strong>
            High hygiene standards are maintained in all areas.
          </p>
        </div>

        {/* Column 3 - Food Quality */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-6">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[90px] md:h-[90px]">
            <Image
              src="/home-page/veggies.svg"
              alt="Food quality icon"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 90px"
            />
          </div>
          <p className="text-[var(--jrr-black)] text-xs sm:text-sm md:text-base">
            <strong className="block text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Food Quality</strong>
            Locally sourced, organic ingredients for a safe and flavourful dining experience.
          </p>
        </div>

        {/* Column 4 - Location & Accessibility */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-6">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[90px] md:h-[90px]">
            <Image
              src="/home-page/map.svg"
              alt="Location icon"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 90px"
            />
          </div>
          <p className="text-[var(--jrr-black)] text-xs sm:text-sm md:text-base">
            <strong className="block text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Location & Accessibility</strong>
            Close enough to enjoy the town, far enough to disconnect completely.
          </p>
        </div>
      </div>
    </div>
  );
}