
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import OceanBackground from './components/OceanBackground';
import { portfolioData } from './portfolioData';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A192F]">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1E90FF] z-[60] origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <OceanBackground />
            <Navbar />
            
            <main>
              <Hero data={portfolioData.hero} />
              
              <section id="about">
                <About stats={portfolioData.about.stats} paragraphs={portfolioData.about.paragraphs} />
              </section>

              <section id="certifications">
                <Certifications data={portfolioData.certifications} />
              </section>

              <section id="training">
                <Timeline data={portfolioData.experience} />
              </section>

              <section id="skills">
                <Skills tech={portfolioData.skills.technical} soft={portfolioData.skills.discipline} />
              </section>

              <section id="contact">
                <Contact config={portfolioData.contact} />
              </section>
            </main>
            
            <footer className="py-10 text-center text-sm font-mono text-slate-500 border-t border-slate-800/50 bg-[#0A192F]/80 backdrop-blur-sm relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="tracking-[0.2em]">© 2024 MARITIME CADET PORTFOLIO | DISCIPLINE • SAFETY • HONOR</p>
                <div className="mt-4 flex justify-center gap-4 opacity-30 hover:opacity-100 transition-opacity">
                  <span className="w-1 h-1 bg-[#1E90FF] rounded-full radar-dot relative"></span>
                  <span className="w-1 h-1 bg-[#1E90FF] rounded-full radar-dot relative"></span>
                  <span className="w-1 h-1 bg-[#1E90FF] rounded-full radar-dot relative"></span>
                </div>
              </motion.div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
