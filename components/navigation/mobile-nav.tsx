import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const isGreenBackgroundRoute = pathname === '/' || 
    pathname === '/rooms' || 
    pathname === '/rooms/deluxe-rooms' || 
    pathname === '/rooms/family-rooms';

  const hamburgerColor = !isOpen 
    ? (isGreenBackgroundRoute ? 'var(--jrr-beige)' : 'var(--jrr-black)')
    : 'var(--jrr-beige)';

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-6 h-6 flex flex-col justify-center items-center z-50"
        aria-label="Toggle menu"
      >
        <div className={`
          w-6 h-4 flex flex-col justify-between
          transition-transform duration-300
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-full h-0.5 transition-colors duration-300"
              style={{ backgroundColor: hamburgerColor }}
            />
          ))}
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-x-0 top-0 z-40
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
          flex flex-col
          bg-[var(--jrr-green)]
        `}
      >
        <div className="container flex-1">
          {/* Header */}
          <div className="h-20 flex items-center justify-start">
            <Link href="/" className="relative w-32 h-12" onClick={() => setIsOpen(false)}>
              <Image
                src="/home-page/logo_1.svg"
                alt="Jimmy's River Resort"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="pt-12">
            <div className="flex flex-col space-y-8">
              {[
                { href: '/', label: 'HOME' },
                { href: '/about', label: 'ABOUT' },
                { href: '/rooms', label: 'ROOMS' },
              ].map(({ href, label }, index) => (
                <div 
                  key={href} 
                  className={index < 2 ? 'border-b-[0.3px] border-[var(--jrr-beige)]' : ''}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block pb-8
                      font-display
                      text-2xl
                      text-[var(--jrr-yellow)]
                      font-normal
                      tracking-wide
                    "
                    style={{ fontFamily: 'var(--font-caprasimo)' }}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Reserve Button */}
        <div className="container pb-20">
          <Button 
            variant="secondary" 
            shape="circle"
            onClick={() => setIsOpen(false)}
          >
            Reserve Your Room
          </Button>
        </div>
      </div>
    </div>
  );
}