'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useAvailability } from '@/components/ui/availability';
import { usePathname } from 'next/navigation';

interface RoomDetailsProps {
  roomDetails: {
    title: string;
    bedType: string;
    capacity: string;
    price: string;
    imageSrc: string;
    description: string;
  };
}

export function DetailsSection({ roomDetails }: RoomDetailsProps) {
  const { openDialog } = useAvailability();
  const pathname = usePathname();

  const handleReservation = () => {
    // Extract the room type from the pathname
    const roomType = pathname.split('/').pop();
    
    // Only open with preselected room if we're on a valid room page
    if (roomType === 'deluxe-rooms' || roomType === 'family-rooms') {
      openDialog(roomType);
    } else {
      openDialog();
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Content */}
      <div className="bg-[var(--jrr-dark-beige)] flex items-center justify-center">
        <div className="max-w-xl w-full p-12 lg:p-16 xl:p-20 space-y-12">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-normal text-[var(--jrr-blue)]">
            Room Details
          </h2>

          {/* Sleeping Arrangements and Guests */}
          <div className="grid grid-cols-2 gap-8">
            {/* Sleeping Arrangements */}
            <div className="space-y-4">
              <Image
                src="/room-page/bed_icon.svg"
                alt="Bed"
                width={32}
                height={32}
              />
              <p className="text-[var(--jrr-blue)] font-medium text-xs sm:text-sm">
                Sleeping Arrangements
              </p>
              <p className="text-[var(--jrr-blue)]">{roomDetails.bedType}</p>
            </div>

            {/* Number of Guests */}
            <div className="space-y-4">
              <Image
                src="/room-page/person_icon.svg"
                alt="Person"
                width={32}
                height={32}
              />
              <p className="text-[var(--jrr-blue)] font-medium text-xs sm:text-sm">
                Number of Guests
              </p>
              <p className="text-[var(--jrr-blue)]">{roomDetails.capacity}</p>
            </div>
          </div>

          {/* Room Description */}
          <p className="text-[var(--jrr-blue)] leading-relaxed text-xs sm:text-sm">
            {roomDetails.description}
          </p>

          {/* Room Pricing */}
          <div className="space-y-2">
            <p className="text-[var(--jrr-blue)] text-xs sm:text-sm">Starting at</p>
            <h4 className="text-2xl font-normal text-[var(--jrr-blue)]">
              ₹{roomDetails.price}
            </h4>
            <p className="text-[var(--jrr-blue)] text-xs sm:text-sm">/ night</p>
          </div>

          {/* CTA Button - Full Width */}
          <div className="w-full flex justify-center">
            <Button 
              variant="green"
              onClick={handleReservation}
              shape="circle"
            >
              Reserve Your Room
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative aspect-square lg:aspect-auto lg:h-full">
        <Image
          src={roomDetails.imageSrc}
          alt={`${roomDetails.title} at Jimmy's River Resort`}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}