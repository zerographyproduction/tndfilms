// components/TeamDetailed.js
'use client';
import { motion } from 'framer-motion';

export default function TeamDetailed() {
  const teamMembers = [
    {
      name: 'Vipin Kumar Pal',
      role: 'Director of Photography',
      experience: '12+ years',
      fullDescription: `Vipin Kumar Pal, our esteemed Director of Photography, brings over 12 years of unparalleled experience in the cinematic arts. With an extraordinary eye for detail and an innate understanding of light and composition, Vipin commands the visual storytelling process. His expertise spans from capturing the nuanced emotional depth of cinematic brand anthems to the precise visual articulation required for high-end commercial campaigns. Vipin's dedication ensures that every frame he curates is not just technically flawless, but deeply evocative, setting the perfect mood and tone that elevates a project from compelling to unforgettable. His relentless pursuit of visual perfection translates vision into breathtaking reality, making him an invaluable artisan within TND.`,
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
      experience: '10+ years',
      fullDescription: `As our Creative Director, Nitin Kumar Pal brings a wealth of experience and groundbreaking innovation to every project at TND. With over a decade in the film and advertising industry, Nitin has honed his ability to sculpt compelling narratives and conceptualize visionary content that captivates and persuades. A true master of strategic storytelling, Nitin plays a pivotal role in shaping the artistic and conceptual direction of our productions. His expertise encompasses a wide array of sophisticated mediums, from intricate brand documentaries to impactful digital campaign series, ensuring each piece of content possesses unparalleled originality and strategic resonance. Nitin's creative leadership, coupled with his unwavering commitment to excellence, is a driving force behind TND's success in transforming abstract ideas into visually stunning and emotionally resonant experiences.`,
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
      experience: '10+ years',
      fullDescription: `Kuldeep Chauhan, our meticulous Post-Production Head and the foundational vision behind TND, brings a decade of expertise to the transformative art of editing. With 10 years of intensive experience in the industry, Kuldeep has a proven track record of sculpting raw footage into polished, high-impact narratives that not only resonate with audiences but command their attention. His meticulous attention to every nuance, advanced technical proficiency, and innovative creative approach ensure that every project achieves its absolute highest potential in the editing suite. Whether it's refining the visual flow of signature brand films or finessing the intricate details of luxury product showcases, Kuldeep's work adds the crucial final touch that elevates each piece to cinematic excellence. As the leader of our post-production artistry, Kuldeep combines his deep industry knowledge with cutting-edge techniques, making him an indispensable architect of TND's unparalleled quality.`,
      specialties: [
        'Advanced Editing',
        'Color Grading',
        'Sound Design',
        'Visual Effects',
      ],
    },
  ];

  return (
    <section className='py-20 bg-midnight-blue min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-6xl font-bold text-soft-white mb-6'>
            Our Team
          </h1>
          <p className='text-xl text-silver max-w-4xl mx-auto leading-relaxed'>
            Meet the passionate professionals who bring years of expertise,
            creative vision, and technical mastery to every project at TND
            Films.
          </p>
        </motion.div>

        <div className='space-y-16'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className='bg-slate-gray/20 p-8 rounded-lg'>
                  <div className='flex items-center mb-6'>
                    <div className='w-16 h-16 bg-silver/20 rounded-full flex items-center justify-center mr-4'>
                      <span className='text-xl font-bold text-soft-white'>
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <h2 className='text-3xl font-bold text-soft-white'>
                        {member.name}
                      </h2>
                      <p className='text-silver font-semibold'>{member.role}</p>
                      <p className='text-silver/80 text-sm'>
                        {member.experience}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className='bg-slate-gray/40 text-silver px-3 py-1 rounded-full text-sm'
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <h3 className='text-2xl font-bold text-soft-white mb-6'>
                  About {member.name.split(' ')[0]}
                </h3>
                <p className='text-silver leading-relaxed text-lg'>
                  {member.fullDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-20 pt-16 border-t border-slate-gray/30'
        >
          <h2 className='text-4xl font-bold text-soft-white mb-12 text-center'>
            Our Process
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
            {[
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
                description:
                  'Capture high-quality footage with professional equipment',
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
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-slate-gray/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-xl font-bold text-soft-white'>
                    {process.step}
                  </span>
                </div>
                <h4 className='text-lg font-semibold text-soft-white mb-2'>
                  {process.title}
                </h4>
                <p className='text-silver text-sm'>{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
