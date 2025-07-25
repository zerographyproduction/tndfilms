'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      title: 'Transform Visions Into',
      subtitle: 'Cinematic Reality',
      description:
        'We craft visual narratives that captivate, inspire, and drive meaningful connections between brands and audiences.',
      video: '/Travel_1.mp4',
      category: 'Travel & Adventure'
    },
    {
      title: 'Stories That',
      subtitle: 'Move Worlds',
      description:
        'From concept to delivery, we bring unparalleled creativity and technical excellence to every frame.',
      video: '/Architectural Photography.mp4',
      category: 'Architectural'
    },
    {
      title: 'Visual Excellence',
      subtitle: 'Redefined',
      description:
        'Award-winning cinematography meets cutting-edge production in every project we undertake.',
      video: '/Product_Photography.mp4',
      category: 'Product Films'
    },
    {
      title: 'Capturing Life\'s',
      subtitle: 'Greatest Moments',
      description:
        'Professional event documentation that preserves memories and tells compelling stories.',
      video: '/event_Photography.mp4',
      category: 'Event Coverage'
    },
    {
      title: 'Portraits That',
      subtitle: 'Tell Stories',
      description:
        'Intimate portraiture that captures the essence, character, and authenticity of our subjects.',
      video: '/potrait_photography.mp4',
      category: 'Portrait Photography'
    },
  ];

  // Auto-advance hero slides with progress
  useEffect(() => {
    if (isPaused) return;
    
    const duration = 6000; // 6 seconds
    const interval = 50; // Update every 50ms
    
    setProgress(0); // Reset progress when slide changes
    
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (interval / duration) * 100;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, heroSlides.length, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-white'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Video Carousel */}
      <div className='absolute inset-0'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className='absolute inset-0 w-full h-full object-cover'
              key={heroSlides[currentSlide].video}
            >
              <source src={heroSlides[currentSlide].video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </AnimatePresence>
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-red-500/20' />
        
        {/* Video Category Badge */}
        <motion.div
          key={`badge-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-24 left-6 md:left-12 z-10"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
            <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
              {heroSlides[currentSlide].category}
            </span>
          </div>
        </motion.div>
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

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-red-500 transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-red-500 transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
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
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight text-white drop-shadow-2xl'>
              {heroSlides[currentSlide].title}
              <span className='block text-red-500/80 mt-2'>
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
            <p className='text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg'>
              {heroSlides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <Link href='/portfolio'>
            <motion.button
              className='group bg-red-500 hover:bg-red-600 text-white px-6 py-2 flex items-center gap-2 transition-all duration-300 font-medium tracking-wide text-sm'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={16} />
              Watch Our Work
            </motion.button>
          </Link>

          <Link href='/#contact'>
            <motion.button
              className='group border border-white hover:border-red-500 text-white hover:text-red-500 hover:bg-red-500/10 px-6 py-2 flex items-center gap-2 transition-all duration-300 font-medium tracking-wide text-sm'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <ArrowRight
                size={16}
                className='group-hover:translate-x-1 transition-transform'
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Enhanced Slide Indicators */}
        <div className='flex justify-center space-x-3 mt-16'>
          {heroSlides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentSlide ? 'scale-110' : 'hover:scale-105'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-12 h-1 bg-white/50 group-hover:bg-white/70 transition-all duration-300 overflow-hidden">
                {index === currentSlide && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-red-500"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                )}
                {index === currentSlide && progress === 0 && (
                  <div className="absolute top-0 left-0 w-full h-full bg-red-500" />
                )}
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {slide.category}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Video Counter */}
        <motion.div
          key={`counter-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/60 text-xs font-medium tracking-wider mt-4"
        >
          {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </motion.div>
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
