import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. I will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent text-xs font-mono tracking-widest uppercase">• 04 / Contact</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-display font-black leading-[0.85] tracking-tighter uppercase mb-6">
              LET'S BUILD <br />
              <span className="text-accent">THE FUTURE</span> <br />
              <span className="text-white">TOGETHER.</span>
            </h2>
            
            <p className="text-sm text-gray-400 mb-12 max-w-md leading-relaxed">
              Whether you're launching a startup, scaling a product, or exploring new solutions, I'd love to hear about your ideas. Let's create something impactful.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="group flex items-center p-5 bg-dark-card border border-dark-border rounded-xl hover:border-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center mr-4 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">Email Dispatch</div>
                  <div className="text-sm font-bold tracking-wide">{personalInfo.email}</div>
                </div>
              </a>
              
              <a href={`tel:${personalInfo.phone}`} className="group flex items-center p-5 bg-dark-card border border-dark-border rounded-xl hover:border-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center mr-4 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">Direct Line</div>
                  <div className="text-sm font-bold tracking-wide">{personalInfo.phone}</div>
                </div>
              </a>
              
              <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center p-5 bg-dark-card border border-dark-border rounded-xl hover:border-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center mr-4 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <MessageSquare size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">WhatsApp</div>
                  <div className="text-sm font-bold tracking-wide">{personalInfo.whatsapp}</div>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Contact Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors mt-4"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
