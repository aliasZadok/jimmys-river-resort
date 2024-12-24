"use client";

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

export function Content() {
  const [currentDelicacy, setCurrentDelicacy] = useState(0);
  const [currentStamp, setCurrentStamp] = useState(0);
  const [isDelicacyVisible, setIsDelicacyVisible] = useState(true);
  const [isStampVisible, setIsStampVisible] = useState(true);

  const delicacyImages = useMemo(() => [
    {
      src: '/home-page/chamba_delicacy_mutton.png',
      alt: 'Authentic Chha Gosht, a traditional Chamba delicacy meaning \'lamb cooked on charcoal,\' served at Jimmy\'s River Resort Chamba, featuring tender lamb pieces in a smoky, rich gravy garnished with fresh coriander.'
    },
    {
      src: '/home-page/chamba_delicacy_lotus.png',
      alt: 'Authentic Chamba delicacy of spicy lotus stem curry served at Jimmy\'s River Resort Chamba, prepared in a spicy tomato-based gravy and garnished with fresh coriander leaves.'
    }
  ], []);

  const stampImages = useMemo(() => [
    {
      src: '/home-page/chamba_stamp_2.png',
      alt: 'Artistic stamp design featuring Kali Elaichi (black cardamom) in bold black illustration with the text \'Kali Elaichi\' in green, marked with a circular Jimmy\'s River Resort insignia and a 60 denomination.'
    },
    {
      src: '/home-page/chamba_stamp_3.png',
      alt: 'Creative stamp design showcasing Chamba Chuk (red chili) in a striking red illustration, accompanied by the text \'Chamba Chuk\' in green, marked with Jimmy\'s River Resort\'s circular insignia and a 25 denomination.'
    }
  ], []);

  useEffect(() => {
    const intervalTime = 6000;
    const fadeTime = 300;
    const delicacyLength = delicacyImages.length;
    const stampLength = stampImages.length;

    const interval = setInterval(() => {
      // Handle delicacy image transition
      setIsDelicacyVisible(false);
      setTimeout(() => {
        setCurrentDelicacy((prev) => (prev + 1) % delicacyLength);
        setIsDelicacyVisible(true);
      }, fadeTime);

      // Handle stamp image transition
      setIsStampVisible(false);
      setTimeout(() => {
        setCurrentStamp((prev) => (prev + 1) % stampLength);
        setIsStampVisible(true);
      }, fadeTime);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [delicacyImages.length, stampImages.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start lg:items-center">
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--jrr-blue)]">
          Savor Authentic, <br className="hidden sm:block"/> Organic Meals
        </h2>

        <div className="relative lg:hidden">
          <div className="relative">
            <div className="aspect-[495.04/463.53] w-full">
              <div className={`transition-opacity duration-300 ${isDelicacyVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src={delicacyImages[currentDelicacy].src}
                  alt={delicacyImages[currentDelicacy].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div 
            className="absolute left-1/2 -translate-x-1/2 translate-y-1/2"
            style={{ bottom: '-1rem' }}
          >
            <div className="relative w-[120px] sm:w-[160px] aspect-square">
              <div className={`transition-opacity duration-300 ${isStampVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src={stampImages[currentStamp].src}
                  alt={stampImages[currentStamp].alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 lg:hidden" />

        <p className="text-base sm:text-lg md:text-xl text-[var(--jrr-black)]">
          At Jimmy&apos;s River Resort, every meal is a feast of unforgettable flavours, 
          hosted and lovingly curated by Brigadier Jamwal and his family. Tear into golden, 
          flaky parathas cooked over firewood, their smoky warmth pairing perfectly 
          with the zing of muli ki chutney. Scoop up wild boar delicacies, steeped 
          in family recipes, and relish the earthy richness of nettle saag. Every dish, 
          crafted from farm-fresh ingredients and served with heart, invites you to taste 
          the soul of Chamba.
        </p>

        <div className="space-y-4 sm:space-y-6 max-w-md">
          <div className="relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-0 w-4 sm:w-6 h-4 sm:h-6">
              <Image
                src="/home-page/testimonial_point_icon.svg"
                alt=""
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[var(--jrr-black)] mb-1">
              &quot;They provide the Chamba region&apos;s cuisine which is very hard to find anywhere else.&quot;
              </p>
              <p className="text-xs sm:text-sm text-[var(--jrr-black)]">
                – Sushit
              </p>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-0 w-4 sm:w-6 h-4 sm:h-6">
              <Image
                src="/home-page/testimonial_point_icon.svg"
                alt=""
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[var(--jrr-black)] mb-1">
              &quot;Another highlight was the food; the veggies are grown in their own field and are super fresh.&quot;
              </p>
              <p className="text-xs sm:text-sm text-[var(--jrr-black)]">
                – Ankur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full hidden lg:flex items-end justify-end">
        <div className="relative">
          <div className={`transition-opacity duration-300 ${isDelicacyVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={delicacyImages[currentDelicacy].src}
              alt={delicacyImages[currentDelicacy].alt}
              width={495}
              height={463}
            />
          </div>
          <div className="absolute -left-24 top-1/2 -translate-y-1/2">
            <div className={`transition-opacity duration-300 ${isStampVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={stampImages[currentStamp].src}
                alt={stampImages[currentStamp].alt}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}