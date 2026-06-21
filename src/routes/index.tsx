import { createFileRoute } from "@tanstack/react-router";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { RightNavRail } from "@/components/RightNavRail";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shahzaib Ali — Web & React Native Developer" },
      { name: "description", content: "Web Developer | React Native Developer | Digital Solutions Creator. Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies." },
      { property: "og:title", content: "Shahzaib Ali — Web & React Native Developer" },
      { property: "og:description", content: "Web Developer | React Native Developer | Digital Solutions Creator. Helping businesses transform ideas into powerful digital products through modern web development, mobile app development, automation, and SEO-driven strategies." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.18_150_/_0.12),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.5_0.15_240_/_0.08),transparent_60%)]" />

      <RightNavRail />

      <div className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-10">
          <ProfileSidebar />

          <main className="lg:pr-20">
            <HeroSection />
            <AboutSection />
            <ResumeSection />
            <ServicesSection />
            <SkillsSection />
            <PortfolioSection />
            <TestimonialSection />
            <ContactSection />

            <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Shahzaib Ali. All rights reserved.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
