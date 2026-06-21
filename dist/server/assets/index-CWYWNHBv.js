import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Linkedin, Github, MessageCircle, Mail, Home, User, FileText, Briefcase, Layers, LayoutGrid, MessageSquareQuote, Download, Globe, Smartphone, GraduationCap, Sparkles, Code2, ShoppingBag, Server, ArrowUpRight, ChevronLeft, ChevronRight, Phone, MapPin, Calendar } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { p as projects } from "./router-GQGaYGOn.js";
import "@tanstack/react-query";
const profileImg = "/My-Portfolio/assets/profile-BUqnR5y5.jpg";
function ProfileSidebar() {
  return /* @__PURE__ */ jsx("aside", { className: "lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]", children: /* @__PURE__ */ jsxs("div", { className: "relative h-full rounded-3xl glass-strong p-6 md:p-7 flex flex-col justify-between overflow-y-auto scrollbar-none", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-shrink-0", children: [
      /* @__PURE__ */ jsx("span", { className: "font-signature text-3.5xl tracking-wide text-foreground/95 leading-none", children: "Shahzaib Ali" }),
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" }),
        "Available"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "my-5 flex-1 min-h-[140px] max-h-[330px] overflow-hidden rounded-2xl flex-shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: profileImg,
        alt: "Shahzaib Ali",
        width: 1024,
        height: 1024,
        className: "h-full w-full object-cover object-top"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base font-medium tracking-tight truncate", children: "smartdesigner301@gmail.com" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Punjab, Pakistan" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-border/60" }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
        "Birthday, ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "30 October 2006" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx(SocialBtn, { href: "https://www.linkedin.com/in/shahzaib-al/", label: "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx(SocialBtn, { href: "https://github.com/smartdesigner301-alt", label: "GitHub", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx(SocialBtn, { href: "https://wa.me/923091163940", label: "WhatsApp", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx(SocialBtn, { href: "mailto:smartdesigner301@gmail.com", label: "Email", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#contact",
          className: "flex items-center justify-center gap-2 rounded-full bg-[var(--neon)] px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_var(--neon)]",
          children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            "HIRE ME!"
          ]
        }
      )
    ] })
  ] }) });
}
function SocialBtn({ href, label, children }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": label,
      className: "flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-[var(--neon)] hover:shadow-[0_0_18px_var(--neon)]",
      children
    }
  );
}
const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "portfolio", label: "Portfolio", icon: LayoutGrid },
  { id: "testimonial", label: "Testimonial", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail }
];
function RightNavRail() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 3;
      let current = "home";
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("nav", { className: "fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-1 rounded-full glass-strong px-2 py-3", children: items.map((item) => {
    const Icon = item.icon;
    const isActive = active === item.id;
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href: `#${item.id}`,
        "aria-label": item.label,
        className: "group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors",
        style: {
          color: isActive ? "var(--neon)" : void 0,
          background: isActive ? "oklch(1 0 0 / 0.06)" : void 0,
          boxShadow: isActive ? "0 0 18px -2px var(--neon)" : void 0
        },
        children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground", style: { color: isActive ? "var(--neon)" : void 0 } }),
          /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-12 whitespace-nowrap rounded-md glass px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100", children: item.label })
        ]
      },
      item.id
    );
  }) }) });
}
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
    /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" }),
    children
  ] });
}
function Section({ id, children, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      id,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: `scroll-mt-8 py-16 md:py-24 ${className}`,
      children
    }
  );
}
function HeroSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "home", className: "pt-4 md:pt-8", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "🏠 Introduce" }),
    /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl", children: [
      "Hi, I'm ",
      /* @__PURE__ */ jsx("span", { className: "accent-text", children: "Shahzaib" }),
      " Ali"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-2xl text-base leading-relaxed text-foreground/85", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Web Developer" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: " | " }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "React Native Developer" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: " | " }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Digital Solutions Creator" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground", children: "Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies. I create fast, scalable, and user-focused solutions that combine technology, design, and innovation to deliver real business results." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsx(CTA, { primary: true, icon: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), href: "/Shahzaib-Ali-CV.pdf", download: true, children: "Download CV" }),
      /* @__PURE__ */ jsx(CTA, { icon: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }), href: "https://www.linkedin.com/in/shahzaib-al/", children: "LinkedIn Profile" }),
      /* @__PURE__ */ jsx(CTA, { icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), href: "#portfolio", children: "Web Projects" }),
      /* @__PURE__ */ jsx(CTA, { icon: /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4" }), href: "#portfolio", children: "Mobile Apps" })
    ] })
  ] });
}
function CTA({ children, icon, primary, href = "#", download }) {
  const external = href.startsWith("http");
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all";
  const cls = primary ? `${base} bg-[var(--neon)] font-semibold text-background hover:scale-[1.03] hover:shadow-[0_0_24px_var(--neon)]` : `${base} border border-[var(--neon)]/40 font-medium text-[var(--neon)] hover:bg-[var(--neon)]/10 hover:shadow-[0_0_20px_-4px_var(--neon)]`;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      download,
      target: external ? "_blank" : void 0,
      rel: external ? "noreferrer" : void 0,
      className: cls,
      children: [
        icon,
        children
      ]
    }
  );
}
const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" }
];
function AboutSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "about", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "👤 About" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl", children: [
      "Pushing Boundaries in ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Digital Development" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg", children: "Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies. I create fast, scalable, and user-focused solutions that combine technology, design, and innovation to deliver real business results." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-4 font-display italic text-2xl text-foreground/90", children: [
      /* @__PURE__ */ jsx("span", { className: "text-3xl text-[var(--neon)]", children: "~" }),
      " Shahzaib Ali"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl glass p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl font-semibold text-gradient md:text-5xl", children: s.value }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) })
  ] });
}
const education = [
  { period: "2021 — 2023", title: "General Secondary", place: "Center of Excellence High School, Pakistan" },
  { period: "2023 — 2025", title: "Higher Secondary", place: "Govt Post Graduate College, Jaranwala" }
];
const experience = [
  { period: "2023 — Present", title: "Full-Stack Developer", place: "Upwork" },
  { period: "2018 — 2023", title: "eLearning & Web Developer", place: "Fiverr.com" }
];
function ResumeSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "resume", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "📄 Resume" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl", children: [
      "My ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Journey" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Timeline, { title: "Education", icon: /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5" }), items: education }),
      /* @__PURE__ */ jsx(Timeline, { title: "Experience", icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5" }), items: experience })
    ] })
  ] });
}
function Timeline({ title, icon, items: items2 }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-[var(--neon)]/15 text-[var(--neon)]", children: icon }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative space-y-5 pl-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1.5 top-2 w-px bg-border" }),
      items2.map((it, i) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl glass p-5 transition-all hover:shadow-glow", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-[1.4rem] top-6 h-3 w-3 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-[var(--neon)]", children: it.period }),
        /* @__PURE__ */ jsx("h4", { className: "mt-2 text-lg font-semibold", children: it.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.place })
      ] }, i))
    ] })
  ] });
}
const services = [
  {
    icon: Sparkles,
    title: "AI Automation",
    desc: "Custom AI agents, content automation, and workflow systems that scale your output without scaling your team.",
    count: "50+ Projects"
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Premium WordPress and custom-built websites — fast, SEO-ready, and engineered to convert visitors into customers.",
    count: "100+ Projects"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Shopify storefronts with custom themes, checkout tuning, and integrations built for scale on day one.",
    count: "30+ Projects"
  },
  {
    icon: Server,
    title: "SaaS & APIs",
    desc: "End-to-end SaaS dashboards, billing, auth, and unified API hubs that connect everything your product talks to.",
    count: "20+ Projects"
  }
];
function ServicesSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "services", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "💼 Services" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl", children: [
      "My ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Specializations" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2", children: services.map((s) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow",
          children: [
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--neon)]/15 text-[var(--neon)]", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsx("h3", { className: "mt-6 text-2xl font-semibold", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
              /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.2em] text-[var(--neon)]", children: s.count })
            ] })
          ]
        },
        s.title
      );
    }) })
  ] });
}
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
  { name: "Tailwind CSS", level: 95 }
];
function SkillsSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "skills", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "⚡ My Skills" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl", children: [
      "My ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Skills" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 md:grid-cols-2", children: skills.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl glass p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: s.name }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-[var(--neon)]", children: [
          s.level,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-border/60", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-2)] shadow-[0_0_10px_var(--neon)] transition-all duration-1000",
          style: { width: `${s.level}%`, transitionDelay: `${i * 60}ms` }
        }
      ) })
    ] }, s.name)) })
  ] });
}
function PortfolioSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "portfolio", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "🎨 Portfolio" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl", children: [
      "Featured ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Projects" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base text-muted-foreground", children: "A curated set of systems I've designed and shipped — each card opens a full case study." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2", children: projects.map((project, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.55, delay: i % 2 * 0.08 },
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/projects/$slug",
            params: { slug: project.slug },
            className: "group relative block overflow-hidden rounded-3xl glass-strong transition-all duration-500 hover:-translate-y-1",
            style: { ["--card-accent"]: `oklch(0.78 0.18 ${project.accent})` },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.title,
                    loading: "lazy",
                    width: 1280,
                    height: 800,
                    className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
                    style: { background: `radial-gradient(ellipse at center, var(--card-accent), transparent 70%)`, opacity: 0.18 }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "h-1.5 w-1.5 rounded-full",
                      style: { background: "var(--card-accent)", boxShadow: "0 0 10px var(--card-accent)" }
                    }
                  ),
                  project.category
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold leading-tight md:text-2xl", children: project.title }),
                  /* @__PURE__ */ jsx("div", { className: "flex shrink-0 gap-1.5 text-lg", "aria-hidden": true, children: project.icons.map((ic, j) => /* @__PURE__ */ jsx("span", { className: "opacity-80", children: ic }, j)) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: project.description }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border/60 pt-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Case Study" }),
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-1.5 text-sm font-medium transition-all group-hover:gap-2.5",
                      style: { color: "var(--card-accent)" },
                      children: [
                        "View Case Study ",
                        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      },
      project.slug
    )) })
  ] });
}
const testimonials = [
  { name: "Kent", text: "Outstanding. We provided really low specifications, and he outperformed and overdelivered any hopes we had. Absolutely smashed this out of the field." },
  { name: "Ester Moore", text: "He really went the extra mile to make sure the job was done and even when faced with many changes was great to work with. Would highly recommend." },
  { name: "Education FIVE", text: "Very responsive and provided excellent service. He adapted everything for our project and updated themes to match our style. Incredible work." },
  { name: "Selah Solutions", text: "An amazing vendor. He understood my vision and developed an outstanding product. His response was timely and corrections were prompt. Highly recommend!" },
  { name: "Math Texas", text: "Created high-quality work faster than I expected. I would highly recommend him to anyone who needs to build something meaningful." },
  { name: "Wissenneu", text: "He satisfied us with his work despite a vague brief. In total, a great experience and a system our partners actually use." }
];
function TestimonialSection() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  useEffect(() => {
    const id = setInterval(next, 6e3);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];
  return /* @__PURE__ */ jsxs(Section, { id: "testimonial", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "💬 Testimonial" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl", children: [
      "Trusted by ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Clients" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative min-h-[280px] overflow-hidden rounded-3xl glass-strong p-8 md:p-12", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -top-2 left-8 font-display text-8xl leading-none text-[var(--neon)]/40", children: '"' }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.figure,
          {
            initial: { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -40 },
            transition: { duration: 0.5, ease: "easeOut" },
            className: "relative mt-4",
            children: [
              /* @__PURE__ */ jsx("blockquote", { className: "text-base leading-relaxed text-foreground/90 md:text-lg", children: t.text }),
              /* @__PURE__ */ jsxs("figcaption", { className: "mt-7 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-[var(--neon)]/15 font-semibold text-[var(--neon)]", children: t.name.charAt(0) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: t.name }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Verified Client" })
                ] })
              ] })
            ]
          },
          i
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: testimonials.map((_, idx) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setI(idx),
            "aria-label": `Go to testimonial ${idx + 1}`,
            className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" : "w-3 bg-border hover:bg-muted-foreground/40"}`
          },
          idx
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: prev, "aria-label": "Previous", className: "flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:text-[var(--neon)] hover:shadow-glow", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("button", { onClick: next, "aria-label": "Next", className: "flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:text-[var(--neon)] hover:shadow-glow", children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] })
  ] });
}
function ContactSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "contact", children: [
    /* @__PURE__ */ jsx(SectionLabel, { children: "✉️ Contact" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl", children: [
      "Let's ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient italic", children: "Work Together!" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-base text-muted-foreground", children: "Have a project in mind? Drop me a message — I usually respond within 12 hours on business days." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 rounded-3xl glass-strong p-7", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Contact Information" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsx(Info, { icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), text: "smartdesigner301@gmail.com", href: "mailto:smartdesigner301@gmail.com" }),
          /* @__PURE__ */ jsx(Info, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), text: "+92 309 1163940", href: "tel:+923091163940" }),
          /* @__PURE__ */ jsx(Info, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), text: "Remote · UTC +5" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-7 h-px bg-border" }),
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Quick Channels" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx(Pill, { href: "mailto:smartdesigner301@gmail.com", icon: /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }), children: "Email" }),
          /* @__PURE__ */ jsx(Pill, { href: "https://calendly.com/", icon: /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }), children: "Schedule Call" }),
          /* @__PURE__ */ jsx(Pill, { href: "https://wa.me/923091163940", icon: /* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" }), children: "WhatsApp" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-7 h-px bg-border" }),
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Connect" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/shahzaib-al/", target: "_blank", rel: "noreferrer", className: "flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:text-[var(--neon)] hover:shadow-glow", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://github.com/smartdesigner301-alt", target: "_blank", rel: "noreferrer", className: "flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:text-[var(--neon)] hover:shadow-glow", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 rounded-2xl bg-[var(--neon)]/10 p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-[var(--neon)]", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" }),
            "Currently Available"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Best time to reach me: 9AM — 9PM PKT" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ContactForm, {})
    ] })
  ] });
}
function ContactForm() {
  const [status, setStatus] = React.useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "YOUR_ACCESS_KEY");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 rounded-3xl glass-strong p-7 flex flex-col items-center justify-center gap-4 min-h-[400px] text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-[var(--neon)]/20", children: /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7 text-[var(--neon)]" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: "Message Sent! 🎉" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "Thanks for reaching out! I'll get back to you within 12 hours." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setStatus("idle"),
          className: "mt-2 rounded-full border border-[var(--neon)]/40 px-5 py-2 text-sm text-[var(--neon)] transition-all hover:bg-[var(--neon)]/10",
          children: "Send another message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { className: "lg:col-span-3 rounded-3xl glass-strong p-7", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Field, { label: "Full Name *", name: "name", required: true }),
      /* @__PURE__ */ jsx(Field, { label: "Email *", name: "email", type: "email", required: true }),
      /* @__PURE__ */ jsx(Field, { label: "Phone Number", name: "phone" }),
      /* @__PURE__ */ jsx(SelectField, { label: "Subject *", name: "subject", options: ["AI Automation", "Web Development", "E-Commerce", "SaaS / APIs"] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Field, { label: "Your Budget (optional)", name: "budget", placeholder: "e.g. $2,000 — $5,000" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Message *" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          name: "message",
          required: true,
          rows: 5,
          className: "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon)] focus:shadow-[0_0_0_3px_oklch(0.78_0.18_150_/_0.15)]"
        }
      )
    ] }),
    status === "error" && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-red-400", children: "⚠️ Something went wrong. Please try again or email me directly." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status === "sending",
        className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--neon)] px-7 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_var(--neon)] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
        children: status === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("svg", { className: "h-4 w-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8z" })
          ] }),
          "Sending…"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
          "Send Message"
        ] })
      }
    )
  ] });
}
function Info({ icon, text, href }) {
  const inner = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
    /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-[var(--neon)]/15 text-[var(--neon)]", children: icon }),
    /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: text })
  ] });
  return href ? /* @__PURE__ */ jsx("a", { href, className: "block transition-colors hover:text-[var(--neon)]", children: inner }) : inner;
}
function Pill({ icon, children, href }) {
  return /* @__PURE__ */ jsxs("a", { href, className: "inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs transition-all hover:text-[var(--neon)] hover:shadow-glow", children: [
    icon,
    children
  ] });
}
function Field({ label, ...props }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ...props,
        className: "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon)] focus:shadow-[0_0_0_3px_oklch(0.78_0.18_150_/_0.15)]"
      }
    )
  ] });
}
function SelectField({ label, name, options }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx(
      "select",
      {
        name,
        className: "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon)]",
        children: options.map((o) => /* @__PURE__ */ jsx("option", { className: "bg-background", children: o }, o))
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 grid-bg" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.18_150_/_0.12),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.5_0.15_240_/_0.08),transparent_60%)]" }),
    /* @__PURE__ */ jsx(RightNavRail, {}),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1500px] px-4 py-6 lg:px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-10", children: [
      /* @__PURE__ */ jsx(ProfileSidebar, {}),
      /* @__PURE__ */ jsxs("main", { className: "lg:pr-20", children: [
        /* @__PURE__ */ jsx(HeroSection, {}),
        /* @__PURE__ */ jsx(AboutSection, {}),
        /* @__PURE__ */ jsx(ResumeSection, {}),
        /* @__PURE__ */ jsx(ServicesSection, {}),
        /* @__PURE__ */ jsx(SkillsSection, {}),
        /* @__PURE__ */ jsx(PortfolioSection, {}),
        /* @__PURE__ */ jsx(TestimonialSection, {}),
        /* @__PURE__ */ jsx(ContactSection, {}),
        /* @__PURE__ */ jsxs("footer", { className: "border-t border-border/40 py-8 text-center text-xs text-muted-foreground", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Shahzaib Ali. All rights reserved."
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
