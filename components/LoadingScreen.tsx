
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A192F]"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Anchor className="w-16 h-16 text-[#1E90FF] animate-pulse" />
      </motion.div>
      
      <div className="relative w-48 h-1 bg-slate-800 overflow-hidden rounded-full">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-[#1E90FF]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-[#8892B0] font-mono text-sm tracking-[0.2em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        INITIALIZING SYSTEMS...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
