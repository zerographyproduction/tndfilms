'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Camera, Edit, Video } from 'lucide-react';

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Updated with actual team data from PDF
  const teamMembers = [
    {
      name: 'Vipin Kumar Pal',
      role: 'Director of Photography',
      experience: '12+ Years',
      email: 'vipinkumarpal@tndfilms.com',
      icon: <Camera size={32} />,
      description:
        "Vipin Kumar Pal, our esteemed Director of Photography, brings over 12 years of unparalleled experience in the cinematic arts. With an extraordinary eye for detail and an innate understanding of light and composition, Vipin commands the visual storytelling process. His expertise spans from capturing the nuanced emotional depth of cinematic brand anthems to the precise visual articulation required for high-end commercial campaigns. Vipin's dedication ensures that every frame he curates is not just technically flawless, but deeply evocative, setting the perfect mood and tone that elevates a project from compelling to unforgettable. His relentless pursuit of visual perfection translates vision into breathtaking reality, making him an invaluable artisan within TND.",
      specialties: [
        'Cinematic Composition',
        'Lighting Design',
        'Brand Campaigns',
        'Commercial Photography',
      ],
    },
    {
      name: 'Nitin Kumar Pal',
      role: 'Creative Director',
      experience: '10+ Years',
      email: 'nitinkumarpal@tndfilms.com',
      icon: <Video size={32} />,
      description:
        "As our Creative Director, Nitin Kumar Pal brings a wealth of experience and groundbreaking innovation to every project at TND. With over a decade in the film and advertising industry, Nitin has honed his ability to sculpt compelling narratives and conceptualize visionary content that captivates and persuades. A true master of strategic storytelling, Nitin plays a pivotal role in shaping the artistic and conceptual direction of our productions. His expertise encompasses a wide array of sophisticated mediums, from intricate brand documentaries to impactful digital campaign series, ensuring each piece of content possesses unparalleled originality and strategic resonance. Nitin's creative leadership, coupled with his unwavering commitment to excellence, is a driving force behind TND's success in transforming abstract ideas into visually stunning and emotionally resonant experiences.",
      specialties: [
        'Strategic Storytelling',
        'Brand Documentaries',
        'Creative Conceptualization',
        'Digital Campaigns',
      ],
    },
    {
      name: 'Kuldeep Chauhan',
      role: 'Post-Production Head',
      experience: '10+ Years',
      email: 'kuldeepchauhan@tndfilms.com',
      icon: <Edit size={32} />,
      description:
        "Kuldeep Chauhan, our meticulous Post-Production Head and the foundational vision behind TND, brings a decade of expertise to the transformative art of editing. With 10 years of intensive experience in the industry, Kuldeep has a proven track record of sculpting raw footage into polished, high-impact narratives that not only resonate with audiences but command their attention. His meticulous attention to every nuance, advanced technical proficiency, and innovative creative approach ensure that every project achieves its absolute highest potential in the editing suite. Whether it's refining the visual flow of signature brand films or finessing the intricate details of luxury product showcases, Kuldeep's work adds the crucial final touch that elevates each piece to cinematic excellence. As the leader of our post-production artistry, Kuldeep combines his deep industry knowledge with cutting-edge techniques, making him an indispensable architect of TND's unparalleled quality.",
      specialties: [
        'Advanced Editing',
        'Color Grading',
        'Sound Design',
        'Visual Effects',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understand your vision and goals',
    },
    {
      step: '02',
      title: 'Pre-Production',
      description: 'Plan every detail, from scripts to locations',
    },
    {
      step: '03',
      title: 'Production',
      description: 'Capture high-quality footage with professional equipment',
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Edit and refine the footage to perfection',
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Hand over the final product, ready for your use',
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
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
            Meet the
            <span className='block text-gray-500'>Visionaries</span>
          </h2>
          <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
          <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
            At the heart of TND is a collective of seasoned professionals, each
            a master of their craft, dedicated to bringing your brand's most
            ambitious visions to life through unparalleled video production.
          </p>
        </motion.div>

        {/* Team Members - Enhanced Layout */}
        <div className='space-y-24 mb-32'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Profile Card */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className='bg-gray-50 border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-300'>
                  <div className='text-center mb-8'>
                    <div className='w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 border-2 border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                      <div className='text-red-600'>{member.icon}</div>
                    </div>
                    <h3 className='text-3xl font-light mb-2 text-gray-900'>
                      {member.name}
                    </h3>
                    <p className='text-red-500 mb-2 font-medium text-lg'>
                      {member.role}
                    </p>
                    <p className='text-sm font-mono text-gray-500 tracking-wider mb-4'>
                      {member.experience}
                    </p>

                    {/* Contact */}
                    <a
                      href={`mailto:${member.email}`}
                      className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors duration-300'
                    >
                      <Mail size={16} />
                      {member.email}
                    </a>
                  </div>

                  {/* Specialties */}
                  <div className='space-y-3'>
                    <h4 className='text-sm font-mono text-gray-500 tracking-wider uppercase text-center mb-6'>
                      Specialties
                    </h4>
                    <div className='grid grid-cols-2 gap-3'>
                      {member.specialties.map((specialty, i) => (
                        <div key={i} className='flex items-center'>
                          <div className='w-2 h-2 bg-red-500/60 rounded-full mr-3 flex-shrink-0' />
                          <span className='text-sm text-gray-600'>
                            {specialty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <h4 className='text-2xl font-light text-gray-900 mb-6'>
                  About {member.name.split(' ')[0]}
                </h4>
                <div className='prose prose-lg text-gray-700 leading-relaxed'>
                  <p>{member.description}</p>
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
              exceptional results every time.
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
