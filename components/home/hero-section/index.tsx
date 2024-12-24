'use client';

import { Button } from '@/components/ui/button';
import { CircularButton } from '@/components/ui/circular-button';
import { HeroBackground } from './background';
import Link from 'next/link';
import { useAvailability } from '@/components/ui/availability';

export function HeroSection() {
  const { openDialog } = useAvailability();
  
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative w-full">
        {/* Hero Background with Dynamic Height */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <HeroBackground />
          
          {/* Content Overlay - Only visible above 320px */}
          <div className="hidden sm:block relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="absolute bottom-[8vh] left-0 right-0 mx-auto">
              <div className="flex flex-col gap-8">
                {/* Title and Reserve Button */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--jrr-dark-beige)] max-w-2xl">
                    Escape to a Serene Riverfront Resort
                  </h1>
                  <CircularButton onClick={openDialog}>RESERVE NOW</CircularButton>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-[var(--jrr-beige)]" />

                {/* Subheadline and CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-xl md:text-2xl text-[var(--jrr-beige)] max-w-2xl">
                  Find peace away from the crowds with local flavours, riverside views, and warm hospitality in Chamba, Himachal Pradesh.
                  </p>
                  <Link href="/rooms">
                    <Button variant="secondary" shape="circle">View Rooms</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content (320px) - Overlayed on Background */}
          <div className="sm:hidden absolute bottom-8 left-4 right-4">
            <div className="space-y-4">
              <h1 className="text-2xl font-normal text-[var(--jrr-dark-beige)]">
                Escape to a Serene Riverfront Retreat
              </h1>
              <Link href="/rooms">
                <Button variant="secondary" shape="circle">
                  View Rooms
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Footer Section (320px) */}
        <div className="sm:hidden bg-[var(--jrr-green)] px-4 py-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-base text-[var(--jrr-beige)] flex-1">
              Find peace away from the crowds with local flavours, riverside views, and warm hospitality in Chamba, Himachal Pradesh.
            </p>
            <CircularButton onClick={openDialog} size="small">
              RESERVE NOW
            </CircularButton>
          </div>
        </div>
      </section>
    </>
  );
}