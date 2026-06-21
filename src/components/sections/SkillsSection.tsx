import { Section, SectionLabel } from "../Section";

const skills = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js / TanStack", level: 88 },
  { name: "OpenAI / LLMs", level: 90 },
  { name: "PostgreSQL / MongoDB", level: 85 },
  { name: "WordPress / PHP", level: 88 },
  { name: "Shopify / Liquid", level: 82 },
  { name: "REST & GraphQL APIs", level: 90 },
  { name: "Tailwind CSS", level: 95 },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionLabel>⚡ My Skills</SectionLabel>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        My <span className="text-gradient italic">Skills</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {skills.map((s, i) => (
          <div key={s.name} className="rounded-2xl glass p-5">
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs text-[var(--neon)]">{s.level}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-2)] shadow-[0_0_10px_var(--neon)] transition-all duration-1000"
                style={{ width: `${s.level}%`, transitionDelay: `${i * 60}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
