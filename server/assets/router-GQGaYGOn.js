import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const appCss = "/My-Portfolio/assets/styles-C7rUftHQ.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shahzaib Ali — Developer Portfolio" },
      { name: "description", content: "Web Developer | React Native Developer | Digital Solutions Creator — Premium developer portfolio with featured case studies." },
      { name: "author", content: "Shahzaib Ali" },
      { property: "og:title", content: "Shahzaib Ali — Developer Portfolio" },
      { property: "og:description", content: "Web Developer | React Native Developer | Digital Solutions Creator — Premium developer portfolio with featured case studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./index-CWYWNHBv.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Shahzaib Ali — Web & React Native Developer"
    }, {
      name: "description",
      content: "Web Developer | React Native Developer | Digital Solutions Creator. Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies."
    }, {
      property: "og:title",
      content: "Shahzaib Ali — Web & React Native Developer"
    }, {
      property: "og:description",
      content: "Web Developer | React Native Developer | Digital Solutions Creator. Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const aiContent = "/My-Portfolio/assets/project-ai-content-Cde3KORW.jpg";
const chatbot = "/My-Portfolio/assets/project-chatbot-Db-mYKYm.jpg";
const workflow = "/My-Portfolio/assets/project-workflow-kHjdXYmF.jpg";
const wordpress = "/My-Portfolio/assets/project-wordpress-wDELozEn.jpg";
const shopify = "/My-Portfolio/assets/project-shopify-NzSjSikz.jpg";
const saas = "/My-Portfolio/assets/project-saas-DiAMC8F2.jpg";
const api = "/My-Portfolio/assets/project-api-DxkYn0vU.jpg";
const projects = [
  {
    slug: "ai-content-automation-system",
    title: "AI Content Automation System",
    subtitle: "Generate, schedule and publish on autopilot",
    description: "An AI-powered engine that drafts blog posts, social content and schedules them across channels without human babysitting.",
    image: aiContent,
    icons: ["🤖", "⚙️"],
    accent: "295",
    category: "AI · Automation",
    problem: "Marketing teams burn hours every week writing repetitive content — blogs, captions, newsletters. The output bottleneck slows brand velocity and starves channels of fresh material.",
    solution: "A self-serve dashboard wired to the OpenAI API that produces on-brand content from a single prompt, then auto-formats, previews and schedules it across blog, LinkedIn, X and Instagram.",
    features: [
      "One-prompt blog generation with SEO meta",
      "Multi-platform social post variants",
      "Visual content calendar with drag-and-drop scheduling",
      "Brand voice presets and tone control",
      "Approval workflow with revision history"
    ],
    tech: ["React", "Node.js", "OpenAI API", "MongoDB", "TailwindCSS"],
    outcome: "Cut content production time by ~80% for a 4-person marketing team and shipped 3× the publishing volume in the first month."
  },
  {
    slug: "ai-chatbot-system",
    title: "AI Chatbot System",
    subtitle: "24/7 conversational support on web + WhatsApp",
    description: "A smart chatbot platform that captures leads, answers FAQs and routes complex queries — across website and WhatsApp.",
    image: chatbot,
    icons: ["🤖", "💬"],
    accent: "165",
    category: "AI · Support",
    problem: "Small businesses lose leads after hours and burn agents on repetitive questions. Hiring a 24/7 support team is rarely viable.",
    solution: "A trainable AI chatbot embedded on the site and connected to the WhatsApp Business API, with handoff to a human when intent confidence drops.",
    features: [
      "Train on website, PDFs and knowledge base",
      "Lead capture with CRM sync",
      "Smart auto-replies + sentiment detection",
      "Human handoff with full conversation context",
      "Multi-language responses"
    ],
    tech: ["React", "Node.js", "OpenAI", "WhatsApp Business API"],
    outcome: "Resolved 72% of inbound questions without human intervention and increased qualified leads by 2.4× for a B2C service brand."
  },
  {
    slug: "workflow-automation-engine",
    title: "Workflow Automation Engine",
    subtitle: "Visual flows that connect everything",
    description: "A no-code automation engine that connects APIs, triggers actions and schedules workflows like a private Zapier.",
    image: workflow,
    icons: ["⚙️", "🔌"],
    accent: "55",
    category: "Automation · Platform",
    problem: "Operations teams stitch tools together with spreadsheets and Slack pings. Manual handoffs break, get lost and cost real money.",
    solution: "A visual workflow builder where triggers, conditions and actions snap together — from CRM updates to invoice generation to alerts.",
    features: [
      "Drag-and-drop visual workflow editor",
      "200+ pre-built triggers and actions",
      "Cron-based scheduling and webhooks",
      "Error retry and observability per step",
      "Team-level access controls"
    ],
    tech: ["Node.js", "REST APIs", "MongoDB", "Bull Queues"],
    outcome: "Replaced 6 paid SaaS subscriptions and saved one client ~30 hours of manual ops work per week."
  },
  {
    slug: "wordpress-business-website-system",
    title: "WordPress Business Website System",
    subtitle: "SEO-ready sites that convert",
    description: "A production WordPress system tuned for small businesses — fast, secure, and built for search and conversion.",
    image: wordpress,
    icons: ["🌐", "🧩"],
    accent: "20",
    category: "Web · WordPress",
    problem: "Off-the-shelf WordPress themes ship bloated, slow and SEO-blind. Most small businesses end up with sites that don't rank or convert.",
    solution: "A reusable WordPress stack with custom themes, hand-picked plugins and a hardened performance baseline tailored per industry.",
    features: [
      "Custom theme architecture per brand",
      "Core Web Vitals tuned out of the box",
      "On-page SEO, schema and sitemap automation",
      "Lead forms wired to CRM and email",
      "One-click backup and staging"
    ],
    tech: ["WordPress", "PHP", "Elementor", "Yoast", "MySQL"],
    outcome: "Average client site hits 95+ Lighthouse and ranks page-1 for primary keywords within 90 days."
  },
  {
    slug: "shopify-ecommerce-store-system",
    title: "Shopify E-commerce Store System",
    subtitle: "Stores built to scale on day one",
    description: "A premium Shopify setup with custom theme work, payment integrations and a checkout tuned for conversion.",
    image: shopify,
    icons: ["🛍️", "💳"],
    accent: "340",
    category: "E-commerce · Shopify",
    problem: "Founders launch on default themes, lose customers at checkout and can't scale catalog or promos without a developer on standby.",
    solution: "A custom Shopify theme + app stack tuned for speed, upsells, multi-currency and clean inventory management.",
    features: [
      "Custom Liquid theme with section everything",
      "Multi-currency + multi-language storefront",
      "Upsell, cross-sell and bundle logic",
      "One-page accelerated checkout",
      "Inventory and order automations"
    ],
    tech: ["Shopify", "Liquid", "Shopify APIs", "Hydrogen"],
    outcome: "Lifted store conversion rate from 1.1% to 3.6% within 60 days for a DTC fashion brand."
  },
  {
    slug: "saas-dashboard-platform",
    title: "SaaS Dashboard Platform",
    subtitle: "Subscriptions, analytics and auth in one shell",
    description: "A production-ready SaaS dashboard with auth, subscriptions and analytics — the boring 80% solved, so you ship the 20%.",
    image: saas,
    icons: ["📊", "☁️"],
    accent: "240",
    category: "SaaS · Platform",
    problem: "Every SaaS rebuilds the same shell — auth, billing, roles, dashboard. Months wasted before a single product feature ships.",
    solution: "A polished SaaS foundation with Stripe billing, role-based access, real-time analytics and a design system already wired up.",
    features: [
      "Email + OAuth auth with magic links",
      "Stripe subscriptions and customer portal",
      "Real-time analytics and event tracking",
      "Multi-tenant workspace model",
      "Webhook-driven integrations"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Recharts"],
    outcome: "Shaved 6–8 weeks off the typical 0→1 SaaS launch for two early-stage founders."
  },
  {
    slug: "api-integration-hub",
    title: "API Integration Hub",
    subtitle: "One control plane for every service",
    description: "A unified hub that connects WhatsApp, payments, CRMs and internal services behind a single, observable API layer.",
    image: api,
    icons: ["🔌", "⚡"],
    accent: "120",
    category: "APIs · Infrastructure",
    problem: "Growing products end up with spaghetti integrations — each service spoken to differently, with no central logging, retries or rate-limiting.",
    solution: "A central integration hub that normalizes external APIs into a single SDK, with built-in queues, retries and observability.",
    features: [
      "Unified SDK for WhatsApp, Stripe, HubSpot, more",
      "Per-route rate-limiting and retries",
      "Webhook ingestion and signature verification",
      "Replayable event log",
      "Per-tenant API key management"
    ],
    tech: ["Node.js", "REST APIs", "Redis", "PostgreSQL"],
    outcome: "Reduced 3rd-party outage blast radius to a single retry queue and made onboarding a new integration a one-day task."
  }
];
const getProject = (slug) => projects.find((p) => p.slug === slug);
const $$splitComponentImporter = () => import("./projects._slug-COXBFskQ.js");
const $$splitNotFoundComponentImporter = () => import("./projects._slug-Bv1Y36eb.js");
const Route = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.title} — Case Study | Nrz Malik`
    }, {
      name: "description",
      content: loaderData.description
    }, {
      property: "og:title",
      content: `${loaderData.title} — Case Study`
    }, {
      property: "og:description",
      content: loaderData.description
    }, {
      property: "og:image",
      content: loaderData.image
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ProjectsSlugRoute = Route.update({
  id: "/projects/$slug",
  path: "/projects/$slug",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ProjectsSlugRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  projects as p,
  router as r
};
