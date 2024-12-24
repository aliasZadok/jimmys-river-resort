import { RoomCategoryCard } from './components/room-category-card';

const roomCategories = [
  {
    imageSrc: '/rooms-landing-page/family_rooms.jpg',
    category: 'Family Rooms',
    bedType: 'King Beds',
    capacity: '4-5 People',
    slug: 'family-rooms',
  },
  {
    imageSrc: '/rooms-landing-page/deluxe_rooms.jpg',
    category: 'Deluxe Rooms',
    bedType: '1 King Bed',
    capacity: '2-3 People',
    slug: 'deluxe-rooms',
  },
];

export function Content() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roomCategories.map((room) => (
          <RoomCategoryCard
            key={room.category}
            {...room}
          />
        ))}
      </div>
    </div>
  );
}