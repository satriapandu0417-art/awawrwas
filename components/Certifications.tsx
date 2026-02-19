
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Stethoscope, Eye, Flame, Award, Anchor, Hexagon } from 'lucide-react';

interface CertificationsProps {
  data: any[];
}

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'shield': return <ShieldCheck className="w-8 h-8" />;
      case 'med': return <Stethoscope className="w-8 h-8" />;
      case 'eye': return <Eye className="w-8 h-8" />;
      case 'flame': return <Flame className="w-8 h-8" />;
      case 'anchor': return <Anchor className="w-8 h-8" />;
      case 'award': return <Award className="w-8 h-8" />;
      default: return <Hexagon className="w-8 h-8" />; // Fallback icon
    }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#112240]/30 relative overflow-hidden">
      <div className="px-6 md:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6] whitespace-nowrap">
            <span className="text-[#1E90FF] font-mono text-xl mr-2">02.</span> Qualifications
          </h2>
          <div className="h-[1px] bg-slate-800 w-full md:w-80" />
        </motion.div>

        {/* Dynamic Grid: Auto-fit ensures items fill the row properly regardless of count */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {data.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 30px -10px rgba(2, 12, 27, 0.7)",
                transition: { duration: 0.3 }
              }}
              className="bg-[#112240] p-8 rounded border border-slate-700/30 hover:border-[#1E90FF]/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
            >
              <div className="text-[#1E90FF] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform origin-left">
                {getIcon(cert.icon)}
              </div>
              <h3 className="text-[#CCD6F6] font-bold text-xl mb-3 group-hover:text-[#1E90FF] transition-colors">
                {cert.title}
              </h3>
              <p className="text-[#8892B0] text-sm mb-6 leading-relaxed flex-grow">
                {cert.desc}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-700/30 flex justify-between items-center text-[10px] font-mono text-[#8892B0]">
                <span className="uppercase tracking-widest">{cert.id}</span>
                <span className="text-[#1E90FF] font-bold bg-[#1E90FF]/5 px-2 py-1 rounded">{cert.year}</span>
              </div>
              
              {/* Gradient Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-[#1E90FF] to-transparent transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
