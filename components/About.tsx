
import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  stats: any[];
  paragraphs: string[];
}

const About: React.FC<AboutProps> = ({ stats, paragraphs }) => {
  return (
    <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold text-[#CCD6F6] whitespace-nowrap">
          <span className="text-[#1E90FF] font-mono text-xl mr-2">01.</span> About Me
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-slate-800 max-w-md" 
        />
      </motion.div>

      <div className="grid md:grid-cols-5 gap-16 items-start">
        <div className="md:col-span-3 space-y-6 text-[#8892B0] text-lg leading-relaxed">
          {paragraphs.map((text, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}
          
          <div className="grid grid-cols-2 gap-8 pt-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ delay: idx * 0.1 + 0.5, type: "spring" }} 
                className="border-l-2 border-[#1E90FF] pl-4 group cursor-default"
              >
                <div className="text-3xl font-bold text-[#CCD6F6] font-mono group-hover:text-[#1E90FF] transition-colors">{stat.value}</div>
                <div className="text-xs text-[#8892B0] uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 relative group"
        >
          <div className="relative z-10 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-slate-700/50 shadow-2xl">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://media.discordapp.net/attachments/1469753557292159042/1474136252977778889/WhatsApp_Image_2026-02-20_at_03.10.48.jpeg?ex=6998bfde&is=69976e5e&hm=00d822023e1c94e93570e6fd163e137fa93352c25387d1cda476522320b84239&=&format=webp&width=650&height=866" 
              alt="Professional Profile" 
              className="w-full h-auto object-cover" 
            />
            <div className="absolute inset-0 bg-[#1E90FF]/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <motion.div 
            animate={{ 
              top: [16, 10, 16], 
              left: [16, 10, 16] 
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -z-10 w-full h-full border-2 border-[#1E90FF] rounded-lg" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
