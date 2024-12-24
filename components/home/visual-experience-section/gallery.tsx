import Image from 'next/image';

const galleryImages = [
  {
    src: 'jrr_1.jpg',
    alt: 'The main building of Jimmy\'s River Resort Chamba, a multi-story structure with distinctive architecture, surrounded by lush greenery and scenic hills.'  // Placeholder for JRR exterior view
  },
  {
    src: 'jrr_2.jpg',
    alt: 'Jimmy\'s River Resort Chamba, nestled among verdant surroundings, with its vibrant rooftop standing out against the clear blue sky and rolling hills.'  // Placeholder for JRR another angle
  },
  {
    src: 'jrr_and_neighbours.jpg',
    alt: 'A breathtaking aerial view of Jimmy\'s River Resort Chamba, showcasing its central building amidst green fields, with the River Ravi flowing through a tranquil valley surrounded by wooded hills.'  // Placeholder for JRR and surrounding area
  },
  {
    src: 'jrr_front_lawn.jpg',
    alt: 'The peaceful front lawn of Jimmy\'s River Resort Chamba, featuring manicured hedges, vibrant trees, and a serene garden setting ideal for relaxation.'  // Placeholder for front lawn view
  },
  {
    src: 'private_balcony.jpg',
    alt: 'Private balcony at Jimmy\'s River Resort Chamba, featuring a cozy outdoor seating area with white railings, overlooking lush greenery and hills under an overcast sky.'  // Placeholder for private balcony
  },
  {
    src: 'reception.jpg',
    alt: 'Bright and spacious reception area at Jimmy\'s River Resort Chamba, showcasing wooden furniture, a potted plant, and large windows offering serene views of the River Ravi and surrounding greenery.'  // Placeholder for reception area
  },
  {
    src: 'river_ravi.jpg',
    alt: 'Scenic riverside at Jimmy\'s River Resort Chamba, with a couple walking under an umbrella along the smooth stones of the River Ravi, framed by misty hills and lush vegetation.'  // Placeholder for River Ravi view
  },
  {
    src: 'jrr_raft.png',
    alt: 'Rafting staff at Jimmy\'s River Resort Chamba, seated in a bright blue inflatable raft on the calm waters of the River Ravi with a misty natural backdrop.'  // Placeholder for room view 5
  },
  {
    src: 'room_1.jpg',
    alt: 'Spacious and well-lit room at Jimmy\'s River Resort Chamba, featuring a cozy double bed, wooden furniture, and a seating area by large windows with blue curtains.'  // Placeholder for room view 1
  },
  {
    src: 'room_2.jpg',
    alt: 'A wide view of a comfortable room at Jimmy\'s River Resort Chamba, showcasing sleek tiled floors, a double bed, and access to an outdoor area through the hallway.'  // Placeholder for room view 2
  },
  {
    src: 'room_3.jpg',
    alt: 'Bright and airy room at Jimmy\'s River Resort Chamba with large windows opening to a private balcony offering stunning views of the River Ravi and lush hills.'  // Placeholder for room view 3
  },
  {
    src: 'room_4.jpg',
    alt: 'Elegant room at Jimmy\'s River Resort Chamba, featuring a queen-size bed with floral linens, a cozy seating area, and plenty of natural light streaming through large windows.'  // Placeholder for room view 4
  },
  {
    src: 'room_5.jpg',
    alt: 'Spacious resort room at Jimmy\'s River Resort Chamba, showcasing modern amenities, a comfortable bed, and direct access to an outdoor area with scenic views.'  // Placeholder for room view 5
  }
];

export function Gallery() {
  return (
    <div className="relative w-full overflow-x-auto pb-6 sm:pb-8 scrollbar-hide">
      <div className="flex gap-4 sm:gap-6">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="relative flex-none w-[240px] sm:w-[300px] aspect-[3/4] bg-[var(--jrr-beige)]"
          >
            <Image
              src={`/home-page/gallery/${image.src}`}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 240px, 300px"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}