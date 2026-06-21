import { Section, SectionLabel } from "../Section";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionLabel>👤 About</SectionLabel>
      <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Pushing Boundaries in <span className="text-gradient italic">Digital Development</span>
      </h2>
      <p className="mt-8 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">
        Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies. I create fast, scalable, and user-focused solutions that combine technology, design, and innovation to deliver real business results.
      </p>

      <div className="mt-10 flex items-center gap-4 font-display italic text-2xl text-foreground/90">
        <span className="text-3xl text-[var(--neon)]">~</span> Shahzaib Ali
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl glass p-6">
            <div className="text-4xl font-semibold text-gradient md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
