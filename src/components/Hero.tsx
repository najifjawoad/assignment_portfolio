import { motion } from 'framer-motion'; // এখানে পরিবর্তন করা হয়েছে
import { personalInfo } from '../data';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dark-border/50 opacity-20" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dark-border/30 opacity-10" />
      
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-6 items-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent font-bold">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {personalInfo.name} <span className="text-dark-border">|</span> {personalInfo.location}
          </div>
          
          <h1 className="text-6xl md:text-[90px] lg:text-[120px] font-display font-black leading-[0.85] tracking-tighter uppercase mt-4">
            BUILDING <br />
            <span className="text-white">INTELLIGENT</span> <br />
            <span className="text-accent flex items-center gap-4">
              SYSTEMS 
              <span className="inline-block w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent opacity-50"></span>
            </span>
          </h1>
          
          <div className="flex items-center gap-4 mt-8 w-full">
            <div className="h-px bg-accent w-12"></div>
            <p className="uppercase tracking-[0.3em] text-sm font-bold text-gray-400">{personalInfo.role}</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a 
              href="#projects" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-colors"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="bg-dark-card border border-dark-border hover:border-gray-500 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-colors"
            >
              Let's Build <span className="w-2 h-2 rounded-full bg-gray-400 ml-1"></span>
            </a>
            {/* এখানে আপনি চাইলে আপনার resume.pdf যোগ করতে পারেন */}
            <a 
              href="/resume.pdf" 
              download
              className="bg-dark-card border border-dark-border hover:border-gray-500 text-gray-400 hover:text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>
          
          <div className="flex items-center gap-6 mt-12 text-gray-500">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
              <Github size={16} /> Github
            </a>
            <span className="text-dark-border">/</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
              <Linkedin size={16} /> Linkedin
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md flex justify-center"
        >
          <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-dark-card border border-dark-border relative p-2">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent z-10 pointer-events-none"></div>
            
            
            <div className="w-full h-full bg-zinc-800 rounded-[1.5rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
               
               <img src={'https://i.ibb.co.com/xtvVhh5Q/formal-photo-2.jpg'} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20 bg-dark-bg/60 backdrop-blur-md border border-dark-border rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm uppercase">{personalInfo.name}</h3>
                <p className="text-[10px] text-gray-400 font-mono tracking-widest mt-1">SYS_ENGINEER</p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                100% DISCIPLINE
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowRight size={14} className="rotate-90 text-accent" />
      </div>
    </section>
  );
}