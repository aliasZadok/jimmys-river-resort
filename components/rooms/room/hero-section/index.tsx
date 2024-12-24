import Image from 'next/image';

interface HeroSectionProps {
  title: string;
}

export function HeroSection({ title }: HeroSectionProps) {
  return (
    <section className="relative h-[558px] w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/rooms-landing-page/hero-bg.jpg"
          alt="Scenic view of hotel rooms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}