import { useEffect, useState } from "react";
import { Home, User, FileText, Briefcase, Layers, LayoutGrid, MessageSquareQuote, Mail } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "portfolio", label: "Portfolio", icon: LayoutGrid },
  { id: "testimonial", label: "Testimonial", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail },
];

export function RightNavRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
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

  return (
    <nav className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col items-center gap-1 rounded-full glass-strong px-2 py-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              style={{
                color: isActive ? "var(--neon)" : undefined,
                background: isActive ? "oklch(1 0 0 / 0.06)" : undefined,
                boxShadow: isActive ? "0 0 18px -2px var(--neon)" : undefined,
              }}
            >
              <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" style={{ color: isActive ? "var(--neon)" : undefined }} />
              <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md glass px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
