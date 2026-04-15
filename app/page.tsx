'use client';

import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Experience from '@/components/portfolio/experience';
import Projects from '@/components/portfolio/projects';
import Skills from '@/components/portfolio/skills';
import Contact from '@/components/portfolio/contact';
import Navigation from '@/components/portfolio/navigation';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
