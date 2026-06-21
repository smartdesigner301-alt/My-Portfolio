import { GraduationCap, Briefcase } from "lucide-react";
import { Section, SectionLabel } from "../Section";

const education = [
  { period: "2021 — 2023", title: "General Secondary", place: "Center of Excellence High School, Pakistan" },
  { period: "2023 — 2025", title: "Higher Secondary", place: "Govt Post Graduate College, Jaranwala" },
];

const experience = [
  { period: "2023 — Present", title: "Full-Stack Developer", place: "Upwork" },
  { period: "2018 — 2023", title: "eLearning & Web Developer", place: "Fiverr.com" },
];

export function ResumeSection() {
  return (
    <Section id="resume">
      <SectionLabel>📄 Resume</SectionLabel>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        My <span className="text-gradient italic">Journey</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Timeline title="Education" icon={<GraduationCap className="h-5 w-5" />} items={education} />
        <Timeline title="Experience" icon={<Briefcase className="h-5 w-5" />} items={experience} />
      </div>
    </Section>
  );
}

function Timeline({ title, icon, items }: { title: string; icon: React.ReactNode; items: typeof education }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--neon)]/15 text-[var(--neon)]">
          {icon}
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="relative space-y-5 pl-6">
        <div className="absolute bottom-0 left-1.5 top-2 w-px bg-border" />
        {items.map((it, i) => (
          <div key={i} className="relative rounded-2xl glass p-5 transition-all hover:shadow-glow">
            <span className="absolute -left-[1.4rem] top-6 h-3 w-3 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" />
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon)]">{it.period}</p>
            <h4 className="mt-2 text-lg font-semibold">{it.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{it.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
