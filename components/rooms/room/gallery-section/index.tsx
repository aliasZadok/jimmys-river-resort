import Image from 'next/image';

export function GallerySection() {
  // Array of image paths for the gallery
  const images = [
    '/room-page/room_1.jpg',
    '/room-page/room_2.jpg',
    '/room-page/room_3.jpg',
    '/room-page/room_4.jpg',
    '/room-page/room_5.jpg',
  ];

  return (
    <section className="w-full bg-[var(--jrr-beige)] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        {/* Mobile Layout (320px) - Vertical Stack */}
        <div className="block sm:hidden space-y-4">
          {images.map((src, index) => (
            <div 
              key={index}
              className="relative aspect-square w-full"
            >
              <Image
                src={src}
                alt={`Room view ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 480px) 100vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>

        {/* Tablet and Desktop Layout (3x3 Grid) */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Map through total 9 grid positions */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div 
              key={index} 
              className="relative aspect-square w-full"
            >
              {/* Only render images for the first 5 positions */}
              {index < images.length && (
                <Image
                  src={images[index]}
                  alt={`Room view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                  priority={index < 2}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}