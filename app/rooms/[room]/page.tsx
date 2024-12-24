import { HeroSection } from '@/components/rooms/room/hero-section';
import { DetailsSection } from '@/components/rooms/room/details-section';
import { AmenitiesSection } from '@/components/rooms/room/amenities-section';
import { GallerySection } from '@/components/rooms/room/gallery-section';
import { notFound } from 'next/navigation';

// Define room types and their details
const roomTypes = {
  'family-rooms': {
    title: 'Family Rooms',
    bedType: 'King Beds',
    capacity: '4-5 people',
    price: '4000',
    imageSrc: '/rooms-landing-page/family_rooms.jpg',
    description: 'Our family rooms are designed with your loved ones in mind, offering ample space for two guests along with a cradle or cot available on request. Enjoy a cozy lounge area, a private balcony for peaceful moments, and all the comforts you need for a relaxing and memorable family getaway.'
  },
  'deluxe-rooms': {
    title: 'Deluxe Rooms',
    bedType: '1 King Bed',
    capacity: '2-3 people',
    price: '3000',
    imageSrc: '/rooms-landing-page/deluxe_rooms.jpg',
    description: 'Experience a blend of relaxation and thoughtful design in our rooms. Enjoy cozy interiors with a private balcony to take in the serene views, a comfortable lounge setup perfect for unwinding, and a dedicated space to work or relax. Whether you\'re here for leisure or with family, every detail is designed to make your stay effortless and enjoyable.'
  },
} as const;

type RoomType = keyof typeof roomTypes;

function isValidRoomType(room: string): room is RoomType {
  return room in roomTypes;
}

interface Props {
  params: Promise<{ room: string }>;
}

export default async function RoomPage({ params }: Props) {
  // Await the params
  const resolvedParams = await params;
  
  if (!isValidRoomType(resolvedParams.room)) {
    notFound();
  }

  const roomDetails = roomTypes[resolvedParams.room];

  return (
    <main className="min-h-screen w-full">
      <HeroSection title={roomDetails.title} />
      <DetailsSection roomDetails={roomDetails} />
      <AmenitiesSection />
      <GallerySection />
    </main>
  );
}