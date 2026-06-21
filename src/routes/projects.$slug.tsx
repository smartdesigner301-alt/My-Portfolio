import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Case Study | Nrz Malik` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — Case Study` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm text-muted-foreground underline">Back home</Link>
      </div>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const project = Route.useLoaderData() as Project;
  const accent = project.accent;
  const neon = `oklch(0.72 0.2 ${accent})`;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ ["--neon" as any]: neon }}>
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: neon, boxShadow: `0 0 12px ${neon}` }} />
              {project.category}
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {project.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Full-width hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto mt-16 max-w-7xl px-4 md:px-6"
        >
          <div className="relative overflow-hidden rounded-3xl glass-strong">
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-60"
              style={{ background: `radial-gradient(ellipse at center, ${neon}33, transparent 70%)` }}
            />
            <img
              src={project.image}
              alt={project.title}
              width={1920}
              height={1200}
              className="relative aspect-[16/9] w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Story sections */}
      <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Section index="01" label="The Problem" title="Where it hurts" body={project.problem} neon={neon} />
        <Section index="02" label="The Solution" title="What we built" body={project.solution} neon={neon} />

        <BlockSection index="03" label="Features" title="What's inside" neon={neon}>
          <ul className="mt-8 space-y-4">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-4 rounded-2xl glass p-5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: neon, boxShadow: `0 0 10px ${neon}` }}
                />
                <span className="text-base leading-relaxed text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </BlockSection>

        <BlockSection index="04" label="Tech Stack" title="Built with" neon={neon}>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full glass px-5 py-2.5 text-sm font-medium"
                style={{ borderColor: `${neon}55` }}
              >
                {t}
              </span>
            ))}
          </div>
        </BlockSection>

        <BlockSection index="05" label="Outcome" title="The result" neon={neon}>
          <div
            className="mt-8 rounded-3xl glass-strong p-8 md:p-10"
            style={{ boxShadow: `0 0 80px -20px ${neon}` }}
          >
            <p className="text-xl leading-relaxed text-foreground/95 md:text-2xl">{project.outcome}</p>
          </div>
        </BlockSection>
      </article>

      {/* Next projects */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between">
            <h3 className="text-3xl font-semibold md:text-5xl">
              Keep <span className="text-gradient italic">exploring</span>
            </h3>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">All work →</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block overflow-hidden rounded-3xl glass-strong"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.category}</p>
                    <h4 className="mt-1 text-xl font-semibold">{p.title}</h4>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ index, label, title, body, neon }: { index: string; label: string; title: string; body: string; neon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span style={{ color: neon }}>{index}</span>
        <span className="h-px flex-1 bg-border" />
        <span>{label}</span>
      </div>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-5 text-lg leading-[1.7] text-foreground/80">{body}</p>
    </motion.div>
  );
}

function BlockSection({ index, label, title, neon, children }: { index: string; label: string; title: string; neon: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span style={{ color: neon }}>{index}</span>
        <span className="h-px flex-1 bg-border" />
        <span>{label}</span>
      </div>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {children}
    </motion.div>
  );
}
