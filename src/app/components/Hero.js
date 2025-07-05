'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Transform Visions Into',
      subtitle: 'Cinematic Reality',
      description:
        'We craft visual narratives that captivate, inspire, and drive meaningful connections between brands and audiences. ',
    },
    {
      title: 'Stories That',
      subtitle: 'Move Worlds',
      description:
        'From concept to delivery, we bring unparalleled creativity and technical excellence to every frame.',
    },
    {
      title: 'Visual Excellence',
      subtitle: 'Redefined',
      description:
        'Award-winning cinematography meets cutting-edge production in every project we undertake.',
    },
  ];

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-white'
    >
      {/* Background Video */}
      <div className='absolute inset-0'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src='/Travel_1.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-red-900/20' />
        <motion.div
          className='absolute top-20 right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className='absolute bottom-20 left-20 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Geometric Shapes */}
        <div className='absolute top-32 left-16 w-2 h-2 bg-red-500 rounded-full opacity-60'></div>
        <div className='absolute top-64 right-32 w-3 h-3 bg-gray-800 rounded-full opacity-40'></div>
        <div className='absolute bottom-48 left-32 w-1 h-20 bg-red-500/30'></div>
        <div className='absolute bottom-32 right-48 w-16 h-1 bg-gray-800/20'></div>
      </div>

      <div className='relative z-20 text-center max-w-6xl mx-auto px-6 pt-20'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className='mb-12'
          >
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-none text-white drop-shadow-2xl'>
              {heroSlides[currentSlide].title}
              <span className='block text-red-400 mt-4'>
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg'>
              {heroSlides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-6 justify-center items-center'
        >
          <Link href='/portfolio'>
            <motion.button
              className='group bg-red-500 hover:bg-red-600 text-white px-10 py-4 flex items-center gap-3 transition-all duration-300 font-light tracking-wide shadow-lg hover:shadow-xl'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              Watch Our Work
            </motion.button>
          </Link>

          <Link href='/#contact'>
            <motion.button
              className='group border-2 border-white hover:border-red-500 text-white hover:text-red-500 hover:bg-red-50 px-10 py-4 flex items-center gap-3 transition-all duration-300 font-light tracking-wide'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight
                size={20}
                className='group-hover:translate-x-1 transition-transform'
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Slide Indicators */}
        <div className='flex justify-center space-x-2 mt-16'>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                index === currentSlide ? 'bg-red-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => {
          const servicesSection = document.querySelector('#services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='hover:text-white transition-colors duration-300'
        >
          <ChevronDown size={32} className='text-white/70' />
        </motion.div>
      </motion.div>
    </section>
  );
}
