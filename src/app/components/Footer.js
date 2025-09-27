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
  User,
  Youtube,
  Twitter,
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/tndfilmspvtltd/',
      label: 'Instagram',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'ttps://www.linkedin.com/company/108711961/admin/dashboard/',
      label: 'LinkedIn',
    },
    {
      icon: <Facebook size={20} />,
      href: 'https://www.facebook.com/tndfilmspvtltd/',
      label: 'Facebook',
    },
    {
      icon: <Youtube size={20} />,
      href: 'https://www.youtube.com/channel/UCJm4S75MEYNqxZBFzoEOJsg',
      label: 'YouTube',
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://x.com/tndfilms',
      label: 'X',
    },
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
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Team contacts with updated info
  const teamContacts = [
    {
      name: 'General Inquiries',
      email: 'Info@tndfilms.com',
      phone: '+91 9013218028',
      role: 'Main Contact',
    },
    {
      name: 'Kuldeep Chauhan',
      email: 'Kuldeepchauhan@tndfilms.com',
      phone: '+91 9013218028',
      role: 'Post-Production Head',
    },
    {
      name: 'Nitin Kumar Pal',
      email: 'Nitinkumarpal@tndfilms.com',
      phone: '+91 9871468120',
      role: 'Creative Director',
    },
    {
      name: 'Vipin Kumar Pal',
      email: 'Vipinkumarpal@tndfilms.com',
      phone: '+91 9540998320',
      role: 'Director of Photography',
    },
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
              className='lg:col-span-1'
            >
              <div className='mb-6 flex items-center space-x-3'>
                <img
                  src='/tndblack.png'
                  alt='TND Films Pvt. Ltd. Logo'
                  className='h-12 w-auto'
                />
                <div className='text-2xl font-light text-gray-900'>
                  TND Films Pvt. Ltd.
                </div>
              </div>
              <p className='text-gray-600 mb-8 leading-relaxed text-lg'>
                Transforming visions into reality through the art of video
                production. We bring your stories to life with creativity,
                passion, and technical excellence.
              </p>

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
                      target='_blank'
                      rel='noopener noreferrer'
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
                      href='/services'
                      className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm group flex items-center'
                    >
                      <span className='w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300'></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className='text-lg font-light text-gray-900 mb-6 tracking-wide'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className='text-lg font-light text-gray-900 mb-6 tracking-wide'>
                Contact
              </h4>
              <div className='space-y-4'>
                {/* Main Contact */}
                <div className='flex items-center space-x-3'>
                  <Mail size={16} className='text-red-500 flex-shrink-0' />
                  <a
                    href='mailto:Info@tndfilms.com'
                    className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm'
                  >
                    Info@tndfilms.com
                  </a>
                </div>

                <div className='flex items-center space-x-3'>
                  <Phone size={16} className='text-red-500 flex-shrink-0' />
                  <a
                    href='tel:+919013218028'
                    className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm'
                  >
                    +91 9013218028
                  </a>
                </div>

                <div className='flex items-center space-x-3'>
                  <MapPin size={16} className='text-red-500 flex-shrink-0' />
                  <span className='text-gray-600 text-sm'>India</span>
                </div>

                {/* Team Contacts */}
                <div className='pt-4 border-t border-gray-200'>
                  <h5 className='text-sm font-mono text-gray-500 tracking-wider mb-3 uppercase'>
                    Team Contacts
                  </h5>
                  <div className='space-y-3'>
                    {teamContacts.slice(1).map((contact) => (
                      <div
                        key={contact.email}
                        className='border-b border-gray-100 pb-2 last:border-b-0'
                      >
                        <div className='text-xs text-gray-700 font-medium mb-1'>
                          {contact.name.split(' ')[0]} -{' '}
                          {contact.role
                            .replace(' Head', '')
                            .replace(' of Photography', '')}
                        </div>
                        <div className='space-y-1'>
                          <a
                            href={`mailto:${contact.email}`}
                            className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-xs block'
                          >
                            {contact.email}
                          </a>
                          <a
                            href={`tel:${contact.phone.replace(/\s/g, '')}`}
                            className='text-gray-600 hover:text-red-500 transition-colors duration-300 text-xs block'
                          >
                            {contact.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
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
                &copy; {new Date().getFullYear()} TND Films Pvt. Ltd. All rights
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
