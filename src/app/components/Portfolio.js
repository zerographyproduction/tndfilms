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
      title: "Attuned With AT | Ft. Rajiv Makhni | Coming Soon",
      category: 'Podcast Films',
      year: '2024',
      client: 'itel india',
      videoId: 'T_bIUw7GdTU',
      slug: 'attuned-with-at-ft-rajiv-makhni-coming-soon',
    },
    {
      title: "Wilderness Quest – Adventure Short",
      category: 'Adventure Films',
      year: '2024',
      client: 'Jumpin Heights',
      videoId: '1ZVsxIGs1Kg',
      slug: 'wilderness-quest-adventure-short',
    },
    {
      title: "Mountain Dew Real Heroes presents The Fall - India's First Frozen Waterfall Ascent",
      category: 'Documentaries',
      year: '2024',
      client: 'Mountain Dew India',
      videoId: 'T_bIUw7GdTU',
      slug: 'mountain-dew-real-heroes-presents-the-fall-indias-first-frozen-waterfall-ascent',
    },
  ];

  return (
    <section id='portfolio' className='py-16 lg:py-24 bg-white' ref={ref}>
      <div className='max-w-6xl mx-auto px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-normal leading-tight mb-4 text-gray-900 tracking-wide'>
            Featured Work
          </h2>
          <div className='w-16 h-0.5 bg-red-500 mx-auto mb-6' />
          <p className='text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            A glimpse into our most impactful video productions, spanning
            corporate communications, documentaries, and brand storytelling.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6 mb-10'>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='group cursor-pointer'
            >
              <Link href={`/portfolio/${project.slug}`}>
              <div className='bg-white border-0 hover:shadow-lg transition-all duration-300 overflow-hidden'>
                <div className='aspect-[4/3] relative overflow-hidden group-hover:scale-[1.02] transition-all duration-300'>
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                    alt={project.title}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      // Fallback to medium quality thumbnail if maxres fails
                      e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className='w-16 h-16 bg-red-500 hover:bg-red-500/80 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300'>
                      <Play size={24} className='text-white ml-1' fill="white" />
                    </div>
                  </motion.div>

                  {/* Always visible subtle play indicator */}
                  <div className='absolute top-4 right-4 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center'>
                    <Play size={16} className='text-white ml-0.5' fill="white" />
                  </div>
                </div>

                <div className='p-4'>
                  <div className='flex justify-between items-center mb-3'>
                    <span className='text-gray-600 text-xs uppercase tracking-wider bg-gray-100 px-2 py-1'>
                      {project.category}
                    </span>
                    <span className='text-gray-400 text-xs'>
                      {project.year}
                    </span>
                  </div>

                  <h3 className='text-base font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 leading-snug'>
                    {project.title}
                  </h3>

                  <p className='text-xs text-gray-500 mb-3 uppercase tracking-wide'>
                    {project.client}
                  </p>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid md:grid-cols-4 gap-6 mb-10 p-6 bg-gray-50'
        >
          <div className='text-center'>
            <div className='text-2xl font-normal text-gray-900 mb-1'>40+</div>
            <div className='text-xs text-gray-600 uppercase tracking-wider'>
              Videos Produced
            </div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-normal text-gray-900 mb-1'>25+</div>
            <div className='text-xs text-gray-600 uppercase tracking-wider'>
              Happy Clients
            </div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-normal text-gray-900 mb-1'>12+</div>
            <div className='text-xs text-gray-600 uppercase tracking-wider'>
              Years Experience
            </div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-normal text-gray-900 mb-1'>6</div>
            <div className='text-xs text-gray-600 uppercase tracking-wider'>
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
              className='group flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm transition-all duration-300 mx-auto'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className='font-medium tracking-wide'>
                View Full Portfolio
              </span>
              <ArrowRight
                className='group-hover:translate-x-1 transition-transform duration-300'
                size={16}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
