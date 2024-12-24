'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CircularButton } from '@/components/ui/circular-button';
import { useAvailability } from '@/components/ui/availability';

export function Footer() {
  const pathname = usePathname();
  const shouldUseDarkBeige = pathname === '/about';
  const bgColor = shouldUseDarkBeige ? 'bg-[var(--jrr-dark-beige)]' : 'bg-[var(--jrr-beige)]';
  const { openDialog } = useAvailability();
  
  return (
    <footer className={`w-full relative ${bgColor} overflow-hidden`}>
      {/* Background Illustration */}
      <div className="absolute inset-0">
        {/* Mobile Illustration */}
        <div className="md:hidden w-full h-full">
          <div className="relative w-full pb-[175.61875%]">
            <Image
              src="/footer_illustration_mobile.svg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {/* Desktop Illustration */}
        <div className="hidden md:block w-full h-full">
          <div className="relative w-full pb-[94.08%]">
            <Image
              src="/footer_illustration.svg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative w-full">
        {/* Use same aspect ratio as illustrations */}
        <div className="relative w-full pb-[175.61875%] md:pb-[94.08%]" />
        
        <div className="absolute inset-0">
          <div className="container h-full flex flex-col justify-between">
            {/* Main Content Section */}
            <div className="flex-grow flex flex-col justify-end">
              <div className="space-y-6 md:space-y-8 mb-5">
                {/* Mobile Layout (320px) */}
                <div className="block md:hidden space-y-6">
                  {/* Title and Button */}
                  <div className="relative">
                    <h2 className="text-2xl font-normal text-[var(--jrr-dark-beige)] mb-4">
                      Ready for Your Riverside Escape?
                    </h2>
                    <div className="flex justify-end">
                      <CircularButton size="extra-small">
                        RESERVE NOW
                      </CircularButton>
                    </div>
                  </div>

                  {/* Logo and Two Column Layout */}
                  <div className="space-y-6">
                    {/* Logo */}
                    <div className="relative w-24 h-8">
                      <Image
                        src="/logo_3.svg"
                        alt="Jimmy's River Resort"
                        fill
                        className="object-contain object-left"
                        priority
                      />
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Column 1 */}
                      <div className="space-y-4">
                        <p className="text-xs text-[var(--jrr-beige)]">
                          Escape to Jimmy&apos;s River Resort on the banks of the Ravi River.
                        </p>
                        <div>
                          <p className="text-xs font-medium text-[var(--jrr-beige)] mb-1">Email</p>
                          <p className="text-xs text-[var(--jrr-beige)]">help<br/>@jimmysriverresort.com</p>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium text-[var(--jrr-beige)] mb-1">Phone</p>
                          <p className="text-xs text-[var(--jrr-beige)]">+91-9318751941</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[var(--jrr-beige)] mb-1">Address</p>
                          <p className="text-xs text-[var(--jrr-beige)]">Village Shalimar P O, Rajpura, Himachal Pradesh 176312</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Row 1: Title and Button */}
                  <div className="relative h-48 lg:h-40">
                    <h2 className="absolute top-0 left-0 text-4xl lg:text-5xl font-normal text-[var(--jrr-dark-beige)]">
                      Ready for Your<br /> Riverside Escape?
                    </h2>
                    
                    <div className="absolute bottom-0 right-0">
                      <CircularButton size="small" onClick={openDialog}>
                        RESERVE NOW
                      </CircularButton>
                    </div>
                  </div>

                  {/* Row 2: Two Column Layout */}
                  <div className="grid grid-cols-2 pb-20 gap-y-8">
                    {/* Column 1: Logo and Description */}
                    <div className="space-y-6">
                      <div className="relative w-32 h-12">
                        <Image
                          src="/logo_3.svg"
                          alt="Jimmy's River Resort"
                          fill
                          className="object-contain object-left"
                          priority
                        />
                      </div>
                      <p className="text-sm text-[var(--jrr-beige)]">
                        Escape to Jimmy&apos;s River Resort on the banks of the Ravi River, where local cuisine, serene views, and heartfelt hospitality await.
                      </p>
                    </div>

                    {/* Column 2: Contact Information */}
                    <div className="flex justify-end items-end gap-8">
                      <div>
                        <p className="text-sm font-medium text-[var(--jrr-beige)] mb-1">Phone</p>
                        <p className="text-sm text-[var(--jrr-beige)]">+91-9318751941</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--jrr-beige)] mb-1">Email</p>
                        <p className="text-sm text-[var(--jrr-beige)]">help<br/>@jimmysriverresort.com</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--jrr-beige)] mb-1">Address</p>
                        <p className="text-sm text-[var(--jrr-beige)]">Village Shalimar P O, Rajpura, Himachal Pradesh 176312</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credits Section - Will stick to bottom */}
            <div className="pb-1 md:pb-[8px] pt-6">
              <div className="text-center">
                <p className="text-xs md:text-sm text-[var(--jrr-green)]">
                  BRANDING BY{' '}
                  <Link 
                    href="https://studiounabridged.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Studio UA
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}