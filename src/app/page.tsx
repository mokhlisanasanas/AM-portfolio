import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";
import { ExperienceSection } from "@/features/experience";
import { HeroSection } from "@/features/hero";
import { FeaturedProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
