'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';

export default function DevelopmentServices() {
  const services = [
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Professional Websites',
      description:
        'Get more customers with a fast, modern website that works perfectly on all devices',
      features: [
        'Attract more visitors from Google',
        'Convert visitors into customers',
        'Mobile-friendly design',
        'Fast loading speeds',
      ],
    },
    {
      icon: <Smartphone className='w-8 h-8' />,
      title: 'Mobile Apps',
      description: 'Reach customers on their phones with a professional mobile app',
      features: [
        'Available on iPhone & Android',
        'Increase customer engagement',
        'Push notifications to customers',
        'Professional app store presence',
      ],
    },
    {
      icon: <Code className='w-8 h-8' />,
      title: 'Business Automation',
      description: 'Save time and reduce costs with custom software that automates your workflows',
      features: [
        'Automate repetitive tasks',
        'Connect your existing tools',
        'Reduce manual errors',
        'Scale your business efficiently',
      ],
    },
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'Website Speed Boost',
      description: 'Fix slow websites that lose customers and hurt your Google rankings',
      features: [
        'Faster page loading times',
        'Better Google search rankings',
        'Reduce customer bounce rate',
        'Improve user experience',
      ],
    },
  ];

  const achievements = [
    'Reduced dashboard load times by 73%',
    'Improved team velocity by 40%',
    'Dropped bundle size by 60%',
    'Dashboard loading: 8s → 0.3s',
  ];

  const technologies = [
    'JavaScript/TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Three.js',
    'UI/UX Design',
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-neutral-900'>
      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4'>
        <div className='max-w-6xl mx-auto text-center'>
          <motion.h1
            className='text-5xl md:text-7xl font-bold mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Website & App
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Development
            </span>
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional development services that help businesses ship 40%
            faster by eliminating performance bottlenecks
          </motion.p>

          <motion.div
            className='flex flex-col md:flex-row gap-6 justify-center items-center'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href='tel:7023380207'
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2'
            >
              <Phone className='w-5 h-5' />
              Call Now
            </a>
            <a
              href='https://www.mahindersingh.com/client'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 text-neutral-700 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2'
            >
              <ExternalLink className='w-5 h-5' />
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Developer Profile */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='bg-midnight-blue/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-gray/30'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                  Meet Your Developer
                  <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    Mahinder Singh
                  </span>
                </h2>
                <p className='text-silver text-lg mb-6'>
                  Full-stack developer specializing in building fast, modern
                  websites and mobile apps that help businesses grow. Expert in
                  creating high-performance digital solutions that convert
                  visitors into customers.
                </p>

                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {achievements.map((achievement, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-blue-600 flex-shrink-0' />
                      <span className='text-sm text-silver'>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <a
                    href='tel:7023380207'
                    className='flex items-center gap-2 text-neutral-600 hover:text-blue-600 transition-colors'
                  >
                    <Phone className='w-5 h-5' />
                    70233 80207
                  </a>
                  <a
                    href='mailto:iammahendrachopra@gmail.com'
                    className='flex items-center gap-2 text-neutral-600 hover:text-blue-600 transition-colors'
                  >
                    <Mail className='w-5 h-5' />
                    iammahendrachopra@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-semibold mb-6'>
                  Technologies & Skills
                </h3>
                <div className='grid grid-cols-2 gap-3'>
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className='bg-neutral-100 rounded-lg p-3 text-center text-sm'
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Development Services
            </h2>
            <p className='text-neutral-600 text-lg max-w-2xl mx-auto'>
              Comprehensive web and mobile development solutions tailored to
              your business needs
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 hover:border-blue-400/80 transition-all duration-300 group shadow-lg hover:shadow-xl'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className='text-blue-600 mb-4 group-hover:scale-110 transition-transform'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{service.title}</h3>
                <p className='text-neutral-600 mb-6'>{service.description}</p>

                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center gap-2 text-sm'
                    >
                      <CheckCircle className='w-4 h-4 text-blue-600 flex-shrink-0' />
                      <span className='text-neutral-600'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Development Process
            </h2>
            <p className='text-neutral-600 text-lg max-w-2xl mx-auto'>
              A streamlined approach that ensures quality delivery and client
              satisfaction
            </p>
          </motion.div>

          <div className='grid md:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements and goals',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating wireframes and user experience',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building with modern technologies',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Testing, optimization, and launch',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className='text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'>
                  {phase.step}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{phase.title}</h3>
                <p className='text-neutral-600 text-sm'>{phase.description}</p>
                {index < 3 && (
                  <ArrowRight className='w-6 h-6 text-neutral-400 mx-auto mt-4 hidden md:block' />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
              Ready to Build Your Project?
            </h2>
            <p className='text-xl mb-8 text-white opacity-90'>
              Let's discuss how we can bring your vision to life with modern web
              and mobile solutions
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:7023380207'
                className='bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center shadow-lg'
              >
                <Phone className='w-5 h-5' />
                Call Now
              </a>
              <a
                href='https://www.mahindersingh.com/client'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center'
              >
                <ExternalLink className='w-5 h-5' />
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Roast Tool Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 text-center border border-orange-200'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-neutral-900'>
              Already Have a Website?
            </h2>
            <p className='text-xl mb-8 text-neutral-700'>
              Get a FREE website roast and discover what's holding your site back from getting more customers
            </p>
            
            <div className='bg-white/80 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto'>
              <h3 className='font-semibold mb-3 text-neutral-900'>Your free roast will reveal:</h3>
              <ul className='space-y-2 text-neutral-700'>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  Speed issues that lose customers
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  Design problems hurting conversions
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  SEO mistakes costing you rankings
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-orange-500 flex-shrink-0' />
                  Mobile experience failures
                </li>
              </ul>
            </div>

            <a
              href='https://www.mahindersingh.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2'
            >
              <ExternalLink className='w-5 h-5' />
              Get Your Free Website Roast
            </a>
          </motion.div>
        </div>
      </section>

      {/* Back to Homepage Section */}
      <section className='py-16 px-4 border-t border-neutral-200'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold mb-4'>
              Explore TND Films Services
            </h3>
            <p className='text-neutral-600 mb-8'>
              Discover our video production services including documentaries, commercials, and brand videos
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/'
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center'
              >
                <ArrowRight className='w-5 h-5 rotate-180' />
                Back to Homepage
              </a>
              <a
                href='/portfolio'
                className='border border-neutral-300 hover:bg-neutral-100 text-neutral-700 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center'
              >
                View Our Work
                <ArrowRight className='w-5 h-5' />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
