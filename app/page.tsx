import { HeroSection } from '@/components/home/hero-section';
import { ValuePropositionSection } from '@/components/home/value-proposition-section';
import { VisualExperienceSection } from '@/components/home/visual-experience-section';
import { LocalFlavorSection } from '@/components/home/local-flavor-section';
import { VisitorAnxietiesSection } from '@/components/home/visitor-anxieties-section';
import { ActivitiesSection } from '@/components/home/activities-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuePropositionSection />
      <VisualExperienceSection />
      <LocalFlavorSection />
      <VisitorAnxietiesSection />
      <ActivitiesSection />
      <TestimonialsSection />
      {/* Other sections will be added here */}
    </main>
  );
}