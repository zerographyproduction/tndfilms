'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Play,
  ExternalLink,
  Instagram,
  Filter,
  Grid,
  List,
} from 'lucide-react';

export default function EnhancedPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Real projects from PDF
  const portfolioItems = [
    {
      title: 'IMI Bhubaneswar: Your Journey Begins Here',
      category: 'Corporate Video',
      year: '2024',
      client: 'IMI Bhubaneswar',
      description:
        'A comprehensive institutional video showcasing academic excellence, campus life, and the transformative journey of students at IMI Bhubaneswar.',
      videoUrl: 'https://example.com/imi-bhubaneswar',
      featured: true,
    },
    {
      title: "What's it like to step back in time?",
      category: 'Documentary',
      year: '2024',
      client: 'Cultural Heritage Project',
      description:
        'Exploring the rich heritage of pipe organ music and craftsmanship, capturing the artistry of traditional instrument making.',
      videoUrl: 'https://example.com/pipe-organ',
      tags: ['#pipeorgan', '#christianmusic', '#organist'],
      featured: true,
    },
    {
      title: 'IMI Delhi 41st Annual Convocation',
      category: 'Event Coverage',
      year: '2024',
      client: 'IMI Delhi',
      description:
        'Ceremonial coverage celebrating academic achievements and milestone moments from the prestigious convocation ceremony.',
      videoUrl: 'https://example.com/imi-delhi-convocation',
    },
    {
      title: 'IMI Insights Podcast Series',
      category: 'Digital Content',
      year: '2024',
      client: 'IMI',
      description:
        'Episode 1 featuring Prof Himadri Das, DG, IMI - Professional podcast production with high-quality audio and visual elements.',
      videoUrl: 'https://example.com/imi-insights',
    },
    {
      title: 'IMI New Delhi Virtual Campus Tour',
      category: 'Virtual Experience',
      year: '2024',
      client: 'IMI New Delhi',
      description:
        'Immersive virtual tour showcasing the campus facilities, academic spaces, and student life at IMI New Delhi.',
      videoUrl: 'https://example.com/virtual-tour',
    },
    {
      title: 'Welcome Batch of 2023-25',
      category: 'Corporate Video',
      year: '2024',
      client: 'IMI',
      description:
        'Welcome video for new students joining the 2023-25 batch, showcasing the journey ahead.',
      videoUrl: 'https://example.com/welcome-batch',
    },
    {
      title: 'IRMA: The Campus That Cares',
      category: 'Brand Video',
      year: '2024',
      client: 'IRMA Anand',
      description:
        'A heartwarming brand video showcasing IRMA as a nurturing home away from home for students pursuing excellence in rural management.',
      videoUrl: 'https://example.com/irma-campus',
      featured: true,
    },
    {
      title: 'Welcome to the Milk Capital of India',
      category: 'Documentary',
      year: '2024',
      client: 'IRMA Anand',
      description:
        'Life and culture in Anand through the lens of the academic community and local heritage, exploring what makes this city special.',
      videoUrl: 'https://example.com/milk-capital',
    },
    {
      title: 'IRMA: A Tribute to Shyam Benegal',
      category: 'Tribute Video',
      year: '2024',
      client: 'IRMA Students',
      description:
        'A heartfelt tribute to legendary filmmaker Shyam Benegal, created by IRMA students showcasing his impact on Indian cinema.',
      videoUrl: 'https://example.com/shyam-benegal-tribute',
    },
    {
      title: 'Ending Gender-Based Violence',
      category: 'Social Impact',
      year: '2024',
      client: 'RYTHM Foundation & Plan International',
      description:
        'Impactful social documentary addressing critical contemporary issues in collaboration with RYTHM Foundation and Plan International.',
      videoUrl: 'https://example.com/gender-violence',
      featured: true,
    },
  ];

  const instagramFilters = [
    'https://www.instagram.com/reel/DAk6IaSSu4N/',
    'https://www.instagram.com/reel/C8hDgP2pxZs/',
    'https://www.instagram.com/p/Cwu5h3LPrym/',
    'https://www.instagram.com/reel/DGFIKZXzYLP/',
    'https://www.instagram.com/reel/DBTtUu8Rmic/',
    'https://www.instagram.com/reel/DIgauwFSs2U/',
    'https://www.instagram.com/p/DITr9jSNXYY/',
  ];

  const categories = [
    'All',
    'Corporate Video',
    'Documentary',
    'Brand Video',
    'Event Coverage',
    'Digital Content',
    'Virtual Experience',
    'Tribute Video',
    'Social Impact',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const featuredProjects = portfolioItems.filter((item) => item.featured);

  return (
    <div className='bg-white min-h-screen' ref={ref}>
      {/* Hero Section */}
      <section className='py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className='text-center mb-16'
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
              Our
              <span className='block text-red-500'>Work</span>
            </h1>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
            <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              A comprehensive showcase of our video production expertise,
              spanning corporate communications, documentaries, brand
              storytelling, and social impact campaigns.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='grid md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto'
          >
            <div className='text-center'>
              <div className='text-3xl font-light text-red-500 mb-2'>
                {portfolioItems.length}+
              </div>
              <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                Projects
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-red-500 mb-2'>
                {categories.length - 1}
              </div>
              <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                Categories
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-red-500 mb-2'>15+</div>
              <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                Clients
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-light text-red-500 mb-2'>2024</div>
              <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                Latest Work
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-light mb-6 text-gray-900 text-center'>
              Featured Projects
            </h2>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 mb-20'>
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className='group cursor-pointer'
              >
                <div className='bg-white border border-gray-200 hover:border-red-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden'>
                  <div className='aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group-hover:from-red-50 group-hover:to-red-100 transition-all duration-500'>
                    <motion.div
                      className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/20 flex items-center justify-center'
                      whileHover={{ scale: 1.05 }}
                    >
                      <Play size={64} className='text-white drop-shadow-lg' />
                    </motion.div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-20 h-20 border-4 border-gray-300 rounded-full flex items-center justify-center'>
                        <Play size={32} className='text-gray-400 ml-1' />
                      </div>
                    </div>
                  </div>

                  <div className='p-8'>
                    <div className='flex justify-between items-center mb-4'>
                      <span className='text-red-500 text-sm bg-red-50 border border-red-200 px-3 py-1 rounded-full font-mono tracking-wider'>
                        {project.category}
                      </span>
                      <span className='text-gray-400 text-sm font-mono tracking-wider'>
                        {project.year}
                      </span>
                    </div>

                    <h3 className='text-2xl font-light text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300 leading-tight'>
                      {project.title}
                    </h3>

                    <p className='text-sm text-gray-500 mb-4 font-mono'>
                      Client: {project.client}
                    </p>

                    <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6'>
                      {project.description}
                    </p>

                    {project.tags && (
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className='text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className='py-24 lg:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-light mb-6 text-gray-900 text-center'>
              All Projects
            </h2>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
          </motion.div>

          {/* Filters and Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-12'
          >
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
              {/* Category Filters */}
              <div className='flex flex-wrap gap-3'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 text-sm font-mono tracking-wider transition-all duration-300 border ${
                      activeFilter === category
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-red-500/30 hover:text-red-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className='flex items-center gap-2 bg-white border border-gray-200 p-1 rounded'>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors duration-300 ${
                    viewMode === 'list'
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            layout
            className={
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-8'
            }
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  viewMode === 'list'
                    ? 'grid lg:grid-cols-3 gap-8 items-center'
                    : ''
                }`}
              >
                <div
                  className={`bg-white border border-gray-200 hover:border-red-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden ${
                    viewMode === 'list'
                      ? 'lg:col-span-3 grid lg:grid-cols-3 gap-0'
                      : ''
                  }`}
                >
                  <div
                    className={`aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group-hover:from-red-50 group-hover:to-red-100 transition-all duration-500 ${
                      viewMode === 'list' ? 'lg:col-span-1' : ''
                    }`}
                  >
                    <motion.div
                      className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/20 flex items-center justify-center'
                      whileHover={{ scale: 1.05 }}
                    >
                      <Play
                        size={viewMode === 'list' ? 32 : 48}
                        className='text-white drop-shadow-lg'
                      />
                    </motion.div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div
                        className={`border-4 border-gray-300 rounded-full flex items-center justify-center ${
                          viewMode === 'list' ? 'w-12 h-12' : 'w-16 h-16'
                        }`}
                      >
                        <Play
                          size={viewMode === 'list' ? 16 : 24}
                          className='text-gray-400 ml-1'
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 ${
                      viewMode === 'list' ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div className='flex justify-between items-start mb-3'>
                      <div className='flex items-center gap-3'>
                        <span className='text-red-500 text-sm bg-red-50 border border-red-200 px-3 py-1 rounded-full font-mono tracking-wider'>
                          {project.category}
                        </span>
                        <span className='text-gray-400 text-xs font-mono tracking-wider'>
                          {project.year}
                        </span>
                      </div>
                      <ExternalLink
                        size={16}
                        className='text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      />
                    </div>

                    <h3
                      className={`font-light text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300 leading-tight ${
                        viewMode === 'list' ? 'text-xl' : 'text-lg'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className='text-sm text-gray-500 mb-3 font-mono'>
                      Client: {project.client}
                    </p>

                    <p
                      className={`text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4 ${
                        viewMode === 'list' ? 'text-base' : 'text-sm'
                      }`}
                    >
                      {project.description}
                    </p>

                    {project.tags && (
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className='text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

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
          </motion.div>
        </div>
      </section>

      {/* Instagram Filters Section */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-light text-gray-900 mb-6'>
              Instagram
              <span className='block text-red-500'>Filters & Reels</span>
            </h2>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
            <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              Creative content and interactive filters showcasing our
              versatility in digital media and social platforms.
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6'>
            {instagramFilters.map((url, index) => (
              <motion.a
                key={index}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='aspect-square bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-1 rounded-lg group'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className='w-full h-full bg-white rounded-md flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300'>
                  <Instagram
                    size={24}
                    className='text-gray-400 group-hover:text-pink-500 transition-colors duration-300'
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-3xl font-light mb-6 text-gray-900'>
              Ready to Create Your Next Project?
            </h3>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Let's collaborate to create compelling visual narratives that
              resonate with your audience and achieve your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href='/#contact'
                className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href='/services'
                className='border-2 border-gray-800 hover:border-red-500 text-gray-800 hover:text-red-500 hover:bg-red-50 px-8 py-3 font-light tracking-wide transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
