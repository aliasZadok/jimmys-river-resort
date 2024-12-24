"use client";

import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { TestimonialCard } from './testimonial-card';
import { useMediaQuery } from './use-media-query';

const testimonials = [
  {
    text: "The garden area was beautiful with exquisite seating arrangement and bonfire facility....Parking also available...accessibility to the place is convenient and location is very peaceful....",
    author: "Marshely"
  },
  {
    text: "We bumped into this property on Airbnb and it kind of suited to all our requirements-complete house/ section to stay, riverside accommodation, in-house live kitchen and most of all avoiding crowded touristy places.",
    author: "Sreeram"
  },
  {
    text: "Brigadier himself takes interest in the kitchen... wild boar delicacy prepared from Brigadier's family recipe, Nettles saag (who thought nettles are also edible), lovely parathas with an unusual salt made from 18 different ingredients.",
    author: "Sutanu"
  },
  {
    text: "Each meal was a feast, including his specials like - skilfully cooked dals and delicious parathas cooked on firewood, which we devoured. He had enough and more in vegetarian and non-vegetarian and took care of our preferences too.",
    author: "Avinash"
  },
  {
    text: "Location wise it's centrally located. If you're heading to Saach pass or Bharmour or just want to explore Chamba city without having the hustle bustle of the city in your face, everything is a one day trip from here.",
    author: "Aayushi"
  },
  {
    text: "The house is located at a great location overlooking the river, huge lawn at front and big backyard...The location is central, close to local market and easy access to khajjiar as well. All in all a wonderful place to unwind and relax",
    author: "Ishneet"
  },
  {
    text: "Coming to Bring Jamwal sir, he has so much passion for his homestay, he tries to help his guests with itinerary and planning, and is such great company with his stories. We loved the time spent there...",
    author: "Sneha"
  },
  {
    text: "We left a day early to be back for the cricket world-cup match, the host promptly refunded the money for a day and wouldn't take no for an answer. These small personal touches makes this place all the more for a must-stay !",
    author: "Deepak"
  },
  {
    text: "We felt a very evident change in our health (mental and physical) having stayed on the banks of river ravi, eaten well, slept well and just generally been very well. The beauty of slow living.",
    author: "Arya"
  }
];

export function Content() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const isMobile = useMediaQuery('(max-width: 480px)');

  const updateArrowVisibility = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
      updateArrowVisibility();
      return () => container.removeEventListener('scroll', updateArrowVisibility);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const NavigationArrow = ({ 
    direction, 
    visible 
  }: { 
    direction: 'left' | 'right', 
    visible: boolean 
  }) => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    const isDisabled = !visible;
    
    return (
      <button
        onClick={() => scroll(direction)}
        disabled={isDisabled}
        className={`
          flex-none
          bg-[var(--jrr-red)] rounded-full 
          p-1.5 sm:p-2
          transition-all duration-300 ease-in-out
          ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}
          hover:bg-[var(--jrr-red)]/90
          disabled:hover:bg-[var(--jrr-red)]
          self-center
        `}
        aria-label={`Scroll ${direction}`}
      >
        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--jrr-beige)]" />
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--jrr-blue)] mb-8 sm:mb-16">
        What Our Guests Are Saying
      </h2>

      <div className="flex gap-4">
        {/* Navigation Arrows - Same position for both mobile and desktop */}
        <NavigationArrow direction="left" visible={showLeftArrow} />
        
        {/* Testimonials Container */}
        <div className="flex-1 overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  flex-none
                  ${isMobile ? 'w-full' : 'w-[calc(50%-16px)]'}
                `}
                style={{ scrollSnapAlign: 'start' }}
              >
                <TestimonialCard 
                  text={testimonial.text}
                  author={testimonial.author}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        </div>

        <NavigationArrow direction="right" visible={showRightArrow} />
      </div>
    </div>
  );
}