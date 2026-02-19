
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Instagram, Github, Twitter, ArrowRight, CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  config: any;
}

const Contact: React.FC<ContactProps> = ({ config }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const getSocialIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'github': return <Github className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      default: return <Mail className="w-5 h-5" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!config.emailjs.publicKey || config.emailjs.publicKey === "your_public_key") {
      alert("EmailJS is not configured yet. Please update portfolioData.ts with your credentials.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        config.emailjs.publicKey
      );
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-24 max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
        <p className="text-[#1E90FF] font-mono tracking-widest">05. TRANSMISSION</p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#CCD6F6]">Establish Contact</h2>
        <p className="max-w-xl mx-auto text-[#8892B0] text-lg leading-relaxed">
          Saya selalu terbuka untuk diskusi mengenai penempatan <span className="text-[#1E90FF]">Deck Cadet</span> atau kolaborasi profesional lainnya.
        </p>

        {/* Dynamic Social Links */}
        <div className="flex justify-center flex-wrap gap-4 py-4">
          <motion.a 
            href={`mailto:${config.email}`}
            whileHover={{ scale: 1.1, backgroundColor: "#1E90FF", color: "#0A192F" }}
            className="p-4 bg-[#112240] rounded-full text-[#CCD6F6] transition-all border border-slate-800 shadow-lg"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
          {config.socials.map((social: any, idx: number) => (
            <motion.a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "#D4AF37", color: "#0A192F" }}
              className="p-4 bg-[#112240] rounded-full text-[#CCD6F6] transition-all border border-slate-800 shadow-lg"
            >
              {getSocialIcon(social.icon)}
            </motion.a>
          ))}
        </div>

        <div className="bg-[#112240]/50 p-8 md:p-12 rounded-xl border border-slate-700/50 backdrop-blur-md max-w-2xl mx-auto mt-12 text-left relative overflow-hidden group">
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8892B0] uppercase tracking-widest">Full Name</label>
                <input 
                  required placeholder="Enter name" 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0A192F] border border-slate-700/50 rounded-lg px-4 py-3 text-[#CCD6F6] focus:border-[#1E90FF] outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8892B0] uppercase tracking-widest">Email Address</label>
                <input 
                  required type="email" placeholder="Enter email"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0A192F] border border-slate-700/50 rounded-lg px-4 py-3 text-[#CCD6F6] focus:border-[#1E90FF] outline-none transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#8892B0] uppercase tracking-widest">Message Payload</label>
              <textarea 
                required rows={4} placeholder="Type your message here..."
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#0A192F] border border-slate-700/50 rounded-lg px-4 py-3 text-[#CCD6F6] focus:border-[#1E90FF] outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full py-4 bg-[#1E90FF] text-[#0A192F] font-bold rounded-lg hover:bg-blue-400 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 shadow-[0_10px_20px_-10px_rgba(30,144,255,0.5)]"
            >
              {isSubmitting ? "TRANSMITTING..." : "SEND SIGNAL"}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
          
          {/* Subtle Radar Line Animation in Background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1E90FF]/20 to-transparent -translate-y-full group-hover:animate-[radar_3s_linear_infinite]" />
        </div>
      </motion.div>

      <style>{`
        @keyframes radar {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
      `}</style>

      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#1E90FF] text-[#0A192F] px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 font-bold">
            <CheckCircle className="w-5 h-5" /> Signal Dispatched Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
