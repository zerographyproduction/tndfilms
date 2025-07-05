'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Different nav items for home page vs other pages
  const isHomePage = pathname === '/';

  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    // Handle hash links on the same page
    if (href.startsWith('#') && isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex justify-between items-center h-20'>
          <Link href='/'>
            <motion.div
              className={`text-3xl font-light tracking-wide cursor-pointer transition-colors duration-500 ${
                scrolled || !isHomePage ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              TND<span className='text-red-500'>.</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4 lg:space-x-6'>
            {navItems.map((item) => {
              const isActive =
                (pathname === '/' && item.href === '#home') ||
                (pathname === '/' && item.href === '/#contact') ||
                (pathname === '/about' && item.href === '/about') ||
                (pathname === '/services' && item.href === '/services') ||
                (pathname === '/portfolio' && item.href === '/portfolio');

              return (
                <motion.div key={item.name} className='relative'>
                  {item.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`transition-colors duration-300 font-light tracking-wide px-2 py-2 relative group ${
                        isActive
                          ? 'text-red-500'
                          : scrolled || !isHomePage
                          ? 'text-gray-700 hover:text-gray-900'
                          : 'text-white/90 hover:text-white drop-shadow-lg'
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </button>
                  ) : (
                    <Link href={item.href}>
                      <motion.div
                        className={`transition-colors duration-300 font-light tracking-wide px-2 py-2 relative group ${
                          isActive
                            ? 'text-red-500'
                            : scrolled || !isHomePage
                            ? 'text-gray-700 hover:text-gray-900'
                            : 'text-white/90 hover:text-white drop-shadow-lg'
                        }`}
                        whileHover={{ y: -2 }}
                      >
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        ></span>
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Link href='/#contact'>
              <motion.button
                className='bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              scrolled || !isHomePage ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}
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
                {navItems.map((item) => {
                  const isActive =
                    (pathname === '/' && item.href === '#home') ||
                    (pathname === '/' && item.href === '/#contact') ||
                    (pathname === '/about' && item.href === '/about') ||
                    (pathname === '/services' && item.href === '/services') ||
                    (pathname === '/portfolio' && item.href === '/portfolio');

                  return item.href.startsWith('#') ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-300 py-2 ${
                        isActive ? 'text-red-500' : ''
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-gray-700 hover:text-gray-900 transition-colors duration-300 py-2 ${
                        isActive ? 'text-red-500' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link href='/#contact'>
                  <button
                    className='w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-light tracking-wide transition-all duration-300 mt-4'
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
