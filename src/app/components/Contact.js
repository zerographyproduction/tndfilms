'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contact' className='py-32 lg:py-40 bg-gray-50' ref={ref}>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
              Let's Create
              <span className='block text-gray-500'>
                Something Extraordinary
              </span>
            </h2>

            <div className='w-24 h-1 bg-red-500 mb-8' />

            <p className='text-xl text-gray-700 leading-relaxed mb-12'>
              Ready to bring your vision to life? We're here to collaborate and
              create compelling visual narratives that resonate with your
              audience and achieve your goals.
            </p>

            <div className='space-y-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='flex items-center space-x-4'
              >
                <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center'>
                  <Mail size={20} className='text-red-500' />
                </div>
                <div>
                  <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-1 uppercase'>
                    EMAIL
                  </h3>
                  <a
                    href='mailto:tndfilms.info@gmail.com'
                    className='text-lg text-gray-900 hover:text-red-500 transition-colors duration-300'
                  >
                    tndfilms.info@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex items-center space-x-4'
              >
                <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center'>
                  <Phone size={20} className='text-red-500' />
                </div>
                <div>
                  <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-1 uppercase'>
                    PHONE
                  </h3>
                  <p className='text-lg text-gray-900'>+91 XXX XXX XXXX</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='flex items-center space-x-4'
              >
                <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center'>
                  <MapPin size={20} className='text-red-500' />
                </div>
                <div>
                  <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-1 uppercase'>
                    LOCATION
                  </h3>
                  <p className='text-lg text-gray-900'>India</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='pt-8'
              >
                <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-4 uppercase'>
                  Follow Us
                </h3>
                <div className='flex space-x-4'>
                  {[
                    {
                      label: 'Instagram',
                      href: '#',
                      icon: <Instagram size={20} />,
                    },
                    {
                      label: 'LinkedIn',
                      href: '#',
                      icon: <Linkedin size={20} />,
                    },
                    {
                      label: 'Facebook',
                      href: '#',
                      icon: <Facebook size={20} />,
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className='w-12 h-12 bg-white border border-gray-200 hover:border-red-500 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-300 shadow-sm hover:shadow-md'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className='lg:pl-12'
          >
            <div className='bg-white border border-gray-200 p-8 shadow-2xl'>
              <h3 className='text-2xl font-light mb-8 text-gray-900'>
                Start Your Project
              </h3>

              <div className='space-y-8'>
                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      placeholder='Enter your full name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none transition-colors duration-300 rounded-none'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      placeholder='your.email@example.com'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none transition-colors duration-300 rounded-none'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                      Project Type
                    </label>
                    <select
                      name='projectType'
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg text-gray-700 focus:outline-none transition-colors duration-300 rounded-none'
                    >
                      <option value=''>Select project type</option>
                      <option value='documentary'>Documentary</option>
                      <option value='short-film'>Short Film</option>
                      <option value='music-video'>Music Video</option>
                      <option value='brand-video'>Brand Video</option>
                      <option value='corporate-video'>Corporate Video</option>
                      <option value='commercial'>Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      name='message'
                      placeholder='Tell us about your project, timeline, and budget'
                      value={formData.message}
                      onChange={handleInputChange}
                      className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none resize-none transition-colors duration-300 rounded-none'
                    />
                  </div>
                </div>

                <motion.button
                  onClick={handleSubmit}
                  className='group flex items-center justify-between w-full px-8 py-4 bg-red-500 hover:bg-red-600 text-white border-2 border-red-500 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='text-sm font-medium tracking-wide uppercase'>
                    Send Message
                  </span>
                  <ArrowRight
                    className='group-hover:translate-x-1 transition-transform duration-300'
                    size={20}
                  />
                </motion.button>

                <p className='text-sm text-gray-500 leading-relaxed'>
                  We'll get back to you within 24 hours to discuss your project
                  and provide a detailed quote.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className='mt-32 pt-16 border-t border-gray-200'
        >
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-light text-red-500'>24</span>
              </div>
              <h4 className='text-lg font-light mb-2 text-gray-900'>
                Hour Response
              </h4>
              <p className='text-gray-600 text-sm'>
                Quick turnaround on all inquiries
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-light text-red-500'>∞</span>
              </div>
              <h4 className='text-lg font-light mb-2 text-gray-900'>
                Free Consultation
              </h4>
              <p className='text-gray-600 text-sm'>
                No-obligation project discussion
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-light text-red-500'>✓</span>
              </div>
              <h4 className='text-lg font-light mb-2 text-gray-900'>
                Custom Solutions
              </h4>
              <p className='text-gray-600 text-sm'>
                Tailored to your specific needs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
