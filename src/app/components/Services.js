'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Film, Video, Music, Building, Users, Tv } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Film size={32} />,
      title: 'Documentaries',
      description:
        'Narrative-driven documentaries that explore real-world stories with meticulous research and production excellence.',
    },
    {
      icon: <Video size={32} />,
      title: 'Short Films',
      description:
        'Cinematic short-form content crafted with the same care and attention as feature-length productions.',
    },
    {
      icon: <Music size={32} />,
      title: 'Music Videos',
      description:
        'Visually stunning music videos that amplify your sound, complement your message, and captivate audiences.',
    },
    {
      icon: <Building size={32} />,
      title: 'Brand Videos',
      description:
        'Strategic brand storytelling that strengthens identity, communicates values, and drives meaningful engagement.',
    },
    {
      icon: <Users size={32} />,
      title: 'Corporate Videos',
      description:
        'Professional corporate content for training, internal communications, and stakeholder engagement initiatives.',
    },
    {
      icon: <Tv size={32} />,
      title: 'Commercials',
      description:
        'Compelling commercial content designed to capture attention, convey messages quickly, and drive action.',
    },
  ];

  return (
    <section id='services' className='py-32 lg:py-40 bg-white' ref={ref}>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-light mb-8 text-gray-900'>
            Our
            <span className='block text-gray-500'>Services</span>
          </h2>
          <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
          <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            From concept to completion, we offer comprehensive video production
            services tailored to meet your unique creative and business
            objectives.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='group cursor-pointer'
            >
              <div className='bg-white border border-gray-200 hover:border-red-500/30 p-8 h-full transition-all duration-500 shadow-lg hover:shadow-2xl group-hover:-translate-y-2'>
                {/* Decorative Elements */}
                <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/5 to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-gray-500/5 to-transparent'></div>

                <div className='relative'>
                  <motion.div
                    className='text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300'
                    whileHover={{ rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className='text-2xl font-light mb-4 text-gray-900 group-hover:text-red-500 transition-colors duration-300'>
                    {service.title}
                  </h3>

                  <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6'>
                    {service.description}
                  </p>

                  <motion.div
                    className='inline-flex items-center text-sm font-mono tracking-wider text-gray-400 group-hover:text-red-500 transition-colors duration-300'
                    whileHover={{ x: 5 }}
                  >
                    LEARN MORE →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center mt-16'
        >
          <motion.button
            className='bg-red-500 hover:bg-red-600 text-white px-10 py-4 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
