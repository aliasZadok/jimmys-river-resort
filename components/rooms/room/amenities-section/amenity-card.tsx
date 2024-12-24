import Image from 'next/image';
import { AmenityCardProps } from './types';

export function AmenityCard({ icon, title, description, isMobile }: AmenityCardProps) {
  return (
    <div className={`
      border border-[var(--jrr-dark-beige)] border-opacity-20
      ${isMobile ? 'p-4 sm:p-6' : 'p-6 sm:p-8'}
      flex flex-col items-center text-center space-y-4 sm:space-y-6
      h-full
    `}>
      {/* Icon */}
      <div className={`
        relative
        ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}
      `}>
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
          sizes={isMobile ? "20px" : "24px"}
          priority
        />
      </div>

      {/* Title */}
      <h4 className={`
        font-normal text-[var(--jrr-blue)]
        ${isMobile ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}
      `}>
        {title}
      </h4>

      {/* Description */}
      <p className={`
        text-[var(--jrr-blue)] leading-relaxed
        ${isMobile ? 'text-[9px] sm:text-[10px]' : 'text-[10px] sm:text-xs'}
      `}>
        {description}
      </p>
    </div>
  );
}