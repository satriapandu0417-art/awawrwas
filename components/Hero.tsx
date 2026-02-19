
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDown, Ship, Wind } from 'lucide-react';

interface HeroProps {
  data: {
    name: string;
    role: string;
    bio: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  // Explicitly typing as Variants helps resolve inference issues with nested transition properties
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      }
    }
  };

  // Using 'as const' on the easing array ensures it is treated as a 4-number tuple (CubicBezier)
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 relative"
      >
        <motion.p variants={itemVariants} className="text-[#1E90FF] font-mono text-lg mb-4 flex items-center gap-2">
          <Wind className="w-5 h-5 animate-pulse" /> Hello, my name is
        </motion.p>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-8xl font-bold text-[#CCD6F6] leading-tight mb-4 uppercase tracking-tighter"
        >
          {data.name.split("").map((char, i) => (
            <motion.span 
              key={i} 
              whileHover={{ color: "#1E90FF", y: -5 }} 
              className="inline-block transition-colors cursor-default"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 
          variants={itemVariants} 
          className="text-4xl md:text-7xl font-bold text-[#8892B0] mb-8 leading-tight flex items-center gap-4"
        >
          {data.role}
        </motion.h2>

        <motion.p 
          variants={itemVariants} 
          className="max-w-xl text-[#8892B0] text-lg md:text-xl leading-relaxed mb-12 border-l-2 border-[#1E90FF]/30 pl-6"
        >
          {data.bio}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <motion.a 
            href="#certifications" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(30,144,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-[#1E90FF] text-[#1E90FF] font-mono text-sm transition-all rounded font-bold tracking-widest flex items-center gap-2 group"
          >
            VIEW QUALIFICATIONS
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", borderColor: "#D4AF37", color: "#0A192F" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#1E90FF] text-[#0A192F] font-mono text-sm border-2 border-[#1E90FF] transition-all rounded font-bold tracking-widest"
          >
            CONTACT ME
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Ship Icon Background */}
      <motion.div 
        className="absolute right-[-10%] bottom-[-5%] opacity-[0.03] select-none pointer-events-none" 
        initial={{ rotate: 0, scale: 0.8 }} 
        animate={{ 
          rotate: 360, 
          scale: [0.8, 1, 0.8],
          y: [0, -20, 0] 
        }} 
        transition={{ 
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Ship className="w-[60vw] h-[60vw]" />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8892B0]" 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#1E90FF] via-[#1E90FF]/50 to-transparent mx-auto mb-2" />
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase">Set Sail</p>
      </motion.div>
    </section>
  );
};

export default Hero;
