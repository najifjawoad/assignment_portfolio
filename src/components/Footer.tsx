import { personalInfo } from '../data';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 border-t border-dark-border bg-dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
        
        <div>
          &copy; 2026 {personalInfo.name}
        </div>
        
        <div className="flex items-center gap-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={16} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition-colors uppercase"
        >
          Back To Top <ArrowUp size={12} />
        </button>
        
      </div>
    </footer>
  );
}
