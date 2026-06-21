import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { R as Route, p as projects } from "./router-GQGaYGOn.js";
import "@tanstack/react-query";
function SiteHeader() {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 z-50 w-full", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass px-6 py-3 md:mt-6 md:px-8", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "font-display text-lg font-semibold tracking-tight", children: [
      "nrz",
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "malik" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "/#work", className: "transition-colors hover:text-foreground", children: "Work" }),
      /* @__PURE__ */ jsx("a", { href: "/#about", className: "transition-colors hover:text-foreground", children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "/#contact", className: "transition-colors hover:text-foreground", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/#contact",
        className: "rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105",
        children: "Let's talk"
      }
    )
  ] }) });
}
function CaseStudy() {
  const project = Route.useLoaderData();
  const accent = project.accent;
  const neon = `oklch(0.72 0.2 ${accent})`;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden", style: {
    ["--neon"]: neon
  }, children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 md:pt-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Back to all work"
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, className: "mt-10", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: {
              background: neon,
              boxShadow: `0 0 12px ${neon}`
            } }),
            project.category
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl", children: project.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl", children: project.subtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.98
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.9,
        delay: 0.1
      }, className: "relative mx-auto mt-16 max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl glass-strong", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-px rounded-3xl opacity-60", style: {
          background: `radial-gradient(ellipse at center, ${neon}33, transparent 70%)`
        } }),
        /* @__PURE__ */ jsx("img", { src: project.image, alt: project.title, width: 1920, height: 1200, className: "relative aspect-[16/9] w-full object-cover" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-3xl px-6 py-24 md:py-32", children: [
      /* @__PURE__ */ jsx(Section, { index: "01", label: "The Problem", title: "Where it hurts", body: project.problem, neon }),
      /* @__PURE__ */ jsx(Section, { index: "02", label: "The Solution", title: "What we built", body: project.solution, neon }),
      /* @__PURE__ */ jsx(BlockSection, { index: "03", label: "Features", title: "What's inside", neon, children: /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-4", children: project.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 rounded-2xl glass p-5", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-2 w-2 shrink-0 rounded-full", style: {
          background: neon,
          boxShadow: `0 0 10px ${neon}`
        } }),
        /* @__PURE__ */ jsx("span", { className: "text-base leading-relaxed text-foreground/90", children: f })
      ] }, f)) }) }),
      /* @__PURE__ */ jsx(BlockSection, { index: "04", label: "Tech Stack", title: "Built with", neon, children: /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: project.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full glass px-5 py-2.5 text-sm font-medium", style: {
        borderColor: `${neon}55`
      }, children: t }, t)) }) }),
      /* @__PURE__ */ jsx(BlockSection, { index: "05", label: "Outcome", title: "The result", neon, children: /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-3xl glass-strong p-8 md:p-10", style: {
        boxShadow: `0 0 80px -20px ${neon}`
      }, children: /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed text-foreground/95 md:text-2xl", children: project.outcome }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-3xl font-semibold md:text-5xl", children: [
          "Keep ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "exploring" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground", children: "All work →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2", children: otherProjects.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "group relative block overflow-hidden rounded-3xl glass-strong", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.title, loading: "lazy", width: 1280, height: 800, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: p.category }),
            /* @__PURE__ */ jsx("h4", { className: "mt-1 text-xl font-semibold", children: p.title })
          ] }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" })
        ] })
      ] }, p.slug)) })
    ] }) })
  ] });
}
function Section({
  index,
  label,
  title,
  body,
  neon
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-100px"
  }, transition: {
    duration: 0.6
  }, className: "mb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { style: {
        color: neon
      }, children: index }),
      /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border" }),
      /* @__PURE__ */ jsx("span", { children: label })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "mt-6 text-3xl font-semibold tracking-tight md:text-4xl", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-[1.7] text-foreground/80", children: body })
  ] });
}
function BlockSection({
  index,
  label,
  title,
  neon,
  children
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-100px"
  }, transition: {
    duration: 0.6
  }, className: "mb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { style: {
        color: neon
      }, children: index }),
      /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border" }),
      /* @__PURE__ */ jsx("span", { children: label })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "mt-6 text-3xl font-semibold tracking-tight md:text-4xl", children: title }),
    children
  ] });
}
export {
  CaseStudy as component
};
