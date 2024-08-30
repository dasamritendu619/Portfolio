import AboutMe from "@/components/shared/AboutMe";
import HeroSection from "@/components/shared/HeroSection";
import Skills from "@/components/shared/Skills";
import Projects from "@/components/shared/Projects";
import Education from "@/components/shared/Education";
import ContactMe from "@/components/shared/ContactMe";
import Footer from "@/components/shared/Footer";

export default function Home() {

  return (
    <main className="w-full">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
    </main>
  );
}
