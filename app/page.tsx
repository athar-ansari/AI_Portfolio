import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ImpactCounter from '@/components/ImpactCounter';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <ImpactCounter />
      <About />
      <Philosophy />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
