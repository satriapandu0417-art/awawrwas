
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield } from 'lucide-react';

interface SkillsProps {
  tech: any[];
  soft: any[];
}

const Skills: React.FC<SkillsProps> = ({ tech, soft }) => {
  const SkillBar = ({ name, level, index }: { name: string, level: number, index: number }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="space-y-2 group"
    >
      <div className="flex justify-between text-sm font-mono text-[#8892B0]">
        <span className="group-hover:text-[#CCD6F6] transition-colors">{name}</span>
        <span className="text-[#1E90FF] font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 w-full rounded-full overflow-hidden p-[2px]">
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: `${level}%` }} 
          viewport={{ once: true }} 
          transition={{ duration: 1.5, ease: "circOut", delay: index * 0.1 }} 
          className="h-full bg-gradient-to-r from-[#1E90FF] via-[#D4AF37] to-[#1E90FF] bg-[length:200%_100%] rounded-full shadow-[0_0_10px_rgba(30,144,255,0.5)] animate-gradient" 
        />
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-[#112240]/30 relative">
      <style>{`
        @keyframes flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: flow 4s linear infinite;
        }
      `}</style>

      <div className="px-6 md:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6] whitespace-nowrap">
            <span className="text-[#1E90FF] font-mono text-xl mr-2">04.</span> Proficiencies
          </h2>
          <div className="h-[1px] bg-slate-800 w-full md:w-80" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 relative">
          <div className="space-y-10 relative">
            <h3 className="text-[#CCD6F6] font-mono text-lg flex items-center gap-3">
              <Terminal className="text-[#1E90FF] w-5 h-5" /> 
              <span className="tracking-widest">// Technical Knowledge</span>
            </h3>
            <div className="space-y-8">
              {tech.map((s, i) => <SkillBar key={i} index={i} name={s.name} level={s.level} />)}
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-[#CCD6F6] font-mono text-lg flex items-center gap-3">
              <Shield className="text-[#D4AF37] w-5 h-5" /> 
              <span className="tracking-widest">// Military Discipline</span>
            </h3>
            <div className="space-y-8">
              {soft.map((s, i) => <SkillBar key={i} index={i} name={s.name} level={s.level} />)}
            </div>
          </div>
          
          {/* Radar Background Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02] border border-[#1E90FF] rounded-full animate-ping duration-[10s]" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
