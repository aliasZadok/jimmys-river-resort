import { HeroSection } from '@/components/rooms/hero-section';
import { CategoriesSection } from '@/components/rooms/categories-section';

export default function RoomsPage() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <CategoriesSection />
    </main>
  );
}