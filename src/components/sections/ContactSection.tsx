import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Calendar } from "lucide-react";
import { Section, SectionLabel } from "../Section";
import React from "react";

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionLabel>✉️ Contact</SectionLabel>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        Let's <span className="text-gradient italic">Work Together!</span>
      </h2>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Have a project in mind? Drop me a message — I usually respond within 12 hours on business days.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Info card */}
        <div className="lg:col-span-2 rounded-3xl glass-strong p-7">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div className="mt-6 space-y-4">
            <Info icon={<Mail className="h-4 w-4" />} text="smartdesigner301@gmail.com" href="mailto:smartdesigner301@gmail.com" />
            <Info icon={<Phone className="h-4 w-4" />} text="+92 309 1163940" href="tel:+923091163940" />
            <Info icon={<MapPin className="h-4 w-4" />} text="Remote · UTC +5" />
          </div>

          <div className="my-7 h-px bg-border" />

          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Quick Channels</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill href="mailto:smartdesigner301@gmail.com" icon={<Mail className="h-3.5 w-3.5" />}>Email</Pill>
            <Pill href="https://calendly.com/" icon={<Calendar className="h-3.5 w-3.5" />}>Schedule Call</Pill>
            <Pill href="https://wa.me/923091163940" icon={<MessageCircle className="h-3.5 w-3.5" />}>WhatsApp</Pill>
          </div>

          <div className="my-7 h-px bg-border" />

          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Connect</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://www.linkedin.com/in/shahzaib-al/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:text-[var(--neon)] hover:shadow-glow">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/smartdesigner301-alt" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:text-[var(--neon)] hover:shadow-glow">
              <Github className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-7 rounded-2xl bg-[var(--neon)]/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--neon)]">
              <span className="h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" />
              Currently Available
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Best time to reach me: 9AM — 9PM PKT</p>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms access key — get yours FREE at https://web3forms.com
    // Enter your Gmail there and paste the key below
    data.append("access_key", "YOUR_ACCESS_KEY");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
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
    return (
      <div className="lg:col-span-3 rounded-3xl glass-strong p-7 flex flex-col items-center justify-center gap-4 min-h-[400px] text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--neon)]/20">
          <Mail className="h-7 w-7 text-[var(--neon)]" />
        </div>
        <h3 className="text-2xl font-semibold">Message Sent! 🎉</h3>
        <p className="text-muted-foreground max-w-sm">
          Thanks for reaching out! I'll get back to you within 12 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full border border-[var(--neon)]/40 px-5 py-2 text-sm text-[var(--neon)] transition-all hover:bg-[var(--neon)]/10"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="lg:col-span-3 rounded-3xl glass-strong p-7" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name *" name="name" required />
        <Field label="Email *" name="email" type="email" required />
        <Field label="Phone Number" name="phone" />
        <SelectField label="Subject *" name="subject" options={["AI Automation", "Web Development", "E-Commerce", "SaaS / APIs"]} />
      </div>
      <div className="mt-4">
        <Field label="Your Budget (optional)" name="budget" placeholder="e.g. $2,000 — $5,000" />
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon)] focus:shadow-[0_0_0_3px_oklch(0.78_0.18_150_/_0.15)]"
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">
          ⚠️ Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--neon)] px-7 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_var(--neon)] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === "sending" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Mail className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Info({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 text-sm">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--neon)]/15 text-[var(--neon)]">{icon}</span>
      <span className="text-foreground/90">{text}</span>
    </div>
  );
  return href ? <a href={href} className="block transition-colors hover:text-[var(--neon)]">{inner}</a> : inner;
}

function Pill({ icon, children, href }: { icon: React.ReactNode; children: React.ReactNode; href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs transition-all hover:text-[var(--neon)] hover:shadow-glow">
      {icon}
      {children}
    </a>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon)] focus:shadow-[0_0_0_3px_oklch(0.78_0.18_150_/_0.15)]"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <select
        name={name}
        className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon)]"
      >
        {options.map((o) => <option key={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}
