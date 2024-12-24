import Image from 'next/image';
import Link from 'next/link';

interface RoomCategoryCardProps {
  imageSrc: string;
  category: string;
  bedType: string;
  capacity: string;
  slug: string;
}

export function RoomCategoryCard({
  imageSrc,
  category,
  bedType,
  capacity,
  slug,
}: RoomCategoryCardProps) {
  return (
    <Link href={`/rooms/${slug}`} className="block">
      <div className="relative aspect-square w-full group cursor-pointer">
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={`${category} at Jimmy's River Resort`}
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex items-end p-6 md:p-8 lg:p-10">
          <div className="w-full grid grid-cols-12 gap-4 text-[var(--jrr-beige)]">
            {/* Category Name */}
            <div className="col-span-4 pr-4 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-normal leading-tight">
              {category}
            </div>
            
            {/* Bed Type */}
            <div className="col-span-4 flex items-center gap-3 justify-end">
              <Image
                src="/rooms-landing-page/bed_icon.svg"
                alt="Bed"
                width={0}
                height={0}
                className="w-4 md:w-5 lg:w-6 h-auto"
              />
              <span className="text-[0.85rem] md:text-[0.9rem] lg:text-[1rem]">
                {bedType}
              </span>
            </div>
            
            {/* Capacity */}
            <div className="col-span-4 flex items-center gap-3 justify-end">
              <Image
                src="/rooms-landing-page/person_icon.svg"
                alt="Capacity"
                width={0}
                height={0}
                className="w-4 md:w-5 lg:w-6 h-auto"
              />
              <span className="text-[0.85rem] md:text-[0.9rem] lg:text-[1rem]">
                {capacity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}