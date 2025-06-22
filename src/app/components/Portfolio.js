'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const portfolioItems = [
    {
      title: 'IMI Bhubaneswar: Your Journey Begins Here',
      category: 'Corporate Video',
      year: '2024',
      description:
        'A comprehensive institutional video showcasing academic excellence, campus life, and the transformative journey of students at IMI Bhubaneswar.',
    },
    {
      title: 'Pipe Organ Heritage',
      category: 'Documentary',
      year: '2024',
      description:
        'Step back in time exploring the rich heritage of pipe organ music and craftsmanship, capturing the artistry of traditional instrument making.',
    },
    {
      title: 'IMI Delhi 41st Annual Convocation',
      category: 'Event Coverage',
      year: '2024',
      description:
        'Highlights from the prestigious convocation ceremony celebrating academic achievements and milestone moments.',
    },
    {
      title: 'IRMA: The Campus That Cares',
      category: 'Brand Video',
      year: '2024',
      description:
        'Showcasing IRMA as a nurturing home away from home for students pursuing excellence in rural management.',
    },
    {
      title: 'Ending Gender-Based Violence',
      category: 'Social Impact',
      year: '2024',
      description:
        'Impactful documentary collaboration with RYTHM Foundation and Plan International addressing critical social issues.',
    },
    {
      title: 'Welcome to the Milk Capital',
      category: 'Documentary',
      year: '2024',
      description:
        'Exploring life and culture in Anand through the lens of the academic community and local heritage.',
    },
  ];

  return (
    <section id='portfolio' className='py-32 lg:py-40 bg-gray-50' ref={ref}>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='mb-20'
        >
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
            Featured
            <span className='block text-gray-500'>Work</span>
          </h2>
          <div className='w-24 h-1 bg-red-500 mb-8' />
          <p className='text-xl text-gray-700 max-w-3xl leading-relaxed'>
            A curated selection of our most impactful video productions,
            spanning corporate communications, documentaries, and brand
            storytelling.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='group cursor-pointer'
            >
              <div className='bg-white border border-gray-200 hover:border-red-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden'>
                <div className='aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group-hover:from-red-50 group-hover:to-red-100 transition-all duration-500'>
                  <motion.div
                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/20 flex items-center justify-center'
                    whileHover={{ scale: 1.05 }}
                  >
                    <Play size={48} className='text-white drop-shadow-lg' />
                  </motion.div>

                  {/* Video Placeholder Design */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-16 h-16 border-4 border-gray-300 rounded-full flex items-center justify-center'>
                      <Play size={24} className='text-gray-400 ml-1' />
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex justify-between items-start mb-3'>
                    <div className='flex items-center gap-3'>
                      <span className='text-red-500 text-sm bg-red-50 border border-red-200 px-3 py-1 rounded-full font-mono tracking-wider'>
                        {item.category}
                      </span>
                      <span className='text-gray-400 text-xs font-mono tracking-wider'>
                        {item.year}
                      </span>
                    </div>
                    <ExternalLink
                      size={16}
                      className='text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    />
                  </div>

                  <h3 className='text-xl font-light text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300 leading-tight'>
                    {item.title}
                  </h3>

                  <p className='text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4'>
                    {item.description}
                  </p>

                  <motion.div
                    className='inline-flex items-center text-sm font-mono tracking-wider text-gray-400 group-hover:text-red-500 transition-colors duration-300'
                    whileHover={{ x: 5 }}
                  >
                    VIEW PROJECT →
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
            className='border-2 border-gray-800 hover:border-red-500 text-gray-800 hover:text-red-500 hover:bg-red-50 px-10 py-4 font-light tracking-wide transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
