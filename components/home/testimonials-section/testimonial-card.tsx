import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  author: string;
  isMobile?: boolean;
}

export function TestimonialCard({ text, author, isMobile = false }: TestimonialCardProps) {
  const containerPadding = isMobile ? 'px-3 py-4' : 'px-[78px] py-[26px]';
  const quoteIconSize = isMobile ? 'w-4 h-4' : 'w-8 h-8';
  const textSize = isMobile ? 'text-xs' : 'text-base';
  const authorSize = isMobile ? 'text-[10px]' : 'text-sm';
  const ratingSize = isMobile ? 'w-2.5 h-2.5' : 'w-4 h-4';
  const airbnbLogoSize = isMobile ? 12 : 20;
  const spacing = isMobile ? 'mb-2 pb-2' : 'mb-4 pb-4';

  return (
    <div className="border border-[var(--jrr-dark-beige)] w-full h-full">
      <div className={`flex flex-col items-center min-h-full ${containerPadding}`}>
        {/* Quote Icon */}
        <Image
          src="/home-page/quote.svg"
          alt="Quote"
          width={32}
          height={32}
          className={`${quoteIconSize} mb-2 sm:mb-4`}
        />

        {/* Testimonial Text */}
        <div className={`w-full text-center border-b border-[var(--jrr-dark-beige)] ${spacing} flex-grow`}>
          <p className={textSize}>{text}</p>
        </div>

        {/* Reviewer Name */}
        <p className={`font-medium ${spacing} ${authorSize}`}>{author}</p>

        {/* Ratings and Airbnb Logo */}
        <div className="flex items-center gap-1.5">
          <Image
            src="/home-page/airbnb-brands-solid.svg"
            alt="Airbnb"
            width={airbnbLogoSize}
            height={airbnbLogoSize}
          />
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`fill-[var(--jrr-yellow)] ${ratingSize}`}
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.928 6.515L20 8.438l-5 4.85.944 7.712L10 17.3l-5.944 3.7L5 13.288 0 8.438l7.072-.923L10 1z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}