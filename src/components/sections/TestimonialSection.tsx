import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionLabel } from "../Section";

const testimonials = [
  { name: "Kent", text: "Outstanding. We provided really low specifications, and he outperformed and overdelivered any hopes we had. Absolutely smashed this out of the field." },
  { name: "Ester Moore", text: "He really went the extra mile to make sure the job was done and even when faced with many changes was great to work with. Would highly recommend." },
  { name: "Education FIVE", text: "Very responsive and provided excellent service. He adapted everything for our project and updated themes to match our style. Incredible work." },
  { name: "Selah Solutions", text: "An amazing vendor. He understood my vision and developed an outstanding product. His response was timely and corrections were prompt. Highly recommend!" },
  { name: "Math Texas", text: "Created high-quality work faster than I expected. I would highly recommend him to anyone who needs to build something meaningful." },
  { name: "Wissenneu", text: "He satisfied us with his work despite a vague brief. In total, a great experience and a system our partners actually use." },
];

export function TestimonialSection() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <Section id="testimonial">
      <SectionLabel>💬 Testimonial</SectionLabel>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        Trusted by <span className="text-gradient italic">Clients</span>
      </h2>

      <div className="relative mt-12">
        <div className="relative min-h-[280px] overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <span className="absolute -top-2 left-8 font-display text-8xl leading-none text-[var(--neon)]/40">"</span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mt-4"
            >
              <blockquote className="text-base leading-relaxed text-foreground/90 md:text-lg">
                {t.text}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--neon)]/15 font-semibold text-[var(--neon)]">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Client</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" : "w-3 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:text-[var(--neon)] hover:shadow-glow">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:text-[var(--neon)] hover:shadow-glow">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
