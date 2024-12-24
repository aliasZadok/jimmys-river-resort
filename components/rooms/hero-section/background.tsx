import Image from 'next/image';

export function Background() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/rooms-landing-page/hero-bg.jpg"
        alt="Scenic view of hotel rooms at Jimmy's River Resort"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}