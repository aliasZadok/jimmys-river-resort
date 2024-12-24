import { ReactNode } from 'react';
import Image from 'next/image';

interface CircularButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'small' | 'extra-small';
}

export function CircularButton({ 
  children, 
  onClick, 
  className = '',
  size = 'default'
}: CircularButtonProps) {
  // Size mappings for outer circle
  const outerSizes = {
    'default': 'w-44 h-44',
    'small': 'w-[145px] h-[145px]',
    'extra-small': 'w-[90px] h-[90px]'
  };

  // Size mappings for inner button
  const innerSizes = {
    'default': 'w-36 h-36',
    'small': 'w-[116px] h-[116px]',
    'extra-small': 'w-[72px] h-[72px]'
  };

  // Size mappings for hover transform calculations
  const hoverPositions = {
    'default': 'group-hover:bottom-[calc(50%-4.5rem)] group-hover:right-[calc(50%-4.5rem)]',
    'small': 'group-hover:bottom-[calc(50%-3.625rem)] group-hover:right-[calc(50%-3.625rem)]',
    'extra-small': 'group-hover:bottom-[calc(50%-2.25rem)] group-hover:right-[calc(50%-2.25rem)]'
  };

  // Text size adjustments
  const textSizes = {
    'default': 'text-sm',
    'small': 'text-sm',
    'extra-small': 'text-xs'
  };

  return (
    <div className={`
      relative 
      inline-flex 
      items-center 
      justify-center 
      group
      ${outerSizes[size]}
    `}>
      {/* Circular outline */}
      <div 
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: 'var(--jrr-red)' }}
      />
      
      {/* Pattern image with delayed fade-in */}
      <div className="
        absolute 
        inset-0 
        rounded-full 
        overflow-hidden
        opacity-0
        transition-opacity
        duration-300
        delay-300
        group-hover:opacity-100
      ">
        <Image
          src="/home-page/pattern_5.png"
          alt="Decorative pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Main button */}
      <button 
        onClick={onClick}
        style={{
          backgroundColor: 'var(--jrr-yellow)',
          color: 'var(--jrr-red)'
        }}
        className={`
          absolute
          ${innerSizes[size]}
          flex items-center justify-center
          rounded-full
          font-normal
          ${textSizes[size]}
          tracking-wider
          z-10
          
          bottom-0
          right-0
          ${hoverPositions[size]}
          
          group-hover:scale-90
          transition-all
          duration-300
          ease-in-out
          
          ${className}
        `}
      >
        {children}
      </button>
    </div>
  );
}