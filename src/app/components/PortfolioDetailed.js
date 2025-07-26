'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Play,
  ExternalLink,
  Instagram,
  Filter,
  Grid,
  List,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EnhancedPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const router = useRouter();

  // Video portfolio data
  const VIDEO_ITEMS = [
    {
      title: 'Attuned With AT | Ft. Rajiv Makhni | Coming Soon',
      videoId: 'wTjB4bLzHKo', // Replace with actual video ID when available
      category: 'podcast',
      description:
        "Podcast Film - End-to-End production of tech talk show featuring India's leading tech voice, Rajiv Makhni",
      year: '2024',
      client: 'itel india',
      featured: true,
    },
    {
      title: 'Wilderness Quest – Adventure Short',
      videoId: '1ZVsxIGs1Kg',
      category: 'adventure',
      description:
        'Adventure Film - Thrilling visual journey into raw nature and extreme adventure with Jumpin Heights',
      year: '2024',
      client: 'Jumpin Heights',
      featured: true,
    },
    // {
    //   title: 'Super Guru 4G – Entertainment Ki Duniya Ka Baap',
    //   videoId: 'lyBQYLtnKdM',
    //   category: 'brand',
    //   description:
    //     "Brand Campaign Film - Visual story celebrating entertainment power of itel's Super Guru 4G feature phone",
    //   year: '2024',
    //   client: 'itel India',
    //   featured: true,
    // },
    {
      title: "Unleash the power of technology with itel's Pad One",
      videoId: 'PmX_y3ApaDs', // Replace with actual video ID
      category: 'product',
      description:
        'Product Film - Sleek & informative product video showcasing itel Pad One, shot entirely in studio',
      year: '2024',
      client: 'itel India',
      featured: false,
    },
    {
      title:
        '7 Year Win Streak with @UnGraduateGamer | 7th Anniversary | Full Video',
      videoId: 'xVWPOQwVlNE', // Replace with actual video ID
      category: 'documentary',
      description:
        "Documentary AdFilm - Celebration of 7-year gaming milestone with India's gaming community",
      year: '2024',
      client: '@UnGraduateGamer',
      featured: false,
    },
    {
      title: 'VRINDAVAN- CINEMATIC FILM | Banke Bihari Temple | 2021 | 4K',
      videoId: '9hIyf0FyYZ0', // Replace with actual video ID
      category: 'documentary',
      description:
        "Documentary Film - Cinematic exploration of Banke Bihari Temple's divine atmosphere in Vrindavan",
      year: '2021',
      client: 'The Vagabond Films',
      featured: true,
    },
    {
      title: 'Skiing in Munsiyari',
      videoId: '9xFB1qmpF3k',
      category: 'adventure',
      description:
        'Documentary Adventure Film - Breathtaking skiing through snow-clad slopes of Munsiyari, Uttarakhand',
      year: '2024',
      client: 'TRAVNAT FILMS',
      featured: false,
    },
    {
      title:
        "Mountain Dew Real Heroes presents The Fall - India's First Frozen Waterfall Ascent",
      videoId: 'T_bIUw7GdTU', // Replace with actual video ID when available
      category: 'documentary',
      description:
        "Documentary Adventure Film - India's first adventure documentary shot at a frozen waterfall in extreme Himalayan conditions",
      year: '2024',
      client: 'Mountain Dew India',
      featured: true,
    },
    {
      title: '25 Years of Partnership | Gates Foundation',
      videoId: 'T_bIUw7GdTU',
      category: 'brands',
      description: 'Strategic partnership celebration film',
      year: '2024',
      client: 'Gates Foundation',
      featured: true,
    },
    {
      title: 'BMW Films',
      videoId: 'wTjB4bLzHKo',
      category: 'brands',
      description: 'Premium motorcycle brand campaign',
      year: '2024',
      client: 'BMW',
      featured: true,
    },
    {
      title: 'Premium Automotive',
      videoId: '1ZVsxIGs1Kg',
      category: 'brands',
      description: 'Luxury car brand showcase',
      year: '2024',
      client: 'Automotive Brand',
    },
    {
      title: 'Corporate Identity',
      videoId: 'lyBQYLtnKdM',
      category: 'brands',
      description: 'Corporate brand storytelling',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'MamaEarth Campaign',
      videoId: 'eHpSFNNhn2s',
      category: 'brands',
      description: 'Natural skincare brand film',
      year: '2024',
      client: 'MamaEarth',
      featured: true,
    },
    {
      title: 'IDBI Federal Marathon',
      videoId: 'Ll846ArEzAQ',
      category: 'events',
      description: 'Major sports event coverage',
      year: '2024',
      client: 'IDBI Federal',
    },
    {
      title: 'Corporate Event',
      videoId: 'R_-MOeWMfvU',
      category: 'events',
      description: 'Professional event documentation',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'Product Launch',
      videoId: 'PmX_y3ApaDs',
      category: 'brands',
      description: 'New product unveiling event',
      year: '2024',
      client: 'Product Brand',
    },
    // {
    //   title: 'Music Production',
    //   videoId: 'xVWPOQwVlNE',
    //   category: 'music',
    //   description: 'Hip-hop music video',
    //   year: '2024',
    //   client: 'Music Artist',
    // },
    {
      title: 'Corporate Film',
      videoId: '4P_0BSWME5E',
      category: 'brands',
      description: 'Business showcase video',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'Marketing Campaign',
      videoId: '8rmFk1dHb_M',
      category: 'brands',
      description: 'Brand marketing film',
      year: '2024',
      client: 'Marketing Brand',
    },
    {
      title: 'Product Campaign',
      videoId: 'BoUIN4WyCO0',
      category: 'brands',
      description: 'Product promotional video',
      year: '2024',
      client: 'Product Brand',
    },
    {
      title: 'Brand Event',
      videoId: 'HGBksIItYQs',
      category: 'events',
      description: 'Corporate event highlights',
      year: '2024',
      client: 'Event Client',
    },
    {
      title: 'Corporate Series',
      videoId: 'CdBX0NTjlII',
      category: 'brands',
      description: 'Business documentary series',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'Innovation Showcase',
      videoId: 'ycD5rQc-_EU',
      category: 'brands',
      description: 'Technology innovation film',
      year: '2024',
      client: 'Tech Company',
    },
    {
      title: 'Brand Campaign',
      videoId: 'ea2oVP1U4Fw',
      category: 'brands',
      description: 'Strategic brand campaign',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Music Video Project',
      videoId: 'RTCcswAXtn0',
      category: 'music',
      description: 'Professional music video',
      year: '2024',
      client: 'Music Artist',
    },
    {
      title: 'Corporate Vision',
      videoId: '9hIyf0FyYZ0',
      category: 'brands',
      description: 'Company vision film',
      year: '2024',
      client: 'Corporate Client',
    },
    // {
    //   title: 'Strategic Initiative',
    //   videoId: 'N3uvC_gRTlc',
    //   category: 'brands',
    //   description: 'Business strategy showcase',
    //   year: '2024',
    //   client: 'Strategic Client',
    // },
    {
      title: 'Music Production Vol. 2',
      videoId: 'o21H1tiTKOM',
      category: 'music',
      description: 'Professional music video',
      year: '2024',
      client: 'Music Artist',
    },
    {
      title: 'Brand Campaign Series',
      videoId: 'N2auTayZ978',
      category: 'brands',
      description: 'Marketing campaign film',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Corporate Event Coverage',
      videoId: 'dSOrly9zAkk',
      category: 'events',
      description: 'Business event coverage',
      year: '2024',
      client: 'Event Client',
    },
    // {
    //   title: 'Great Wall Motors',
    //   videoId: '70l-Cs1iMLw',
    //   category: 'brands',
    //   description: 'Automotive brand campaign',
    //   year: '2024',
    //   client: 'Great Wall Motors',
    // },
    {
      title: 'Marketing Initiative',
      videoId: 'MoQCWKwzqxs',
      category: 'brands',
      description: 'Strategic marketing film',
      year: '2024',
      client: 'Marketing Client',
    },
    {
      title: 'Brand Experience',
      videoId: 'DV1tXKLrKPM',
      category: 'brands',
      description: 'Experiential marketing film',
      year: '2024',
      client: 'Experience Brand',
    },
    {
      title: 'Travel Series',
      videoId: 'zp4iIAx0qVc',
      category: 'travel',
      description: 'Travel documentary series',
      year: '2024',
      client: 'Travel Brand',
    },
    {
      title: 'Corporate Vision 2.0',
      videoId: 'ZN2Ktk-2At0',
      category: 'brands',
      description: 'Company vision film',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'Brand Story',
      videoId: 'Ox8Vvx8ENU0',
      category: 'brands',
      description: 'Corporate narrative',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Marketing Campaign Pro',
      videoId: 'dOFntcrHfdk',
      category: 'brands',
      description: 'Strategic campaign film',
      year: '2024',
      client: 'Marketing Client',
    },
    {
      title: 'Brand Initiative',
      videoId: '5mpwROnf8_k',
      category: 'brands',
      description: 'Corporate initiative film',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Innovation Story',
      videoId: '0_tEdB59LhY',
      category: 'brands',
      description: 'Technology innovation film',
      year: '2024',
      client: 'Tech Company',
    },
    {
      title: 'Travel Documentary',
      videoId: 'jxDc7icF-Lg',
      category: 'travel',
      description: 'Travel series episode',
      year: '2024',
      client: 'Travel Brand',
    },
    {
      title: 'Brand Campaign Premium',
      videoId: 's7xQTc3aP8U',
      category: 'brands',
      description: 'Marketing campaign',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Brand Story Narrative',
      videoId: 'p9zWIfGkFuo',
      category: 'brands',
      description: 'Corporate storytelling',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Corporate Film Showcase',
      videoId: 'DmQqS1dIh3U',
      category: 'brands',
      description: 'Business showcase',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'Brand Campaign Initiative',
      videoId: 'VUh78cxA_04',
      category: 'brands',
      description: 'Marketing initiative',
      year: '2024',
      client: 'Brand Client',
    },
    {
      title: 'Corporate Vision Showcase',
      videoId: 'nWRGCuiJMy8',
      category: 'brands',
      description: 'Company showcase',
      year: '2024',
      client: 'Corporate Client',
    },
    {
      title: 'Brand Story Documentary',
      videoId: 'BSg4EjWPq8E',
      category: 'brands',
      description: 'Corporate narrative',
      year: '2024',
      client: 'Brand Client',
    },
    // {
    //   title: 'Marketing Campaign Strategic',
    //   videoId: '5WpZLFnn9UQ',
    //   category: 'brands',
    //   description: 'Strategic campaign',
    //   year: '2024',
    //   client: 'Marketing Client',
    // },
  ];

  const portfolioItems = VIDEO_ITEMS;

  const instagramFilters = [
    {
      url: 'https://www.instagram.com/reel/C8hDgP2pxZs/?igsh=MTB6am5rcm9rZXBvcw%3D%3D',
      title: 'ankit_baiyanpuria & HONDA',
      type: 'Shoot & Edit',
    },
    {
      url: 'https://www.instagram.com/p/Cwu5h3LPrym/',
      title: 'Maruti Suzuki Campaign',
      type: 'Edit Project',
    },
    {
      url: 'https://www.instagram.com/p/DITr9jSNXYY/',
      title: 'Creative Content',
      type: 'Shoot & Edit',
    },
    {
      url: 'https://www.instagram.com/reel/DA_Xs39JPZ1/',
      title: 'M&S Campaign',
      type: 'Edit Project',
    },
    {
      url: 'https://www.instagram.com/reel/DBB3nGttqgk/',
      title: 'M&S Campaign Vol. 2',
      type: 'Edit Project',
    },
    {
      url: 'https://www.instagram.com/reel/C69Ap1yRsSo/',
      title: 'Tecno India',
      type: 'Shoot & Edit',
    },
    {
      url: 'https://www.instagram.com/reel/CpeillJo51C/',
      title: 'Creative Shoot',
      type: 'Shoot',
    },
    {
      url: 'https://www.instagram.com/reel/CfTN9AHIOCn/',
      title: 'Brand Content',
      type: 'Shoot & Edit',
    },
    {
      url: 'https://www.instagram.com/reel/CfWZSUNI8Jc/',
      title: 'Social Media Content',
      type: 'Creative',
    },
    {
      url: 'https://www.instagram.com/reel/CfdXarGB6eT/',
      title: 'Digital Campaign',
      type: 'Creative',
    },
    {
      url: 'https://www.instagram.com/reel/CfLNSjeoXNq/',
      title: 'Brand Showcase',
      type: 'Creative',
    },
  ];

  const categories = [
    'All',
    'podcast',
    'adventure',
    'brand',
    'product',
    'documentary',
    'brands',
    'events',
    'music',
    'travel',
  ];

  const categoryLabels = {
    All: 'All Works',
    podcast: 'Podcasts',
    adventure: 'Adventure Films',
    brand: 'Brand Films',
    product: 'Product Videos',
    documentary: 'Documentaries',
    brands: 'Brand Films',
    events: 'Events',
    music: 'Music Videos',
    travel: 'Travel',
  };

  const filteredProjects =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const featuredProjects = portfolioItems.filter((item) => item.featured);

  const handleVideoClick = (video) => {
    // Create slug from title
    const slug = video.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();

    router.push(`/portfolio/${slug}`);
  };

  const closeVideoOverlay = () => {
    setShowVideoOverlay(false);
    setSelectedVideo(null);
  };

  return (
    <div className='bg-white min-h-screen' ref={ref}>
      {/* Hero Section */}
      <section className='py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-7xl mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center mb-20'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className='mb-8'
            >
              <span className='inline-block px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-full border border-red-200 mb-6'>
                Portfolio Showcase
              </span>
            </motion.div>
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-10 text-gray-900'>
              Our Visual
              <span className='block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'>
                Stories
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 1, delay: 0.8 }}
              className='h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-10'
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className='text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light'
            >
              Crafting compelling visual narratives that resonate, inspire, and
              drive impact across
              <span className='text-gray-800 font-medium'>
                {' '}
                documentaries, brand stories, and digital campaigns
              </span>
            </motion.p>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'
          >
            {[
              {
                value: portfolioItems.length + '+',
                label: 'Projects Delivered',
                icon: '🎬',
              },
              {
                value: (categories.length - 1).toString(),
                label: 'Specializations',
                icon: '🎯',
              },
              { value: '25+', label: 'Happy Clients', icon: '🤝' },
              { value: '2024', label: 'Latest Work', icon: '✨' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className='text-center group'
              >
                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2'>
                  <div className='text-3xl mb-3'>{stat.icon}</div>
                  <div className='text-4xl font-light text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-600 font-medium tracking-wide'>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative'>
        {/* Subtle background pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:50px_50px]'></div>
        </div>

        <div className='max-w-6xl mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='inline-block px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-full border border-red-200 mb-6'
            >
              Spotlight
            </motion.span>
            <h2 className='text-3xl md:text-4xl font-light mb-6 text-gray-900 tracking-wide'>
              Featured
              <span className='block text-red-500 font-medium'>Work</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ duration: 1, delay: 0.6 }}
              className='h-0.5 bg-red-500 mx-auto mb-8'
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light'
            >
              Our most impactful projects showcasing
              <span className='text-gray-800 font-medium'>
                {' '}
                creative excellence and storytelling mastery
              </span>
            </motion.p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-8 mb-16'>
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className='group cursor-pointer'
              >
                <Link
                  href={`/portfolio/${project.title
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .trim()}`}
                >
                  <div className='bg-white rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:scale-[1.02] backdrop-blur-sm'>
                    <div className='aspect-[16/10] relative overflow-hidden rounded-t-3xl'>
                      {/* YouTube Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                        alt={project.title}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres fails
                          e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                        }}
                      />

                      {/* Play Button Overlay */}
                      <motion.div
                        className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className='w-20 h-20 bg-red-500 hover:bg-red-500/80 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300'>
                          <Play
                            size={32}
                            className='text-white ml-1'
                            fill='white'
                          />
                        </div>
                      </motion.div>

                      {/* Always visible subtle play indicator */}
                      <div className='absolute top-4 right-4 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center'>
                        <Play
                          size={16}
                          className='text-white ml-0.5'
                          fill='white'
                        />
                      </div>
                    </div>

                    <div className='p-8'>
                      <div className='flex justify-between items-center mb-5'>
                        <span className='text-gray-700 text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-2 rounded-full border border-gray-200'>
                          {project.category}
                        </span>
                        <span className='text-gray-500 text-sm font-medium'>
                          {project.year}
                        </span>
                      </div>

                      <h3 className='text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300 leading-tight'>
                        {project.title}
                      </h3>

                      <div className='flex items-center gap-2 mb-4'>
                        <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                        <p className='text-sm text-gray-600 font-medium uppercase tracking-wide'>
                          {project.client}
                        </p>
                      </div>

                      <p className='text-base text-gray-600 leading-relaxed mb-6 font-light'>
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className='py-16 lg:py-24 bg-white'>
        <div className='max-w-6xl mx-auto px-6 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-12'
          >
            <h2 className='text-2xl md:text-3xl font-normal mb-4 text-gray-900 text-center tracking-wide'>
              All Projects
            </h2>
            <div className='w-16 h-0.5 bg-red-500 mx-auto mb-6' />
          </motion.div>

          {/* Enhanced Filters and Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-12'
          >
            <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
              {/* Category Filters */}
              <div className='flex flex-wrap justify-center gap-3'>
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-full border-2 hover:shadow-lg hover:-translate-y-1 ${
                      activeFilter === category
                        ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/25'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-600'
                    }`}
                  >
                    {categoryLabels[category] || category}
                    {activeFilter === category && (
                      <span className='ml-2 inline-block w-2 h-2 bg-white rounded-full'></span>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Enhanced View Mode Toggle */}
              <div className='flex items-center gap-1 bg-white border-2 border-gray-200 p-1 rounded-full shadow-sm'>
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid size={16} />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            layout
            className={
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
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
                <Link
                  href={`/portfolio/${project.title
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .trim()}`}
                >
                  <div
                    className={`bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                      viewMode === 'list'
                        ? 'lg:col-span-3 grid lg:grid-cols-3 gap-0'
                        : ''
                    }`}
                  >
                    <div
                      className={`aspect-[4/3] relative overflow-hidden group-hover:scale-[1.02] transition-all duration-300 ${
                        viewMode === 'list' ? 'lg:col-span-1' : ''
                      }`}
                    >
                      {/* YouTube Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                        alt={project.title}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres fails
                          e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                        }}
                      />

                      {/* Play Button Overlay */}
                      <motion.div
                        className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className='w-16 h-16 bg-red-500 hover:bg-red-500/80 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300'>
                          <Play
                            size={24}
                            className='text-white ml-1'
                            fill='white'
                          />
                        </div>
                      </motion.div>

                      {/* Always visible subtle play indicator */}
                      <div className='absolute top-4 right-4 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center'>
                        <Play
                          size={16}
                          className='text-white ml-0.5'
                          fill='white'
                        />
                      </div>
                    </div>

                    <div
                      className={`p-4 ${
                        viewMode === 'list' ? 'lg:col-span-2' : ''
                      }`}
                    >
                      <div className='flex justify-between items-start mb-4'>
                        <div className='flex items-center gap-3'>
                          <span className='text-gray-700 text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-1.5 rounded-full border border-gray-200'>
                            {project.category}
                          </span>
                          <span className='text-gray-400 text-xs font-medium'>
                            {project.year}
                          </span>
                        </div>
                        <motion.div
                          className='opacity-0 group-hover:opacity-100 transition-all duration-300'
                          whileHover={{ scale: 1.1, rotate: 45 }}
                        >
                          <ExternalLink size={16} className='text-red-400' />
                        </motion.div>
                      </div>

                      <h3
                        className={`font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight ${
                          viewMode === 'list' ? 'text-xl' : 'text-lg'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <div className='flex items-center gap-2 mb-3'>
                        <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                        <p className='text-sm text-gray-600 font-medium uppercase tracking-wide'>
                          {project.client}
                        </p>
                      </div>

                      <p
                        className={`text-gray-600 leading-relaxed mb-4 font-light ${
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
                        className='inline-flex items-center text-sm font-medium tracking-wide text-gray-500 group-hover:text-red-600 transition-all duration-300 mt-3'
                        whileHover={{ x: 5 }}
                      >
                        <span>View Project</span>
                        <motion.span
                          className='ml-2'
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Filters Section - Commented Out */}

      <section className='py-24 lg:py-32 bg-gradient-to-br from-pink-50 via-white to-orange-50 relative overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-7xl mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-20'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className='mb-8'
            >
              <span className='inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-full shadow-lg mb-6'>
                Social Content
              </span>
            </motion.div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight'>
              Instagram
              <span className='block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent font-medium'>
                Filters & Reels
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 1, delay: 0.6 }}
              className='h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mb-8'
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light'
            >
              Creative content and interactive filters showcasing our
              <span className='text-gray-900 font-medium'>
                {' '}
                versatility in digital media
              </span>{' '}
              and social platforms.
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {instagramFilters.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='aspect-square bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-0.5 rounded-2xl group relative overflow-hidden shadow-lg hover:shadow-xl'
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className='w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-3 group-hover:bg-gradient-to-br group-hover:from-pink-50 group-hover:to-orange-50 transition-all duration-300'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className='mb-3'
                  >
                    <Instagram
                      size={28}
                      className='text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300'
                    />
                  </motion.div>

                  {/* Content Info - Always Visible */}
                  <div className='text-center'>
                    <h4 className='text-xs font-semibold text-gray-800 mb-2 leading-tight line-clamp-2'>
                      {item.title}
                    </h4>
                    <span className='text-xs text-red-600 font-medium px-2 py-1 bg-red-100 rounded-full'>
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Hover overlay with gradient */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl flex items-end justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className='bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1'>
                    <span className='text-gray-800 font-medium text-xs'>
                      View Post
                    </span>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-12 bg-gray-900 text-white'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-xl font-normal mb-4 text-white'>
              Ready to Create Your Next Project?
            </h3>
            <p className='text-gray-300 text-sm mb-6 leading-relaxed max-w-2xl mx-auto'>
              Let's collaborate to create compelling visual narratives that
              resonate with your audience.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <motion.a
                href='/#contact'
                className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href='/services'
                className='border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Overlay */}
      <AnimatePresence>
        {showVideoOverlay && selectedVideo && (
          <motion.div
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoOverlay}
          >
            <motion.div
              className='relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoOverlay}
                className='absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300'
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </button>

              {/* YouTube Video */}
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className='w-full h-full'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />

              {/* Video Info */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                <h3 className='text-white text-xl font-light mb-2'>
                  {selectedVideo.title}
                </h3>
                <div className='flex items-center gap-4 text-sm text-white/80'>
                  <span className='bg-red-500 px-2 py-1 rounded text-white text-xs'>
                    {categoryLabels[selectedVideo.category] ||
                      selectedVideo.category}
                  </span>
                  <span>{selectedVideo.client}</span>
                  <span>{selectedVideo.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
