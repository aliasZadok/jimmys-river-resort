import Image from 'next/image';

export function DecorativePattern() {
  return (
    <div className="px-1 sm:px-2 w-full aspect-square">
      <div className="relative w-4 sm:w-[32px] lg:w-[40px] h-4 sm:h-[32px] lg:h-[40px] mx-auto">
        <Image
          src="/about-page/block_pattern_1.svg"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 480px) 16px, (max-width: 768px) 32px, 40px"
        />
      </div>
    </div>
  );
}