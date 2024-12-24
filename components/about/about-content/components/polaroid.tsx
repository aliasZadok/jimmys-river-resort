'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PolaroidProps {
  rotation: number;
  translateX: number;
  translateY: number;
  zIndex: number;
  isMobile: boolean;
  imagePath: string;
}

export function Polaroid({
  rotation,
  translateX,
  translateY,
  zIndex,
  isMobile,
  imagePath
}: PolaroidProps) {
  const [isActive, setIsActive] = useState(false);
  
  // Dimensions for different screen sizes
  const dimensions = {
    mobile: {
      container: { width: 100, height: 125 },
      image: { width: 88, height: 95 },
      spacing: { padding: 6, marginBottom: 8, bottomHeight: 16 }
    },
    tablet: {
      container: { width: 125, height: 156 },
      image: { width: 110, height: 119 },
      spacing: { padding: 8, marginBottom: 10, bottomHeight: 20 }
    },
    desktop: {
      container: { width: 190, height: 237 },
      image: { width: 167, height: 180 },
      spacing: { padding: 12, marginBottom: 16, bottomHeight: 30 }
    }
  };

  // Select dimensions based on screen size
  const { container, image, spacing } = isMobile ? 
    (window.innerWidth <= 375 ? dimensions.mobile : dimensions.tablet) : 
    dimensions.desktop;

  const getTransform = () => {
    if (isActive) {
      const scaleValue = isMobile ? 1.15 : 1.1;
      const translateYOffset = isMobile ? 
        (window.innerWidth <= 375 ? -15 : -20) : 
        -32;
      return `
        rotate(${rotation - 8}deg) 
        translate(${translateX}px, ${translateY + translateYOffset}px) 
        scale(${scaleValue})
      `;
    }
    return `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`;
  };

  const handleInteraction = (active: boolean) => {
    setIsActive(active);
  };

  return (
    <div
      className="absolute bg-[var(--jrr-dark-beige)] cursor-pointer transition-all duration-300"
      style={{
        width: `${container.width}px`,
        height: `${container.height}px`,
        padding: `${spacing.padding}px`,
        transform: getTransform(),
        zIndex: isActive ? 40 : zIndex,
        boxShadow: isActive 
          ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
          : '-2px 4px 12px rgba(0, 0, 0, 0.15), -1px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      onClick={() => handleInteraction(!isActive)}
      onMouseEnter={isMobile ? undefined : () => handleInteraction(true)}
      onMouseLeave={isMobile ? undefined : () => handleInteraction(false)}
    >
      <div
        style={{
          width: `${image.width}px`,
          height: `${image.height}px`,
          marginBottom: `${spacing.marginBottom}px`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Image
          src={imagePath}
          alt="Brigadier Jamwal"
          fill
          className="object-cover"
          sizes={`${image.width}px`}
          priority
        />
      </div>
      <div
        className="bg-[var(--jrr-dark-beige)]"
        style={{ height: `${spacing.bottomHeight}px` }}
      />
    </div>
  );
}