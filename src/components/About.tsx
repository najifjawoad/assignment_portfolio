import { motion } from 'motion/react';
import { personalInfo, education } from '../data';
import { BookOpen, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent text-xs font-mono tracking-widest uppercase">• 01 / About</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          {/* Left Column: Heading & Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-display font-black leading-[0.85] tracking-tighter mb-8 uppercase">
              WHERE SOFTWARE <br />
              <span className="text-white">MEETS</span> <span className="text-accent">INTELLIGENCE</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <p className="text-xl text-gray-200 font-medium">
                My name is {personalInfo.name}, a {personalInfo.role} who enjoys building applications that are not only functional but also intelligent.
              </p>
              <p>
                {personalInfo.bio}
              </p>
              <p>
                I enjoy working across the full stack, from designing clean backend architectures and cloud-based solutions to developing engaging user interfaces. I believe good software should be reliable, efficient, and easy to maintain, and I always strive to write clean, thoughtful code.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Education & Interests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-12 lg:pl-12 border-l border-dark-border relative"
          >
            <div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-accent"></div>
            <div className="absolute bottom-0 -left-1 w-2 h-2 rounded-full bg-accent"></div>
            
            {/* Education */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-gray-400 mb-8">Educational Qualification</h3>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full border border-dark-border bg-dark-bg -ml-[1.5px] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                    </div>
                    <div className="mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-accent bg-accent/10 px-2 py-1 rounded uppercase">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold uppercase tracking-wide">{edu.degree}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full h-px bg-dark-border"></div>
            
            {/* Interests / Offline */}
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-gray-400 mb-8">Offline Pursuits</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-dark-card border border-dark-border p-5 rounded-xl">
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-3">
                    <Compass size={14} /> Wanderlust
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Outside of terminal windows, I explore geography. Traveling refreshes my mental scope, forcing me to appreciate diverse human perspectives and offline cultures.
                  </p>
                </div>
                <div className="bg-dark-card border border-dark-border p-5 rounded-xl">
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-3">
                    <BookOpen size={14} /> Continuous Learning
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    An avid explorer of new technologies and architectures. I see coding as an ever-evolving craft requiring perfect balance and meticulous orchestration.
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
