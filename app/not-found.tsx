import Image from 'next/image';
import Link from 'next/link';
import { ErrorButton } from '@/components/ui/error-button';

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-[var(--jrr-dark-beige)] overflow-hidden">
      {/* Side Patterns */}
      <div className="fixed left-0 top-0 h-full w-8 sm:w-12 lg:w-16">
        <Image
          src="/room-page/vertical_pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="fixed right-0 top-0 h-full w-8 sm:w-12 lg:w-16">
        <Image
          src="/room-page/vertical_pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-8 space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Logo */}
          <div className="relative w-32 sm:w-40 lg:w-48 h-12 sm:h-16 lg:h-20">
            <Image
              src="/home-page/logo_2.svg"
              alt="Jimmy's River Resort"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* 404 */}
          <h1 
            className="text-3xl sm:text-4xl lg:text-7xl"
            style={{ 
              fontFamily: 'var(--font-caprasimo)',
              color: 'var(--jrr-red)'
            }}
          >
            404
          </h1>

          {/* Message Container */}
          <div className="space-y-6">
            <h2 
              className="text-lg sm:text-xl lg:text-2xl"
              style={{ 
                fontFamily: 'var(--font-caprasimo)',
                color: 'var(--jrr-blue)'
              }}
            >
              Lost Your Way?
            </h2>
            
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-[var(--jrr-blue)]"
              style={{ fontFamily: 'var(--font-caprasimo)' }}
            >
              This page seems to have drifted away like leaves on the Ravi.
              <br />
              Let&apos;s get you back to familiar shores.
            </p>
          </div>

          {/* Button */}
          <Link href="/" className="w-full max-w-md">
            <ErrorButton>
              <span style={{ fontFamily: 'var(--font-caprasimo)' }}>
                Return Home
              </span>
            </ErrorButton>
          </Link>
        </div>
      </div>
    </div>
  );
}