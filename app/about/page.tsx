import { AboutContent } from '@/components/about/about-content';
import { Envelope } from '@/components/about/about-content/components/envelope';
import ExtendedSection from '@/components/about/extended-section';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--jrr-dark-beige)] py-20 overflow-x-hidden">
      <div className="flex justify-center items-center relative mx-auto px-4 sm:px-0" style={{ width: '1012px', maxWidth: '100%' }}>
        <div className="bg-[var(--jrr-beige)] overflow-hidden w-full">
          <AboutContent />
        </div>
        <Envelope />
      </div>
      <ExtendedSection />
    </main>
  );
}