'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id='about' className='py-32 lg:py-40 bg-gray-50' ref={ref}>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
              Crafting
              <span className='block text-gray-500'>Visual Stories</span>
            </h2>

            <div className='w-24 h-1 bg-red-500 mb-8' />

            <p className='text-xl text-gray-700 leading-relaxed mb-8'>
              At TND Films, we believe every frame tells a story. Our team of
              seasoned professionals brings over a decade of combined experience
              in video production, from intimate documentaries to large-scale
              commercial campaigns.
            </p>

            <p className='text-lg text-gray-600 leading-relaxed mb-12'>
              We specialize in creating content that doesn't just capture
              attention—it creates lasting emotional connections between brands
              and their audiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className='text-2xl font-light mb-6 text-gray-900'>
                Our Mission
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                To tell stories that matter, create content that resonates, and
                help our clients achieve their communication goals through the
                power of video.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className='relative'
          >
            <div className='bg-white border border-gray-200 p-12 shadow-2xl relative'>
              <div className='absolute top-0 left-0 w-16 h-16 bg-red-500/10 rounded-br-full'></div>
              <div className='absolute bottom-0 right-0 w-16 h-16 bg-gray-900/5 rounded-tl-full'></div>

              <div className='relative'>
                <h3 className='text-3xl font-light mb-8 text-gray-900'>
                  Our Approach
                </h3>
                <div className='space-y-8'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='border-l-4 border-red-500 pl-6'
                  >
                    <h4 className='text-xl font-light mb-3 text-red-500'>
                      01. Conceptualization
                    </h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Strategic planning and creative development tailored to
                      your vision and goals.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='border-l-4 border-gray-300 pl-6'
                  >
                    <h4 className='text-xl font-light mb-3 text-gray-900'>
                      02. Production
                    </h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Professional filming with cutting-edge equipment and
                      experienced crew.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className='border-l-4 border-gray-300 pl-6'
                  >
                    <h4 className='text-xl font-light mb-3 text-gray-900'>
                      03. Post-Production
                    </h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Meticulous editing, color grading, and sound design for
                      cinematic excellence.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
