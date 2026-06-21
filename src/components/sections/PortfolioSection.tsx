import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section, SectionLabel } from "../Section";

export function PortfolioSection() {
  return (
    <Section id="portfolio">
      <SectionLabel>🎨 Portfolio</SectionLabel>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        Featured <span className="text-gradient italic">Projects</span>
      </h2>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        A curated set of systems I've designed and shipped — each card opens a full case study.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
          >
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group relative block overflow-hidden rounded-3xl glass-strong transition-all duration-500 hover:-translate-y-1"
              style={{ ["--card-accent" as any]: `oklch(0.78 0.18 ${project.accent})` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at center, var(--card-accent), transparent 70%)`, opacity: 0.18 }}
                />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--card-accent)", boxShadow: "0 0 10px var(--card-accent)" }}
                  />
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight md:text-2xl">{project.title}</h3>
                  <div className="flex shrink-0 gap-1.5 text-lg" aria-hidden>
                    {project.icons.map((ic, j) => <span key={j} className="opacity-80">{ic}</span>)}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Case Study</span>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-all group-hover:gap-2.5"
                    style={{ color: "var(--card-accent)" }}
                  >
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
