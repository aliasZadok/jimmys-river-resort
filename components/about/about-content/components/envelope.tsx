'use client';

import Image from 'next/image';
import { Polaroid } from './polaroid';
import { useMediaQuery } from '@/components/home/testimonials-section/use-media-query';

interface PolaroidProps {
  rotation: number;
  translateX: number;
  translateY: number;
  zIndex: number;
  imagePath: string;
}

export function Envelope() {
  const isMobile = useMediaQuery('(max-width: 480px)');

  const polaroids: PolaroidProps[] = [
    { 
      rotation: -8, 
      translateX: isMobile ? -25 : -40, 
      translateY: isMobile ? -15 : -20, 
      zIndex: 3,
      imagePath: '/home-page/gallery/jamwal_sir_1.jpg'
    },
    { 
      rotation: 5, 
      translateX: isMobile ? 5 : 10, 
      translateY: isMobile ? -20 : -30, 
      zIndex: 2,
      imagePath: '/home-page/gallery/jamwal_sir_2.jpg'
    },
    { 
      rotation: -3, 
      translateX: isMobile ? -15 : -20, 
      translateY: isMobile ? -25 : -40, 
      zIndex: 1,
      imagePath: '/home-page/gallery/jamwal_sir_3.jpg'
    }
  ];

  return (
    <div 
      className="
        absolute 
        bottom-0 
        left-1/2
        sm:left-auto
        sm:right-0 
        w-[250px]
        sm:w-[300px]
        md:w-[400px]
        lg:w-[500px]
        xl:w-[600px]
        aspect-[1.2/1]
        pointer-events-none
        transform
        -translate-x-1/2
        sm:translate-x-[30%]
        translate-y-[95%]
        sm:translate-y-[90%]
      "
    >
      {/* Back of envelope */}
      <div className="absolute inset-0 transform translate-x-[5%] translate-y-[-35.5%]">
        <Image
          src="/about-page/envelope_back.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 480px) 250px, (max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
          priority
        />
        {/* Polaroids container */}
        <div className="absolute inset-0 flex items-center justify-center translate-y-[30%] pointer-events-auto">
          {polaroids.map((props, index) => (
            <Polaroid key={index} {...props} isMobile={isMobile} />
          ))}
        </div>
      </div>

      {/* Front of envelope */}
      <div className="absolute inset-0">
        <Image
          src="/about-page/envelope_front.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 480px) 250px, (max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
          priority
        />
      </div>
    </div>
  );
}