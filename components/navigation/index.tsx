'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useScrollDirection } from './use-scroll-direction';
import { MobileNav } from './mobile-nav';
import { useAvailability } from '@/components/ui/availability';

export function Navigation() {
  const { openDialog } = useAvailability();
  const pathname = usePathname();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isAboutPage = pathname === '/about';
  const isGreenBackgroundRoute = pathname === '/' || 
    pathname === '/rooms' || 
    pathname === '/rooms/deluxe-rooms' || 
    pathname === '/rooms/family-rooms';
    
  const logoSrc = isAboutPage ? '/home-page/logo_2.svg' : '/home-page/logo_1.svg';
  const buttonVariant = isAboutPage ? 'darkOutline' : 'secondary';

  const backgroundClass = !isAtTop 
    ? isGreenBackgroundRoute 
      ? 'bg-[var(--jrr-green)]'
      : 'bg-[var(--jrr-blue)]/5 backdrop-blur-md'
    : '';

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        ${backgroundClass}
      `}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo - Hidden when mobile menu is open */}
        <Link href="/" className="relative w-32 h-12 md:block">
          <Image
            src={logoSrc}
            alt="Jimmy's River Resort"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              href="/" 
              currentPath={pathname}
              useLightTheme={isGreenBackgroundRoute}
            >
              HOME
            </NavLink>
            <NavLink 
              href="/about" 
              currentPath={pathname}
              useLightTheme={isGreenBackgroundRoute}
            >
              ABOUT
            </NavLink>
            <NavLink 
              href="/rooms" 
              currentPath={pathname}
              useLightTheme={isGreenBackgroundRoute}
            >
              ROOMS
            </NavLink>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />

          {/* Reserve Button - Desktop only */}
          <div className="hidden md:block">
            <Button 
              variant={buttonVariant}
              shape="circle"
              onClick={openDialog}
            >
              Reserve Your Room
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ 
  href, 
  currentPath, 
  useLightTheme,
  children 
}: { 
  href: string;
  currentPath: string;
  useLightTheme: boolean;
  children: React.ReactNode;
}) {
  const isActive = href === currentPath;
  
  return (
    <Link
      href={href}
      className={`
        text-sm font-medium tracking-wider
        transition-colors duration-200
        ${isActive 
          ? useLightTheme 
            ? 'text-[var(--jrr-yellow)]' 
            : 'text-[var(--jrr-blue)]'
          : useLightTheme
            ? 'text-[var(--jrr-beige)] hover:text-[var(--jrr-yellow)]'
            : 'text-[var(--jrr-black)] hover:text-[var(--jrr-blue)]'
        }
      `}
    >
      {children}
    </Link>
  );
}