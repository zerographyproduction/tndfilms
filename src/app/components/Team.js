'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamMembers = [
    {
      name: 'Vipin Kumar Pal',
      role: 'Director of Photography',
      experience: '12+ Years',
      description:
        'With an extraordinary eye for detail and innate understanding of light and composition, Vipin commands the visual storytelling process. His expertise spans from capturing nuanced emotional depth to precise visual articulation for high-end campaigns.',
      specialties: [
        'Cinematic Composition',
        'Lighting Design',
        'Brand Campaigns',
      ],
    },
    {
      name: 'Nitin Kumar Pal',
      role: 'Creative Director',
      experience: '10+ Years',
      description:
        'A master of strategic storytelling with groundbreaking innovation. Nitin shapes the artistic and conceptual direction of our productions, ensuring each piece possesses unparalleled originality and strategic resonance.',
      specialties: [
        'Strategic Storytelling',
        'Brand Documentaries',
        'Creative Conceptualization',
      ],
    },
    {
      name: 'Kuldeep Chauhan',
      role: 'Post-Production Head',
      experience: '10+ Years',
      description:
        'The foundational vision behind TND with meticulous attention to the transformative art of editing. Kuldeep sculpts raw footage into polished, high-impact narratives that command attention and elevate each piece to cinematic excellence.',
      specialties: ['Advanced Editing', 'Color Grading', 'Sound Design'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your vision and goals',
    },
    {
      step: '02',
      title: 'Pre-Production',
      description: 'Detailed planning and conceptualization',
    },
    {
      step: '03',
      title: 'Production',
      description: 'Professional filming with cutting-edge equipment',
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Meticulous editing and refinement',
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Final product ready for deployment',
    },
  ];

  return (
    <section id='team' className='py-32 lg:py-40 bg-white' ref={ref}>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-light mb-8 text-gray-900'>
            The
            <span className='block text-gray-500'>Visionaries</span>
          </h2>
          <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
          <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Meet the passionate professionals who bring years of expertise,
            creative vision, and technical mastery to every project at TND
            Films.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='group'
            >
              <div className='bg-gray-50 border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2'>
                {/* Profile Header */}
                <div className='text-center mb-6'>
                  <div className='w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 border-2 border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl font-light text-red-600'>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className='text-2xl font-light mb-2 text-gray-900'>
                    {member.name}
                  </h3>
                  <p className='text-red-500 mb-1 font-medium'>{member.role}</p>
                  <p className='text-sm font-mono text-gray-500 tracking-wider'>
                    {member.experience}
                  </p>
                </div>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed mb-6 text-center'>
                  {member.description}
                </p>

                {/* Specialties */}
                <div className='space-y-2'>
                  <h4 className='text-sm font-mono text-gray-500 tracking-wider uppercase text-center mb-4'>
                    Specialties
                  </h4>
                  {member.specialties.map((specialty, i) => (
                    <div key={i} className='flex items-center justify-center'>
                      <div className='w-2 h-2 bg-red-500/60 rounded-full mr-3' />
                      <span className='text-sm text-gray-600'>{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className='border-t border-gray-200 pt-20'
        >
          <div className='text-center mb-16'>
            <h3 className='text-4xl md:text-5xl font-light mb-8 text-gray-900'>
              Our Process
            </h3>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
            <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              From initial concept to final delivery, our proven process ensures
              exceptional results.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className='text-center group'
              >
                <div className='w-16 h-16 bg-red-50 border-2 border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300'>
                  <span className='text-lg font-mono text-red-500 tracking-wider'>
                    {process.step}
                  </span>
                </div>
                <h4 className='text-xl font-light mb-3 text-gray-900'>
                  {process.title}
                </h4>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className='text-center mt-16'
        >
          <motion.button
            className='bg-red-500 hover:bg-red-600 text-white px-10 py-4 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
