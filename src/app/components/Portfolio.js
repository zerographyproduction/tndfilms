'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Featured projects for homepage preview
  const featuredProjects = [
    {
      title: 'IMI Bhubaneswar: Your Journey Begins Here',
      category: 'Corporate Video',
      year: '2024',
      client: 'IMI Bhubaneswar',
    },
    {
      title: 'Ending Gender-Based Violence',
      category: 'Social Impact',
      year: '2024',
      client: 'RYTHM Foundation',
    },
    {
      title: 'IRMA: The Campus That Cares',
      category: 'Brand Video',
      year: '2024',
      client: 'IRMA Anand',
    },
  ];

  return (
    <section id='portfolio' className='py-24 lg:py-32 bg-gray-50' ref={ref}>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-gray-900'>
            Featured
            <span className='block text-gray-500'>Work</span>
          </h2>
          <div className='w-24 h-1 bg-red-500 mx-auto mb-6' />
          <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            A glimpse into our most impactful video productions, spanning
            corporate communications, documentaries, and brand storytelling.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='group cursor-pointer'
            >
              <div className='bg-white border border-gray-200 hover:border-red-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden'>
                <div className='aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group-hover:from-red-50 group-hover:to-red-100 transition-all duration-500'>
                  <motion.div
                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/20 flex items-center justify-center'
                    whileHover={{ scale: 1.05 }}
                  >
                    <Play size={32} className='text-white drop-shadow-lg' />
                  </motion.div>

                  {/* Video Placeholder Design */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-12 h-12 border-4 border-gray-300 rounded-full flex items-center justify-center'>
                      <Play size={16} className='text-gray-400 ml-1' />
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex justify-between items-center mb-3'>
                    <span className='text-red-500 text-sm bg-red-50 border border-red-200 px-3 py-1 rounded-full font-mono tracking-wider'>
                      {project.category}
                    </span>
                    <span className='text-gray-400 text-xs font-mono tracking-wider'>
                      {project.year}
                    </span>
                  </div>

                  <h3 className='text-lg font-light text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300 leading-tight'>
                    {project.title}
                  </h3>

                  <p className='text-sm text-gray-500 mb-4 font-mono'>
                    Client: {project.client}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid md:grid-cols-4 gap-8 mb-12 p-8 bg-white border border-gray-200 shadow-lg'
        >
          <div className='text-center'>
            <div className='text-3xl font-light text-red-500 mb-2'>50+</div>
            <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
              Projects Completed
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-light text-red-500 mb-2'>25+</div>
            <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
              Happy Clients
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-light text-red-500 mb-2'>12+</div>
            <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
              Years Experience
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-light text-red-500 mb-2'>6</div>
            <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
              Service Categories
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center'
        >
          <Link href='/portfolio'>
            <motion.button
              className='group flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl mx-auto'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='font-light tracking-wide'>
                View Full Portfolio
              </span>
              <ArrowRight
                className='group-hover:translate-x-1 transition-transform duration-300'
                size={20}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
