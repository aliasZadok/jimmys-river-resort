import Image from 'next/image';

export function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--jrr-dark-beige)] mb-8 sm:mb-12 md:mb-16">
        Why Our Resort is<br className="hidden sm:block" /> Perfect for You
      </h2>

      {/* Three Column Layout for larger screens, Stack for mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[126px]">
        {/* First Column */}
        <div className="text-[var(--jrr-dark-beige)] text-base sm:text-lg md:text-xl">
          Wake up to the soothing sights and sounds of the river Ravi, where each moment brings you peace and calm. Find rest and renewal in nature&apos;s gentle embrace.
        </div>

        {/* Second Column */}
        <div className="space-y-6 sm:space-y-8">
          {/* Image */}
          <div className="aspect-[3/4] relative w-full">
            <Image
              src="/home-page/value_prop_1.jpg"
              alt="Picturesque view of the River Ravi at Jimmy's River Resort Chamba, with smooth stones scattered along the riverbank, lush green hills framing the scene, and distant mountains under a tranquil sky."
              fill
              className="object-cover"
            />
          </div>
          {/* Text visible on all screens */}
          <p className="text-[var(--jrr-dark-beige)] text-base sm:text-lg md:text-xl">
            Experience heartfelt hospitality where you&apos;re welcomed like family, sharing stories, local insights, and lovingly prepared meals that make you feel at home.
          </p>
        </div>

        {/* Third Column */}
        <div className="flex flex-col">
          {/* Text visible only on larger screens */}
          <p className="hidden sm:block text-[var(--jrr-dark-beige)] text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Discover the true taste of Chamba with authentic, home-cooked meals made from fresh, local ingredients—flavors you won&apos;t find anywhere else, prepared with care just for you.
          </p>
          {/* Image */}
          <div className="aspect-[3/4] relative w-full mb-6 sm:mb-0">
            <Image
              src="/home-page/value_prop_2.jpg"
              alt="Elegant tea setup at Jimmy's River Resort Chamba, showcasing ornate silver teaware on a patterned fabric mat and a plate of assorted Middle Eastern sweets, placed on a decorative white table."
              fill
              className="object-cover"
            />
          </div>
          {/* Text visible only on mobile */}
          <p className="sm:hidden text-[var(--jrr-dark-beige)] text-base">
            Discover the true taste of Chamba with authentic, home-cooked meals made from fresh, local ingredients—flavors you won&apos;t find anywhere else, prepared with care just for you.
          </p>
        </div>
      </div>
    </div>
  );
}