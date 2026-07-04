import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { skillsData } from '../data';
import { ChevronDown } from 'lucide-react';

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="py-24 px-6 relative border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent text-xs font-mono tracking-widest uppercase">• 02 / Capabilities</span>
        </div>
        
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-display font-black leading-[0.85] tracking-tighter uppercase">
            ENGINEERING <br />
            <span className="text-accent">CAPABILITIES</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {skillsData.map((category, idx) => {
            const isActive = activeIndex === idx;
            const Icon = category.icon;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isActive ? 'border-accent bg-dark-card' : 'border-dark-border bg-dark-bg hover:border-gray-600'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono font-bold text-accent">0{idx + 1}</span>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide flex items-center gap-3">
                      <Icon className={isActive ? 'text-accent' : 'text-gray-400'} size={20} />
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hidden sm:block">
                      {isActive ? 'Active_Index' : 'Collapsed'}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`text-accent transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="flex items-center gap-2 mb-8 text-xs font-mono text-gray-400">
                          <span className="text-accent">{'>_'}</span> Building high-throughput, secure solutions and robust architectures.
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                          {category.items.map((item, i) => (
                            <div key={i}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                                <span className="text-[10px] font-mono text-accent">{item.level}%</span>
                              </div>
                              <div className="h-1 w-full bg-dark-border rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="h-full bg-accent"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
