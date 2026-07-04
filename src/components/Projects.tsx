import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { ExternalLink, Github, Code2, X } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);

  // Stop body scroll when modal is open
  if (typeof document !== 'undefined') {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <section id="projects" className="py-24 px-6 relative border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <span className="text-accent text-xs font-mono tracking-widest uppercase">• 03 / Creations</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hidden sm:block">
            SELECT_PROJECTS_DB // REVISION_2026
          </span>
        </div>
        
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-display font-black leading-[0.85] tracking-tighter uppercase">
            CRAFTED LABS & <br />
            <span className="text-accent">REPRESENTATIVE</span> WORK
          </h2>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-dark-bg border border-accent/20 rounded-[2.5rem] p-6 md:p-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Project Image placeholder / Visual representation */}
              <div className="bg-[#111] border border-dark-border rounded-3xl p-4 md:p-6 aspect-[16/10] relative flex items-center justify-center overflow-hidden group w-full">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-full h-full border border-dark-border/50 rounded-2xl bg-[#050505] flex flex-col p-4 md:p-6 shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                   {/* Mock abstract UI representation since we don't have images */}
                   <div className="flex items-center gap-2 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-dark-border/50">
                     <div className="flex gap-1.5">
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/50"></div>
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/50"></div>
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="ml-2 md:ml-4 text-[8px] md:text-[10px] font-mono text-gray-500 bg-dark-card px-2 py-1 rounded border border-dark-border/50">
                       {project.title.toLowerCase().replace(' ', '-')}.app
                     </div>
                   </div>
                   
                   <div className="flex-1 flex flex-col justify-center items-center text-center">
                     <Code2 size={32} className="text-accent/20 mb-3 md:mb-4" />
                     <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-300">{project.title}</h3>
                     <p className="text-[10px] font-mono text-accent mt-2 uppercase tracking-widest">{project.category}</p>
                   </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="flex flex-col justify-center items-start">
                <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  {project.category}
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-3">{project.title}</h3>
                
                <p className="text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-widest mb-8 max-w-sm leading-relaxed">
                  {project.description.split('.')[0]}.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono border border-dark-border bg-dark-card text-gray-400 px-3 py-1.5 rounded uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setActiveProject(project)}
                  className="bg-[#111] border border-dark-border hover:border-gray-500 hover:text-white text-gray-300 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-none"
                >
                  View More / Details <ExternalLink size={14} />
                </button>
                
                <div className="flex flex-wrap gap-6 mt-8">
                  <a href={project.githubClient} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-none">
                    <Github size={14} /> Client Repo
                  </a>
                  <a href={project.githubServer} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-none">
                    <Github size={14} /> Server Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-bg/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#050505] border border-dark-border w-full max-w-6xl rounded-[2rem] p-6 md:p-12 relative my-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 bg-dark-card border border-dark-border rounded-full hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-12">
                {/* Top Section - Large Visual */}
                <div className="bg-[#111] border border-dark-border rounded-3xl p-4 md:p-8 aspect-[16/7] md:aspect-[21/9] relative flex items-center justify-center overflow-hidden w-full">
                  <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
                  <div className="w-full h-full border border-dark-border/50 rounded-2xl bg-[#050505] flex flex-col p-4 md:p-8 shadow-2xl relative z-10">
                     <div className="flex items-center gap-2 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-dark-border/50">
                       <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                       </div>
                       <div className="ml-4 text-[10px] font-mono text-gray-500 bg-dark-card px-2 py-1 rounded border border-dark-border/50">
                         {activeProject.title.toLowerCase().replace(' ', '-')}.app
                       </div>
                     </div>
                     <div className="flex-1 flex flex-col justify-center items-center text-center">
                       <Code2 size={48} className="text-accent/20 mb-6" />
                       <h3 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-gray-300">{activeProject.title}</h3>
                       <p className="text-xs font-mono text-accent mt-4 uppercase tracking-widest">{activeProject.category}</p>
                     </div>
                  </div>
                </div>

                {/* Bottom Section - Details Grid */}
                <div className="grid lg:grid-cols-12 gap-12">
                  
                  {/* Left Column - Tech & Links */}
                  <div className="lg:col-span-4 flex flex-col gap-8">
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        {'< >'} TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.techStack.map((tech, i) => (
                          <span key={i} className="text-[10px] font-mono border border-dark-border bg-dark-card text-gray-400 px-3 py-1.5 rounded uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <a 
                        href={activeProject.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors w-full cursor-none"
                      >
                        <ExternalLink size={16} /> LIVE PROJECT LINK
                      </a>
                      <a 
                        href={activeProject.githubClient}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#111] border border-dark-border hover:border-gray-500 hover:text-white text-gray-300 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors w-full cursor-none"
                      >
                        <Github size={16} /> GITHUB REPO (CLIENT)
                      </a>
                      <a 
                        href={activeProject.githubServer}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#111] border border-dark-border hover:border-gray-500 hover:text-white text-gray-300 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors w-full cursor-none"
                      >
                        <Github size={16} /> GITHUB REPO (SERVER)
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Descriptions */}
                  <div className="lg:col-span-8 flex flex-col gap-10">
                    <div>
                      <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                        01 // BRIEF DESCRIPTION
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed font-mono">
                        {activeProject.description}
                      </p>
                    </div>
                    
                    <div className="w-full h-px bg-dark-border"></div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                        02 // CHALLENGES FACED
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed font-mono">
                        {activeProject.challenges}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
