
import React from 'react';
import { motion } from 'framer-motion';

const OceanBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#0A192F]">
      {/* Deep Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-80" />
      
      {/* Light Rays */}
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] bg-[radial-gradient(circle_at_50%_0%,rgba(30,144,255,0.05)_0%,transparent_60%)]" />
      
      {/* Particles/Dust */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 2,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: ["0%", "-10%", "0%"],
            x: ["0%", "5%", "0%"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    </div>
  );
};

export default OceanBackground;
