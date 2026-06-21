import { Code2, Server, Sparkles, ShoppingBag } from "lucide-react";
import { Section, SectionLabel } from "../Section";

const services = [
  {
    icon: Sparkles,
    title: "AI Automation",
    desc: "Custom AI agents, content automation, and workflow systems that scale your output without scaling your team.",
    count: "50+ Projects",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Premium WordPress and custom-built websites — fast, SEO-ready, and engineered to convert visitors into customers.",
    count: "100+ Projects",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Shopify storefronts with custom themes, checkout tuning, and integrations built for scale on day one.",
    count: "30+ Projects",
  },
  {
    icon: Server,
    title: "SaaS & APIs",
    desc: "End-to-end SaaS dashboards, billing, auth, and unified API hubs that connect everything your product talks to.",
    count: "20+ Projects",
  },
];

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionLabel>💼 Services</SectionLabel>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        My <span className="text-gradient italic">Specializations</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--neon)]/15 text-[var(--neon)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--neon)]">{s.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
