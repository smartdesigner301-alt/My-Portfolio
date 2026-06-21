import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass px-6 py-3 md:mt-6 md:px-8">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          nrz<span className="text-gradient">malik</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="/#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="/#about" className="transition-colors hover:text-foreground">About</a>
          <a href="/#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="/#contact"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}
