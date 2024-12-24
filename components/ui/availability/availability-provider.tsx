'use client';

import { useState, createContext, useContext } from 'react';
import CheckAvailabilityDialog from './availability-dialog';

interface AvailabilityContextType {
  openDialog: (preSelectedRoom?: string) => void;
}

const AvailabilityContext = createContext<AvailabilityContextType | undefined>(undefined);

export function useAvailability() {
  const context = useContext(AvailabilityContext);
  if (!context) {
    throw new Error('useAvailability must be used within an AvailabilityProvider');
  }
  return context;
}

export function AvailabilityProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('');

  const openDialog = (preSelectedRoom?: string) => {
    setSelectedRoom(preSelectedRoom || '');
    setIsOpen(true);
  };

  return (
    <AvailabilityContext.Provider value={{ openDialog }}>
      {children}
      <CheckAvailabilityDialog 
        open={isOpen} 
        onOpenChange={setIsOpen}
        initialSelectedRoom={selectedRoom}
      />
    </AvailabilityContext.Provider>
  );
}
