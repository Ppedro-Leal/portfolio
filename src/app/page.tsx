import Navigation from "@/components/Navigation";
import IntroSection from "@/components/sections/IntroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer/>
    </>
  );
}
