import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display font-black tracking-tighter text-2xl uppercase">Ascend Web</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center p-1 rounded-full border border-dark-border bg-dark-bg/50 backdrop-blur-sm gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-[0.2em] text-gray-400 hover:text-white hover:bg-dark-border transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-dark-border text-xs font-medium uppercase tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            Build ↗
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-dark-bg border-b border-dark-border py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wide text-gray-400 hover:text-accent transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
