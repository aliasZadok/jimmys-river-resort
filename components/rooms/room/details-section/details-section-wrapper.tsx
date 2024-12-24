'use client';

import { AvailabilityProvider } from '@/components/ui/availability';

interface DetailsSectionWrapperProps {
  children: React.ReactNode;
}

export function DetailsSectionWrapper({ children }: DetailsSectionWrapperProps) {
  return (
    <AvailabilityProvider>
      {children}
    </AvailabilityProvider>
  );
}