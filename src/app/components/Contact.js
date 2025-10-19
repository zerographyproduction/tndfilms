'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Users,
  User,
  Clock,
  MessageCircle,
  CheckCircle,
  Calendar,
} from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    contactPerson: '',
    message: '',
    preferredContact: 'email',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form or show success message
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  // Team contact information from PDF
  const teamContacts = [
    {
      name: 'General Inquiries',
      email: 'Info@tndfilms.com',
      phone: '+91-9625959360',
      role: 'Main Contact',
      icon: <Users size={20} />,
      description: 'For general inquiries and project discussions',
    },
    {
      name: 'Kuldeep Chauhan',
      email: 'Kuldeepchauhan@tndfilms.com',
      role: 'Post-Production Head',
      icon: <User size={20} />,
      description: 'Editing, color grading, and post-production services',
    },
    {
      name: 'Nitin Kumar Pal',
      email: 'Nitinkumarpal@tndfilms.com',
      role: 'Creative Director',
      icon: <User size={20} />,
      description: 'Creative direction and strategic storytelling',
    },
    {
      name: 'Vipin Kumar Pal',
      email: 'Vipinkumarpal@tndfilms.com',
      role: 'Director of Photography',
      icon: <User size={20} />,
      description: 'Cinematography and visual direction',
    },
  ];

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      description: 'Send us a detailed message',
      action: 'Info@tndfilms.com',
      preferred: true,
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      action: '+91-9625959360',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Social Media',
      description: 'Connect with us on social platforms',
      action: '@tndfilms',
    },
  ];

  return (
    <section id='contact' className='bg-white min-h-screen' ref={ref}>
      {/* Hero Section */}
      <section className='py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gray-900'>
              Let's Create
              <span className='block text-red-500'>
                Something Extraordinary
              </span>
            </h1>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8' />
            <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12'>
              Ready to bring your vision to life? We're here to collaborate and
              create compelling visual narratives that resonate with your
              audience and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            {contactMethods.map((method, index) => {
              const getHref = () => {
                if (method.title === 'Email') return `mailto:${method.action}`;
                if (method.title === 'Phone') return `tel:${method.action.replace(/\s/g, '')}`;
                if (method.title === 'Social Media') return 'https://instagram.com/tndfilmspvtltd';
                return '#';
              };

              return (
                <motion.a
                  key={method.title}
                  href={getHref()}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center p-6 border border-gray-200 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer block ${
                    method.preferred ? 'bg-red-50 border-red-200' : 'bg-white'
                  }`}
                >
                  <div
                    className={`w-16 h-16 border-2 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      method.preferred
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'bg-gray-50 border-gray-200 text-red-500'
                    }`}
                  >
                    {method.icon}
                  </div>
                  <h3 className='text-lg font-light mb-2 text-gray-900'>
                    {method.title}
                  </h3>
                  <p className='text-sm text-gray-600 mb-3'>
                    {method.description}
                  </p>
                  <p
                    className={`text-sm font-mono ${
                      method.preferred ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    {method.action}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className='py-24 lg:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-24'>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2 className='text-3xl md:text-4xl font-light mb-8 text-gray-900'>
                Get in Touch
              </h2>

              {/* Team Contacts */}
              <div className='space-y-6 mb-12'>
                <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-6 uppercase'>
                  Our Team
                </h3>
                {teamContacts.map((contact, index) => (
                  <motion.div
                    key={contact.email}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className='flex items-start space-x-4 p-6 bg-white border border-gray-200 hover:border-red-500/30 rounded-lg transition-all duration-300 hover:shadow-md'
                  >
                    <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center flex-shrink-0'>
                      <div className='text-red-500'>{contact.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-lg font-light text-gray-900 mb-1'>
                        {contact.name}
                      </h4>
                      <p className='text-sm text-red-500 font-medium mb-2'>
                        {contact.role}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className='text-sm text-gray-700 hover:text-red-500 transition-colors duration-300 block mb-1'
                      >
                        {contact.email}
                      </a>
                      <a
                        href={`tel:${contact.phone}`}
                        className='text-sm text-gray-700 hover:text-red-500 transition-colors duration-300 block mb-2'
                      >
                        {contact.phone}
                      </a>
                      <p className='text-xs text-gray-600'>
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className='space-y-6'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className='flex items-center space-x-4'
                >
                  <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center'>
                    <Phone size={20} className='text-red-500' />
                  </div>
                  <div>
                    <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-1 uppercase'>
                      PHONE
                    </h3>
                    <p className='text-lg text-gray-900'>+91 9013218028</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className='flex items-center space-x-4'
                >
                  <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center'>
                    <MapPin size={20} className='text-red-500' />
                  </div>
                  <div>
                    <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-1 uppercase'>
                      LOCATION
                    </h3>
                    <p className='text-lg text-gray-900'>India</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className='flex items-center space-x-4'
                >
                  <div className='w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center'>
                    <Clock size={20} className='text-red-500' />
                  </div>
                  <div>
                    <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-1 uppercase'>
                      RESPONSE TIME
                    </h3>
                    <p className='text-lg text-gray-900'>Within 24 hours</p>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className='pt-8'
                >
                  <h3 className='text-sm font-mono text-gray-500 tracking-wider mb-4 uppercase'>
                    Follow Us
                  </h3>
                  <div className='flex space-x-4'>
                    {[
                      {
                        label: 'Instagram',
                        href: 'https://instagram.com/tndfilmspvtltd',
                        icon: <Instagram size={20} />,
                      },
                      {
                        label: 'LinkedIn',
                        href: 'https://linkedin.com/company/tndfilms',
                        icon: <Linkedin size={20} />,
                      },
                      {
                        label: 'Facebook',
                        href: 'https://facebook.com/tndfilms',
                        icon: <Facebook size={20} />,
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 bg-white border border-gray-200 hover:border-red-500 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-300 shadow-sm hover:shadow-md'
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <div className='bg-white border border-gray-200 p-8 shadow-2xl'>
                <h3 className='text-2xl font-light mb-8 text-gray-900'>
                  Start Your Project
                </h3>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Basic Info */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Your Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        placeholder='Enter your full name'
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none transition-colors duration-300 rounded-none'
                        required
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        name='email'
                        placeholder='your.email@example.com'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none transition-colors duration-300 rounded-none'
                        required
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        placeholder='+91 XXXXX XXXXX'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none transition-colors duration-300 rounded-none'
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Company/Organization
                      </label>
                      <input
                        type='text'
                        name='company'
                        placeholder='Your company name'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none transition-colors duration-300 rounded-none'
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Project Type *
                      </label>
                      <select
                        name='projectType'
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg text-gray-700 focus:outline-none transition-colors duration-300 rounded-none'
                        required
                      >
                        <option value=''>Select project type</option>
                        <option value='documentary'>Documentary</option>
                        <option value='short-film'>Short Film</option>
                        <option value='music-video'>Music Video</option>
                        <option value='brand-video'>Brand Video</option>
                        <option value='corporate-video'>Corporate Video</option>
                        <option value='commercial'>Commercial</option>
                        <option value='event-coverage'>Event Coverage</option>
                        <option value='virtual-tour'>Virtual Tour</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Budget Range
                      </label>
                      <select
                        name='budget'
                        value={formData.budget}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg text-gray-700 focus:outline-none transition-colors duration-300 rounded-none'
                      >
                        <option value=''>Select budget range</option>
                        <option value='under-50k'>Under ₹50,000</option>
                        <option value='50k-1l'>₹50,000 - ₹1,00,000</option>
                        <option value='1l-2l'>₹1,00,000 - ₹2,00,000</option>
                        <option value='2l-5l'>₹2,00,000 - ₹5,00,000</option>
                        <option value='5l-plus'>₹5,00,000+</option>
                        <option value='discuss'>Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Timeline
                      </label>
                      <select
                        name='timeline'
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg text-gray-700 focus:outline-none transition-colors duration-300 rounded-none'
                      >
                        <option value=''>Select timeline</option>
                        <option value='urgent'>ASAP (Rush Job)</option>
                        <option value='1-2-weeks'>1-2 weeks</option>
                        <option value='3-4-weeks'>3-4 weeks</option>
                        <option value='1-2-months'>1-2 months</option>
                        <option value='3-months-plus'>3+ months</option>
                        <option value='flexible'>Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                        Who would you like to contact?
                      </label>
                      <select
                        name='contactPerson'
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg text-gray-700 focus:outline-none transition-colors duration-300 rounded-none'
                      >
                        <option value=''>Select team member</option>
                        <option value='general'>General Inquiry</option>
                        <option value='kuldeep'>
                          Kuldeep - Post-Production
                        </option>
                        <option value='nitin'>
                          Nitin - Creative Direction
                        </option>
                        <option value='vipin'>Vipin - Cinematography</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-mono text-gray-500 tracking-wider mb-2 uppercase'>
                      Project Details *
                    </label>
                    <textarea
                      rows={5}
                      name='message'
                      placeholder='Tell us about your project, vision, target audience, and any specific requirements'
                      value={formData.message}
                      onChange={handleInputChange}
                      className='w-full bg-white border border-gray-200 focus:border-red-500 px-4 py-3 text-lg placeholder-gray-400 focus:outline-none resize-none transition-colors duration-300 rounded-none'
                      required
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className='block text-sm font-mono text-gray-500 tracking-wider mb-3 uppercase'>
                      Preferred Contact Method
                    </label>
                    <div className='flex gap-4'>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          name='preferredContact'
                          value='email'
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className='mr-2'
                        />
                        <span className='text-sm text-gray-700'>Email</span>
                      </label>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          name='preferredContact'
                          value='phone'
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className='mr-2'
                        />
                        <span className='text-sm text-gray-700'>Phone</span>
                      </label>
                    </div>
                  </div>

                  <motion.button
                    type='submit'
                    disabled={isSubmitting}
                    className='group flex items-center justify-between w-full px-8 py-4 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white border-2 border-red-500 hover:border-red-600 disabled:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed'
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className='text-sm font-medium tracking-wide uppercase'>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    {isSubmitting ? (
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    ) : (
                      <ArrowRight
                        className='group-hover:translate-x-1 transition-transform duration-300'
                        size={20}
                      />
                    )}
                  </motion.button>
                </form>

                <p className='text-sm text-gray-500 leading-relaxed mt-6'>
                  We'll get back to you within 24 hours to discuss your project
                  and provide a detailed quote. All consultations are free.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Additional Info Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className='grid md:grid-cols-3 gap-8'
          >
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-light text-red-500'>24</span>
              </div>
              <h4 className='text-lg font-light mb-2 text-gray-900'>
                Hour Response
              </h4>
              <p className='text-gray-600 text-sm'>
                Quick turnaround on all inquiries and project updates
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-light text-red-500'>∞</span>
              </div>
              <h4 className='text-lg font-light mb-2 text-gray-900'>
                Free Consultation
              </h4>
              <p className='text-gray-600 text-sm'>
                No-obligation project discussion and strategic planning
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CheckCircle size={24} className='text-red-500' />
              </div>
              <h4 className='text-lg font-light mb-2 text-gray-900'>
                Custom Solutions
              </h4>
              <p className='text-gray-600 text-sm'>
                Tailored video production services for your unique needs
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
