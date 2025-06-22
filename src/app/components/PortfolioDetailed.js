'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PortfolioDetailed() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Corporate', 'Documentary', 'Brand', 'Commercial'];

  const projects = [
    {
      title: 'IMI Bhubaneswar: Your Journey Begins Here',
      category: 'Corporate',
      year: '2024',
      client: 'IMI Bhubaneswar',
      description:
        'A comprehensive institutional video showcasing academic excellence and campus life.',
    },
    {
      title: 'Pipe Organ Heritage Documentary',
      category: 'Documentary',
      year: '2024',
      client: 'Cultural Heritage Project',
      description:
        'Exploring the rich tradition of pipe organ music and craftsmanship.',
    },
    {
      title: 'IMI Delhi 41st Annual Convocation',
      category: 'Corporate',
      year: '2024',
      client: 'IMI Delhi',
      description:
        'Ceremonial coverage celebrating academic achievements and milestones.',
    },
    {
      title: 'IRMA: The Campus That Cares',
      category: 'Brand',
      year: '2024',
      client: 'IRMA Anand',
      description:
        'Brand video showcasing institutional values and student community.',
    },
    {
      title: 'Ending Gender-Based Violence',
      category: 'Documentary',
      year: '2024',
      client: 'RYTHM Foundation',
      description:
        'Impactful social documentary addressing critical contemporary issues.',
    },
    {
      title: 'Welcome to the Milk Capital',
      category: 'Documentary',
      year: '2024',
      client: 'IRMA Anand',
      description:
        'Life and culture in Anand through the lens of academic community.',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className='py-32 lg:py-40 min-h-screen'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='mb-20'
        >
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8'>
            Our
            <span className='block text-white/60'>Work</span>
          </h1>
          <p className='text-xl text-white/70 max-w-3xl'>
            A curated selection of our most impactful video productions,
            spanning corporate communications, documentaries, and brand
            storytelling.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-wrap gap-4 mb-16 pb-8 border-b border-white/10'
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 text-sm font-mono tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-white border-b border-white'
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className='space-y-16'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='group cursor-pointer border-b border-white/10 pb-16 last:border-b-0'
            >
              <div className='grid lg:grid-cols-12 gap-8 lg:gap-12'>
                <div className='lg:col-span-8'>
                  <div className='aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded mb-6 flex items-center justify-center group-hover:from-white/10 group-hover:to-white/20 transition-all duration-500'>
                    <span className='text-sm font-mono text-white/40 tracking-wider'>
                      VIDEO PREVIEW
                    </span>
                  </div>
                </div>

                <div className='lg:col-span-4 space-y-6'>
                  <div>
                    <div className='flex items-center gap-4 mb-4'>
                      <span className='text-sm font-mono text-white/60 tracking-wider'>
                        {project.category}
                      </span>
                      <span className='text-sm font-mono text-white/40 tracking-wider'>
                        {project.year}
                      </span>
                    </div>

                    <h3 className='text-2xl md:text-3xl font-light mb-4 group-hover:text-white/80 transition-colors duration-300'>
                      {project.title}
                    </h3>

                    <p className='text-sm font-mono text-white/60 tracking-wider mb-4'>
                      {project.client}
                    </p>

                    <p className='text-white/70 leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  <motion.a
                    href='#'
                    className='inline-flex items-center text-sm font-mono tracking-wider hover:text-white/70 transition-colors duration-300'
                    whileHover={{ x: 5 }}
                  >
                    VIEW PROJECT →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
