'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail,
  Camera,
  Edit,
  Video,
  Award,
  Users,
  Target,
  Heart,
} from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Team data from PDF
  const teamMembers = [
    {
      name: 'Vipin Kumar Pal',
      role: 'Director of Photography',
      experience: '12+ Years',
      email: 'vipinkumarpal@tndfilms.com',
      photo: '/vipin.png',
      icon: <Camera size={32} />,
      description:
        "Vipin Kumar Pal, our esteemed Director of Photography, brings over 12 years of unparalleled experience in the cinematic arts. With an extraordinary eye for detail and an innate understanding of light and composition, Vipin commands the visual storytelling process. His expertise spans from capturing the nuanced emotional depth of cinematic brand anthems to the precise visual articulation required for high-end commercial campaigns. Vipin's dedication ensures that every frame he curates is not just technically flawless, but deeply evocative, setting the perfect mood and tone that elevates a project from compelling to unforgettable. His relentless pursuit of visual perfection translates vision into breathtaking reality, making him an invaluable artisan within TND.",
      specialties: [
        'Cinematic Composition',
        'Lighting Design',
        'Brand Campaigns',
        'Commercial Photography',
      ],
      achievements: [
        '12+ Years Experience',
        '100+ Projects',
        'Award-Winning Cinematography',
      ],
    },
    {
      name: 'Nitin Kumar Pal',
      role: 'Creative Director',
      experience: '10+ Years',
      email: 'nitinkumarpal@tndfilms.com',
      photo: '/nitin-pal.png',
      icon: <Video size={32} />,
      description:
        "As our Creative Director, Nitin Kumar Pal brings a wealth of experience and groundbreaking innovation to every project at T n D Films Pvt. Ltd. With over a decade in the film and advertising industry, Nitin has honed his ability to sculpt compelling narratives and conceptualize visionary content that captivates and persuades. A true master of strategic storytelling, Nitin plays a pivotal role in shaping the artistic and conceptual direction of our productions. His expertise encompasses a wide array of sophisticated mediums, from intricate brand documentaries to impactful digital campaign series, ensuring each piece of content possesses unparalleled originality and strategic resonance. Nitin's creative leadership, coupled with his unwavering commitment to excellence, is a driving force behind T n D Films Pvt. Ltd.'s success in transforming abstract ideas into visually stunning and emotionally resonant experiences.",
      specialties: [
        'Strategic Storytelling',
        'Brand Documentaries',
        'Creative Conceptualization',
        'Digital Campaigns',
      ],
      achievements: [
        '10+ Years Experience',
        'Creative Innovation',
        'Strategic Vision',
      ],
    },
    {
      name: 'Kuldeep Chauhan',
      role: 'Post-Production Head',
      experience: '10+ Years',
      email: 'kuldeepchauhan@tndfilms.com',
      photo: '/kuldeep.png',
      icon: <Edit size={32} />,
      description:
        "Kuldeep Chauhan, our meticulous Post-Production Head and the foundational vision behind T n D Films Pvt. Ltd., brings a decade of expertise to the transformative art of editing. With 10 years of intensive experience in the industry, Kuldeep has a proven track record of sculpting raw footage into polished, high-impact narratives that not only resonate with audiences but command their attention. His meticulous attention to every nuance, advanced technical proficiency, and innovative creative approach ensure that every project achieves its absolute highest potential in the editing suite. Whether it's refining the visual flow of signature brand films or finessing the intricate details of luxury product showcases, Kuldeep's work adds the crucial final touch that elevates each piece to cinematic excellence. As the leader of our post-production artistry, Kuldeep combines his deep industry knowledge with cutting-edge techniques, making him an indispensable architect of T n D Films Pvt. Ltd.'s unparalleled quality.",
      specialties: [
        'Advanced Editing',
        'Color Grading',
        'Sound Design',
        'Visual Effects',
      ],
      achievements: [
        '10+ Years Experience',
        'Founder & Visionary',
        'Technical Excellence',
      ],
    },
  ];

  const companyValues = [
    {
      icon: <Target size={24} />,
      title: 'Our Mission',
      description:
        'To tell stories that matter, create content that resonates, and help our clients achieve their communication goals through the power of video.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Our Passion',
      description:
        'We believe every frame tells a story. Our passion lies in transforming visions into compelling visual narratives that captivate and inspire.',
    },
    {
      icon: <Award size={24} />,
      title: 'Our Promise',
      description:
        'Uncompromising quality, creative excellence, and strategic impact in every project we undertake, from concept to final delivery.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understand your vision and goals',
      details:
        'Deep dive into your objectives, target audience, and creative requirements',
    },
    {
      step: '02',
      title: 'Pre-Production',
      description: 'Plan every detail, from scripts to locations',
      details:
        'Comprehensive planning including storyboarding, location scouting, and crew coordination',
    },
    {
      step: '03',
      title: 'Production',
      description: 'Capture high-quality footage with professional equipment',
      details:
        'On-location filming with state-of-the-art cameras and professional lighting',
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Edit and refine the footage to perfection',
      details:
        'Advanced editing, color grading, sound design, and visual effects',
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Hand over the final product, ready for your use',
      details: 'Multiple format delivery with ongoing support and revisions',
    },
  ];

  return (
    <div className='bg-white' ref={ref}>
      {/* Hero Section */}
      <section className='py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
              Meet the
              <span className='block text-red-500'>Visionaries</span>
            </h1>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
            <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12'>
              At the heart of T n D Films Pvt. Ltd. is a collective of seasoned professionals,
              each a master of their craft, dedicated to bringing your brand's
              most ambitious visions to life through unparalleled video
              production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <h2 className='text-4xl md:text-5xl font-light mb-6 text-gray-900'>
                Who We Are
              </h2>
              <div className='w-24 h-1 bg-red-500 mb-6' />
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                T n D Films Pvt. Ltd. is a premier video production company dedicated to
                bringing your stories to life through the power of visual
                storytelling. With a passion for creativity and a commitment to
                excellence, we specialize in producing high-quality videos
                across a diverse range of genres and formats.
              </p>
              <p className='text-gray-600 leading-relaxed mb-8'>
                From conceptualization to post-production, we handle every
                aspect of video production, delivering content that captivates
                and engages your audience. At T n D Films Pvt. Ltd., we believe that every
                story deserves to be told, and we are here to help you tell
                yours in the most compelling way possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className='grid grid-cols-2 gap-8'
            >
              <div className='text-center p-6 bg-gray-50 border border-gray-200'>
                <div className='text-3xl font-light text-red-500 mb-2'>32+</div>
                <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                  Years Combined Experience
                </div>
              </div>
              <div className='text-center p-6 bg-gray-50 border border-gray-200'>
                <div className='text-3xl font-light text-red-500 mb-2'>50+</div>
                <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                  Projects Completed
                </div>
              </div>
              <div className='text-center p-6 bg-gray-50 border border-gray-200'>
                <div className='text-3xl font-light text-red-500 mb-2'>25+</div>
                <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                  Happy Clients
                </div>
              </div>
              <div className='text-center p-6 bg-gray-50 border border-gray-200'>
                <div className='text-3xl font-light text-red-500 mb-2'>6</div>
                <div className='text-sm text-gray-600 font-mono tracking-wider uppercase'>
                  Service Categories
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Values */}
          <div className='grid md:grid-cols-3 gap-8 mb-20'>
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className='text-center p-8 bg-gray-50 border border-gray-200 hover:border-red-500/30 transition-all duration-300'
              >
                <div className='w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <div className='text-red-500'>{value.icon}</div>
                </div>
                <h3 className='text-xl font-light mb-4 text-gray-900'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-24 lg:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className='text-center mb-20'
          >
            <h2 className='text-4xl md:text-5xl font-light mb-6 text-gray-900'>
              Our Expert Team
            </h2>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-6' />
            <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              Each team member brings unique expertise and passion to create
              exceptional video content.
            </p>
          </motion.div>

          {/* Team Members - Enhanced Layout */}
          <div className='space-y-24'>
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
                  <div className='bg-white border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-300'>
                    <div className='text-center mb-8'>
                      <div className='w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-red-500/30 shadow-lg'>
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className='w-full h-full object-cover'
                        />
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

                    {/* Achievements */}
                    <div className='mb-6'>
                      <h4 className='text-sm font-mono text-gray-500 tracking-wider uppercase text-center mb-4'>
                        Key Achievements
                      </h4>
                      <div className='grid grid-cols-1 gap-2'>
                        {member.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className='flex items-center justify-center'
                          >
                            <div className='w-2 h-2 bg-red-500/60 rounded-full mr-3 flex-shrink-0' />
                            <span className='text-sm text-gray-600'>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className='space-y-3'>
                      <h4 className='text-sm font-mono text-gray-500 tracking-wider uppercase text-center mb-4'>
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
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-light mb-6 text-gray-900'>
              Our Process
            </h2>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-6' />
            <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              From initial concept to final delivery, our proven process ensures
              exceptional results every time.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='text-center group'
              >
                <div className='w-16 h-16 bg-red-500/10 border-2 border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300'>
                  <span className='text-lg font-mono text-red-500 tracking-wider'>
                    {process.step}
                  </span>
                </div>
                <h4 className='text-xl font-light mb-3 text-gray-900'>
                  {process.title}
                </h4>
                <p className='text-sm text-gray-600 leading-relaxed mb-2'>
                  {process.description}
                </p>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  {process.details}
                </p>
              </motion.div>
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
              Ready to Work with Us?
            </h3>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Let's collaborate to create compelling visual narratives that
              resonate with your audience and achieve your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href='/#contact'
                className='bg-red-500 hover:bg-red-500/80 text-white px-8 py-3 font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href='/portfolio'
                className='border-2 border-gray-800 hover:border-red-500 text-gray-800 hover:text-red-500 hover:bg-red-500/10 px-8 py-3 font-light tracking-wide transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
