import Image from 'next/image';

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/home-page/hero-bg.jpg"
        alt="Scenic view of lush green pastures at Jimmy's River Resort Chamba, featuring grazing cows against a backdrop of dense pine forests under a misty sky."
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}