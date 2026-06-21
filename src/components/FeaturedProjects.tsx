import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_12px_var(--neon)]" />
            Selected Work
          </span>
          <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Featured <span className="text-gradient italic">Projects</span>
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-right">
          A curated set of systems I've designed and shipped — from AI automations to scalable e-commerce. Each is a deep case study.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className={i === 0 || i === projects.length - 1 ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} large={i === 0 || i === projects.length - 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, large }: { project: typeof projects[number]; large?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative block overflow-hidden rounded-3xl glass-strong transition-all duration-500 shadow-glow-hover"
      style={{ ["--neon" as any]: `oklch(0.72 0.2 ${project.accent})` }}
    >
      {/* image */}
      <div className={`relative overflow-hidden ${large ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
        {/* neon edge glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at center, oklch(0.72 0.2 ${project.accent} / 0.25), transparent 70%)`,
          }}
        />
        {/* floating category */}
        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/80">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: `oklch(0.72 0.2 ${project.accent})`,
              boxShadow: `0 0 10px oklch(0.72 0.2 ${project.accent})`,
            }}
          />
          {project.category}
        </div>
      </div>

      {/* content */}
      <div className="relative flex flex-col gap-5 p-7 md:p-9">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 gap-2 text-2xl" aria-hidden>
            {project.icons.map((ic, i) => (
              <span key={i} className="opacity-80">{ic}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border/60 pt-5">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Case Study
          </span>
          <span
            className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
            style={{ color: `oklch(0.82 0.15 ${project.accent})` }}
          >
            View Case Study
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
