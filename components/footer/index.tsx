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
          <div className="relative w-full pb-[185%]">
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

      <div className="relative w-full">
        <div className="relative w-full pb-[185%] md:pb-[94.08%]" />
        
        <div className="absolute inset-0">
          <div className="container h-full flex flex-col justify-between">
            <div className="flex-grow flex flex-col justify-end">
              <div className="space-y-6 md:space-y-8 mb-5">
                {/* Mobile Layout (320px) */}
                <div className="block md:hidden space-y-6">
                  {/* Title and Button Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-normal text-[var(--jrr-dark-beige)]">
                      Ready for Your Riverside Escape?
                    </h2>
                    <div className="flex-shrink-0">
                      <CircularButton 
                        size="extra-small"
                        onClick={openDialog}
                      >
                        RESERVE NOW
                      </CircularButton>
                    </div>
                  </div>

                  {/* Logo and Info Columns */}
                  <div className="space-y-4 pb-10">
                    <div className="relative w-20 h-6">
                      <Image
                        src="/logo_3.svg"
                        alt="Jimmy's River Resort"
                        fill
                        className="object-contain object-left"
                        priority
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <p className="text-[10px] text-[var(--jrr-beige)]">
                          Escape to Jimmy&apos;s River Resort on the banks of the Ravi River.
                        </p>
                        <div>
                          <p className="text-[10px] font-medium text-[var(--jrr-beige)] mb-1">Email</p>
                          <p className="text-[10px] text-[var(--jrr-beige)]">help<br/>@jimmysriverresort.com</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] font-medium text-[var(--jrr-beige)] mb-1">Phone</p>
                          <p className="text-[10px] text-[var(--jrr-beige)]">+91-9318751941</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-medium text-[var(--jrr-beige)] mb-1">Address</p>
                          <p className="text-[10px] text-[var(--jrr-beige)]">Village Shalimar P O, Rajpura, Himachal Pradesh 176312</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Keep existing desktop layout */}
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
                  <div className="grid grid-cols-2 pb-20 gap-y-8">
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

            {/* Credits Section */}
            <div className="pb-1 md:pb-2 pt-4">
              <div className="text-center">
                <p className="text-[10px] md:text-sm text-[var(--jrr-green)]">
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