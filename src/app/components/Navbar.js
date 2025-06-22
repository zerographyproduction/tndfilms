'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex justify-between items-center h-20'>
          <motion.div
            className='text-3xl font-light tracking-wide text-gray-900'
            whileHover={{ scale: 1.05 }}
          >
            TND<span className='text-red-500'>.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4 lg:space-x-6'>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide px-2 py-2 relative group'
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <motion.button
              className='bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-gray-900'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className='px-6 py-6 space-y-4'>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block text-gray-700 hover:text-gray-900 transition-colors duration-300 py-2'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className='w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-light tracking-wide transition-all duration-300 mt-4'>
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
