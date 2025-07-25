'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Film,
  Video,
  Music,
  Building,
  Users,
  Tv,
  Camera,
  Edit,
} from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Enhanced services based on PDF content
  const services = [
    {
      icon: <Film size={32} />,
      title: 'Documentaries',
      description:
        'We specialize in creating in-depth, narrative-driven documentaries that explore real-world issues, stories, and events. Our documentaries are meticulously researched and produced to provide insightful and impactful content that resonates with audiences.',
      features: [
        'In-depth Research',
        'Real-world Stories',
        'Impactful Content',
      ],
      examples: [
        'Pipe Organ Heritage',
        'Gender-Based Violence Awareness',
        'Cultural Documentaries',
      ],
    },
    {
      icon: <Video size={32} />,
      title: 'Short Films',
      description:
        'Perfect for festivals, online platforms, or personal projects, our short films are crafted with the same care and attention to detail as feature-length productions. We help bring your creative visions to life in a concise and powerful format.',
      features: ['Festival Ready', 'Creative Vision', 'Powerful Storytelling'],
      examples: [
        'Artistic Narratives',
        'Social Messages',
        'Creative Experiments',
      ],
    },
    {
      icon: <Music size={32} />,
      title: 'Music Videos',
      description:
        'Enhance your music with visually stunning videos that complement the sound and message of your tracks. Our team works closely with artists to create videos that resonate with their audience and leave a lasting impression.',
      features: [
        'Visual Storytelling',
        'Artist Collaboration',
        'Memorable Content',
      ],
      examples: ['Artist Promotions', 'Album Releases', 'Concert Visuals'],
    },
    {
      icon: <Building size={32} />,
      title: 'Brand Videos',
      description:
        'Strengthen your brand identity with professional videos that communicate your message effectively. From promotional videos to corporate overviews, we create content that aligns with your brand values and objectives.',
      features: ['Brand Alignment', 'Professional Quality', 'Message Clarity'],
      examples: ['IRMA Campus Stories', 'Brand Anthems', 'Product Showcases'],
    },
    {
      icon: <Users size={32} />,
      title: 'Corporate Videos',
      description:
        "Whether it's for training, internal communications, or stakeholder engagement, our corporate videos are designed to inform, educate, and inspire. We tailor each video to suit the specific needs of your organization.",
      features: [
        'Training Content',
        'Internal Comms',
        'Stakeholder Engagement',
      ],
      examples: [
        'IMI Campus Tours',
        'Convocation Coverage',
        'Institution Showcases',
      ],
    },
    {
      icon: <Tv size={32} />,
      title: 'Commercials',
      description:
        'Make your products or services stand out with compelling commercial videos. Our commercials are designed to grab attention, convey your message quickly, and drive action from your target audience.',
      features: ['Attention Grabbing', 'Quick Messaging', 'Action Driving'],
      examples: ['Product Launches', 'Service Promotions', 'Brand Campaigns'],
    },
  ];

  // Additional capabilities
  const capabilities = [
    {
      icon: <Camera size={24} />,
      title: '4K Production',
      description:
        'Ultra-high definition video production with cutting-edge equipment',
    },
    {
      icon: <Edit size={24} />,
      title: 'Post-Production',
      description: 'Complete editing, color grading, and sound design services',
    },
    {
      icon: <Users size={24} />,
      title: 'Live Events',
      description:
        'Professional coverage of convocations, conferences, and ceremonies',
    },
    {
      icon: <Video size={24} />,
      title: 'Virtual Tours',
      description: 'Immersive virtual experiences and interactive content',
    },
  ];

  return (
    <section id='services' className='py-16 lg:py-24 bg-gray-50' ref={ref}>
      <div className='max-w-6xl mx-auto px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='text-center mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-normal leading-tight mb-4 text-gray-900 tracking-wide'>
            Our Services
          </h2>
          <div className='w-16 h-0.5 bg-red-500 mx-auto mb-6' />
          <p className='text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            From concept to completion, we offer comprehensive video production services 
            tailored to meet your unique creative and business objectives.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='group cursor-pointer'
            >
              <div className='bg-white border-0 hover:shadow-lg p-6 h-full transition-all duration-300 relative overflow-hidden'>

                <div className='relative'>
                  <motion.div
                    className='text-gray-600 mb-4 group-hover:text-gray-900 transition-transform duration-300'
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className='text-lg font-medium mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300'>
                    {service.title}
                  </h3>

                  <p className='text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4'>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-mono text-gray-500 tracking-wider mb-3 uppercase'>
                      Key Features
                    </h4>
                    <ul className='space-y-2'>
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className='flex items-center text-sm text-gray-600'
                        >
                          <div className='w-2 h-2 bg-red-500/60 rounded-full mr-3 flex-shrink-0' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-mono text-gray-500 tracking-wider mb-3 uppercase'>
                      Examples
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {service.examples.map((example, i) => (
                        <span
                          key={i}
                          className='text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border'
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

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

        {/* Additional Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='border-t border-gray-200 pt-20'
        >
          <div className='text-center mb-16'>
            <h3 className='text-3xl md:text-4xl font-light mb-8 text-gray-900'>
              Additional
              <span className='block text-gray-500'>Capabilities</span>
            </h3>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              Beyond our core services, we offer specialized production
              capabilities to meet diverse client needs.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className='text-center group'
              >
                <div className='w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300'>
                  <div className='text-red-500'>{capability.icon}</div>
                </div>
                <h4 className='text-lg font-light mb-3 text-gray-900'>
                  {capability.title}
                </h4>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='text-center mt-16'
        >
          <div className='bg-gray-50 border border-gray-200 p-12 max-w-4xl mx-auto'>
            <h4 className='text-2xl font-light mb-4 text-gray-900'>
              Ready to Start Your Project?
            </h4>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Whether you need a corporate video, documentary, or commercial
              production, we're here to bring your vision to life with
              exceptional quality and creativity.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/#contact'>
                <motion.button
                  className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link href='/portfolio'>
                <motion.button
                  className='border-2 border-gray-800 hover:border-red-500 text-gray-800 hover:text-red-500 hover:bg-red-500/10 px-8 py-3 font-light tracking-wide transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
