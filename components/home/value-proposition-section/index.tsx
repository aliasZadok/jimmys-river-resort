import { Background } from './background';
import { Content } from './content';

export function ValuePropositionSection() {
  return (
    <section className="bg-[var(--jrr-green)]">
      <Background />
      <Content />
    </section>
  );
}