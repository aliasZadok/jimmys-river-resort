import { Content } from './content';

export function LocalFlavorSection() {
  return (
    <section className="bg-[var(--jrr-beige)] pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Content />
      </div>
    </section>
  );
}