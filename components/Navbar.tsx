
import React from 'react';
import { Anchor } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = ['About', 'Certifications', 'Training', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#0A192F]/60 backdrop-blur-md border-b border-slate-800/50">
      <div className="flex items-center gap-2">
        <Anchor className="text-[#1E90FF] w-6 h-6" />
        <span className="font-bold text-[#CCD6F6] tracking-widest text-lg font-mono">D. CADET</span>
      </div>
      
      <ul className="hidden lg:flex gap-8 text-sm font-mono tracking-tighter">
        {navItems.map((item, idx) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-[#8892B0] hover:text-[#1E90FF] transition-colors flex items-center gap-1 group"
            >
              <span className="text-[#1E90FF] opacity-70 group-hover:opacity-100">0{idx + 1}.</span> {item}
            </a>
          </li>
        ))}
      </ul>

      <button className="px-5 py-2 border border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF]/10 transition-all rounded text-sm font-mono font-medium">
        RESUME
      </button>
    </nav>
  );
};

export default Navbar;
