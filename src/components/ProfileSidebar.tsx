import profileImg from "@/assets/profile.jpg";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";

export function ProfileSidebar() {
  return (
    <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
      <div className="relative h-full rounded-3xl glass-strong p-6 md:p-7 flex flex-col justify-between overflow-y-auto scrollbar-none">
        {/* Top: signature + status */}
        <div className="flex items-center justify-between flex-shrink-0">
          <span className="font-signature text-3.5xl tracking-wide text-foreground/95 leading-none">
            Shahzaib Ali
          </span>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]" />
            Available
          </span>
        </div>

        {/* Avatar */}
        <div className="my-5 flex-1 min-h-[140px] max-h-[330px] overflow-hidden rounded-2xl flex-shrink-0">
          <img
            src={profileImg}
            alt="Shahzaib Ali"
            width={1024}
            height={1024}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Details and Actions */}
        <div className="flex-shrink-0 flex flex-col gap-4">
          {/* Contact lines */}
          <div className="text-center">
            <p className="text-base font-medium tracking-tight truncate">smartdesigner301@gmail.com</p>
            <p className="text-sm text-muted-foreground">Punjab, Pakistan</p>
          </div>

          <div className="h-px w-full bg-border/60" />

          <p className="text-center text-xs text-muted-foreground">
            Birthday, <span className="text-foreground/90">30 October 2006</span>
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3">
            <SocialBtn href="https://www.linkedin.com/in/shahzaib-al/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialBtn>
            <SocialBtn href="https://github.com/smartdesigner301-alt" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialBtn>
            <SocialBtn href="https://wa.me/923091163940" label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </SocialBtn>
            <SocialBtn href="mailto:smartdesigner301@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialBtn>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-full bg-[var(--neon)] px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_var(--neon)]"
          >
            <Mail className="h-4 w-4" />
            HIRE ME!
          </a>
        </div>
      </div>
    </aside>
  );
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-[var(--neon)] hover:shadow-[0_0_18px_var(--neon)]"
    >
      {children}
    </a>
  );
}
