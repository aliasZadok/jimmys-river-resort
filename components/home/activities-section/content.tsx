'use client';

import { ActivityCard } from '@/components/ui/activity-card';
import { Button } from '@/components/ui/button';
import { useAvailability } from '@/components/ui/availability';

export function Content() {
  const { openDialog } = useAvailability();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Row 1: Headline and Body Text */}
      <div className="mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--jrr-blue)]">
          Embark on Your <br className="hidden sm:block"/> Riverside Adventure
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--jrr-black)]">
          Discover the wonders of Chamba with curated <br className="hidden md:block"/> experiences for every kind of traveler.
        </p>
      </div>

      {/* Row 2: Activity Cards */}
      <div className="relative">
        {/* Mobile Layout (320px) */}
        <div className="sm:hidden space-y-8">
          {/* Card 1 */}
          <div className="w-full">
            <ActivityCard
              headline={<>River Rafting<br/>on the Ravi</>}
              sideContent="Feel the adrenaline rush as you navigate the thrilling rapids of this majestic river, perfect for adventurers seeking excitement."
              rotation={-6}
              disableHover={true}
            />
          </div>

          {/* Card 2 */}
          <div className="w-full">
            <ActivityCard
              headline={<>Scenic Treks</>}
              sideContent="Explore breathtaking trails through lush forests and serene landscapes, offering a rejuvenating escape for nature lovers."
              rotation={5}
              disableHover={true}
            />
          </div>

          {/* Card 3 */}
          <div className="w-full">
            <ActivityCard
              headline={<>Immerse in<br/>Local Culture</>}
              sideContent="Step into Chamba's rich heritage with visits to hidden temples, vibrant local festivals, and age-old crafts that tell the stories of the region."
              rotation={-3}
              disableHover={true}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block relative h-[1000px] md:h-[800px] mb-16">
          {/* Desktop cards with original positioning */}
          <div className="absolute left-[15%] md:left-[0%] top-0 w-full md:w-[80%] lg:w-[60%] transform -rotate-6 hover:z-30">
            <ActivityCard
              headline={<>River Rafting<br/>on the Ravi</>}
              sideContent="Feel the adrenaline rush as you navigate the thrilling rapids of this majestic river, perfect for adventurers seeking excitement."
            />
          </div>

          <div className="absolute left-[20%] md:left-[40%] top-[250px] md:top-[0px] w-full md:w-[80%] lg:w-[60%] transform rotate-[24.39deg] z-20 hover:z-30">
            <ActivityCard
              headline={<>Scenic Treks</>}
              sideContent="Explore breathtaking trails through lush forests and serene landscapes, offering a rejuvenating escape for nature lovers."
            />
          </div>

          <div className="absolute left-[25%] md:left-[30%] top-[500px] md:top-[200px] w-full md:w-[80%] lg:w-[60%] transform -rotate-0 z-10 hover:z-30">
            <ActivityCard
              headline={<>Immerse in<br/>Local Culture</>}
              sideContent="Step into Chamba's rich heritage with visits to hidden temples, vibrant local festivals, and age-old crafts that tell the stories of the region."
            />
          </div>
        </div>
      </div>

      {/* Row 3: Call-to-Action Text */}
      <div className="mt-16 sm:mt-8 space-y-6 sm:space-y-8">
        {/* CTA Text Container - Left aligned on mobile, centered on larger screens */}
        <div className="text-left sm:text-center">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-normal text-[var(--jrr-blue)]">
            Your offbeat journey awaits—<br/> all just moments from your serene riverside retreat.
          </h4>
        </div>
        {/* Button Container - Always centered */}
        <div className="flex justify-center">
          <Button 
            variant="primary" 
            shape="circle"
            onClick={openDialog}
          >
            Reserve Your Room Now
          </Button>
        </div>
      </div>
    </div>
  );
}