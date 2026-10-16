import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Skills } from "@/components/AboutSkills";
import { Experience } from "@/components/Experience";
import { Certifications, Projects } from "@/components/ProjectsCerts";
import { Contact, Footer } from "@/components/ContactFooter";
import { ThemeProvider } from "@/components/theme";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
