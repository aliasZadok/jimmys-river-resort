import { Background } from './background';

export function HeroSection() {
  return (
    <section className="relative h-[558px] w-full">
      <Background />
      <div className="absolute inset-0 flex items-end">
        <div className="container mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white">
            Rooms
          </h1>
        </div>
      </div>
    </section>
  );
}