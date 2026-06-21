import { Download, Linkedin, Smartphone, Globe } from "lucide-react";
import { Section, SectionLabel } from "../Section";

export function HeroSection() {
  return (
    <Section id="home" className="pt-4 md:pt-8">
      <SectionLabel>🏠 Introduce</SectionLabel>
      <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
        Hi, I'm <span className="accent-text">Shahzaib</span> Ali
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
        <span className="font-semibold">Web Developer</span>
        <span className="text-muted-foreground"> | </span>
        <span className="font-semibold">React Native Developer</span>
        <span className="text-muted-foreground"> | </span>
        <span className="font-semibold">Digital Solutions Creator</span>
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies. I create fast, scalable, and user-focused solutions that combine technology, design, and innovation to deliver real business results.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <CTA primary icon={<Download className="h-4 w-4" />} href="/Shahzaib-Ali-CV.pdf" download>Download CV</CTA>
        <CTA icon={<Linkedin className="h-4 w-4" />} href="https://www.linkedin.com/in/shahzaib-al/">LinkedIn Profile</CTA>
        <CTA icon={<Globe className="h-4 w-4" />} href="#portfolio">Web Projects</CTA>
        <CTA icon={<Smartphone className="h-4 w-4" />} href="#portfolio">Mobile Apps</CTA>
      </div>
    </Section>
  );
}

function CTA({ children, icon, primary, href = "#", download }: { children: React.ReactNode; icon: React.ReactNode; primary?: boolean; href?: string; download?: boolean }) {
  const external = href.startsWith("http");
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all";
  const cls = primary
    ? `${base} bg-[var(--neon)] font-semibold text-background hover:scale-[1.03] hover:shadow-[0_0_24px_var(--neon)]`
    : `${base} border border-[var(--neon)]/40 font-medium text-[var(--neon)] hover:bg-[var(--neon)]/10 hover:shadow-[0_0_20px_-4px_var(--neon)]`;
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cls}
    >
      {icon}
      {children}
    </a>
  );
}
