'use client';
import { motion } from 'framer-motion';
import {
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
  ];

  const services = [
    'Documentaries',
    'Short Films',
    'Music Videos',
    'Brand Videos',
    'Corporate Videos',
    'Commercials',
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className='bg-white border-t-2 border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        {/* Main Footer Content */}
        <div className='py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='lg:col-span-2'
            >
              <h3 className='text-4xl font-light mb-6 tracking-wide text-gray-900'>
                TND<span className='text-red-500'>.</span>
              </h3>
              <p className='text-gray-600 mb-8 leading-relaxed text-lg max-w-md'>
                Transforming visions into reality through the art of video
                production. We bring your stories to life with creativity,
                passion, and technical excellence.
              </p>

              {/* Newsletter Signup */}
              {/* <div className='mb-8'>
                <h4 className='text-sm font-mono text-gray-500 tracking-wider mb-4 uppercase'>
                  Stay Updated
                </h4>
                <div className='flex'>
                  <input
                    type='email'
                    placeholder='your.email@example.com'
                    className='flex-1 px-4 py-3 border border-gray-200 focus:border-red-500 focus:outline-none text-gray-700 rounded-none'
                  />
                  <motion.button
                    className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white border-2 border-red-500 hover:border-red-600 transition-all duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div> */}

              {/* Social Links */}
              <div>
                <h4 className='text-sm font-mono text-gray-500 tracking-wider mb-4 uppercase'>
                  Follow Us
                </h4>
                <div className='flex space-x-4'>
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className='w-12 h-12 bg-gray-50 border border-gray-200 hover:border-red-500 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className='text-lg font-light text-gray-900 mb-6 tracking-wide'>
                Services
              </h4>
              <ul className='space-y-3'>
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href='#services'
                      className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm group flex items-center'
                    >
                      <span className='w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300'></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className='text-lg font-light text-gray-900 mb-6 tracking-wide'>
                Quick Links
              </h4>
              <ul className='space-y-3 mb-8'>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm group flex items-center'
                    >
                      <span className='w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300'></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className='space-y-3'>
                <h4 className='text-sm font-mono text-gray-500 tracking-wider mb-4 uppercase'>
                  Contact
                </h4>
                <div className='flex items-center space-x-3'>
                  <Mail size={16} className='text-red-500' />
                  <a
                    href='mailto:tndfilms.info@gmail.com'
                    className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm'
                  >
                    tndfilms.info@gmail.com
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <Phone size={16} className='text-red-500' />
                  <span className='text-gray-600 text-sm'>
                    +91 XXX XXX XXXX
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <MapPin size={16} className='text-red-500' />
                  <span className='text-gray-600 text-sm'>India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-gray-200 py-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8'>
              <p className='text-gray-500 text-sm font-mono tracking-wider'>
                &copy; {new Date().getFullYear()} TND Films. All rights
                reserved.
              </p>
              <div className='flex space-x-6'>
                <a
                  href='#'
                  className='text-gray-500 hover:text-red-500 text-sm transition-colors duration-300'
                >
                  Privacy Policy
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-red-500 text-sm transition-colors duration-300'
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <div className='flex items-center space-x-2'>
              <span className='text-gray-500 text-sm font-mono tracking-wider'>
                Crafted with passion for visual storytelling
              </span>
              <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className='absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-red-500 to-transparent'></div>
        <div className='absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-red-500 to-transparent'></div>
      </div>
    </footer>
  );
}
