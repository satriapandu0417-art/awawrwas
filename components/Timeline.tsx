
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineProps {
  data: any[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <section id="training" className="py-24 px-6 md:px-24 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-[#CCD6F6] whitespace-nowrap">
          <span className="text-[#1E90FF] font-mono text-xl mr-2">03.</span> Training & Experience
        </h2>
        <div className="h-[1px] bg-slate-800 w-full md:w-80" />
      </div>

      <div className="relative border-l border-slate-800 ml-4 space-y-12">
        {data.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1E90FF] shadow-[0_0_10px_rgba(30,144,255,0.8)]" />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#CCD6F6]">{exp.title}</h3>
              <span className="text-[#1E90FF] font-mono text-sm">{exp.period}</span>
            </div>
            <p className="text-[#D4AF37] font-mono text-sm mb-4">{exp.org}</p>
            <p className="text-[#8892B0] mb-4 leading-relaxed">{exp.desc}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] font-mono text-[#1E90FF] bg-[#1E90FF]/5 px-2 py-1 rounded border border-[#1E90FF]/20 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
