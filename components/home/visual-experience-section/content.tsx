"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Gallery } from './gallery';

const testimonials = [
  { text: "The snaps that you see, is exactly what you will get.", author: "Sutanu" },
  { text: "The location images were the main reason we took a liking to this cottage-like homestay along the river.", author: "Anubhav" }
];

export function Content() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalTime = 8000;
    const fadeTime = 1000;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, fadeTime);
      
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* For screens larger than 320px */}
      <div className="hidden sm:block">
        <div className="flex flex-col mb-16">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-normal mb-8 text-[var(--jrr-blue)]">
            Experience Serenity<br /> Exactly as Shown
          </h2>

          {/* Testimonial Container */}
          <div className="w-full max-w-md h-24 relative">
            <div 
              className={`
                flex items-start gap-4
                transition-opacity duration-1000 ease-in-out
                ${isVisible ? 'opacity-90' : 'opacity-0'}
              `}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-6 h-6">
                <Image
                  src="/home-page/testimonial_point_icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Testimonial Text */}
              <div className="flex-1">
                <p className="text-base text-[var(--jrr-black)] mb-2">
                &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                <p className="text-sm text-[var(--jrr-black)]">
                  – {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery for larger screens */}
        <Gallery />
      </div>

      {/* For 320px screens */}
      <div className="sm:hidden">
        {/* Headline */}
        <h2 className="text-2xl font-bold mb-6 text-[var(--jrr-blue)]">
          Experience Serenity Exactly as Shown
        </h2>

        {/* Gallery */}
        <div className="mb-8">
          <Gallery />
        </div>

        {/* Testimonials for mobile */}
        <div className="space-y-6">
          <div 
            className={`
              transition-opacity duration-1000 ease-in-out
              ${isVisible ? 'opacity-90' : 'opacity-0'}
            `}
          >
            {/* Testimonial Container */}
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-4 h-4">
                <Image
                  src="/home-page/testimonial_point_icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Testimonial Text */}
              <div className="flex-1  h-16">
                <p className="text-sm text-[var(--jrr-black)] mb-1">
                &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                <p className="text-xs text-[var(--jrr-black)]">
                  – {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
