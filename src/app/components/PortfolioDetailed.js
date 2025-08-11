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

  // Video portfolio data - curated from CLIENT_DATA and videos with fullDescription
  const VIDEO_ITEMS = [
    // Featured Videos with fullDescription
    {
      title: 'Attuned With AT | Ft. Rajiv Makhni | Coming Soon',
      videoId: 'wTjB4bLzHKo',
      category: 'podcast',
      description:
        "Podcast Film - End-to-End production of tech talk show featuring India's leading tech voice, Rajiv Makhni",
      year: '2024',
      client: 'itel india',
      featured: true,
      tags: ['Podcast', 'Tech Talk', 'Rajiv Makhni', 'itel', 'Full Production'],
    },
    {
      title: 'Wilderness Quest – Adventure Short',
      videoId: 'YFcB5XlFPF0',
      category: 'adventure',
      description:
        'Adventure Film - Thrilling visual journey into raw nature and extreme adventure with Jumpin Heights',
      year: '2024',
      client: 'Jumpin Heights',
      featured: true,
      tags: [
        'Adventure',
        'Extreme Sports',
        'Bungee Jumping',
        'Nature',
        'Cinematography',
      ],
    },
    {
      title: 'VRINDAVAN- CINEMATIC FILM | Banke Bihari Temple | 2021 | 4K',
      videoId: 'fGZPdgu2ZJY',
      category: 'documentary',
      description:
        "Documentary Film - Cinematic exploration of Banke Bihari Temple's divine atmosphere in Vrindavan",
      year: '2021',
      client: 'The Vagabond Films',
      featured: true,
      tags: [
        'Documentary',
        'Spiritual',
        'Temple',
        'Vrindavan',
        '4K',
        'Cultural Heritage',
      ],
    },
    {
      title:
        "Mountain Dew Real Heroes presents The Fall - India's First Frozen Waterfall Ascent",
      videoId: 'T_bIUw7GdTU',
      category: 'documentary',
      description:
        "Documentary Adventure Film - India's first adventure documentary shot at a frozen waterfall in extreme Himalayan conditions",
      year: '2024',
      client: 'Mountain Dew India',
      featured: true,
      tags: [
        'Adventure',
        'Documentary',
        'Himalayas',
        'Extreme Sports',
        'Mountain Dew',
        'Historic',
      ],
    },
    {
      title: '25 Years of Partnership | Gates Foundation',
      videoId: 'LOCAL:/GATES%20FOUNDATION.mp4',
      category: 'brands',
      description: 'Partnership Film - Strategic partnership celebration film',
      year: '2024',
      client: 'Gates Foundation',
      featured: true,
    },

    // itel India Videos from CLIENT_DATA
    // {
    //   title: 'Super Guru 4G – Entertainment Ki Duniya Ka Baap',
    //   videoId: 'lyBQYLtnKdM',
    //   category: 'brands',
    //   description: 'Brand Campaign - Entertainment power of itel Super Guru 4G feature phone',
    //   year: '2024',
    //   client: 'itel India',
    //   featured: false,
    // },
    {
      title: "Unleash the power of technology with itel's Pad One",
      videoId: 'Ll846ArEzAQ',
      category: 'product',
      description:
        'Product Film - Sleek & informative product video showcasing itel Pad One, shot entirely in studio',
      year: '2024',
      client: 'itel India',
      featured: false,
      tags: ['Product Video', 'itel', 'Tablet', 'Studio Shoot', 'Technology'],
    },
    {
      title:
        'Power your gadgets with itel VoltX 65 GaN charger | 65W Fast Charging',
      videoId: 'yW7DNblm2dg',
      category: 'product',
      description: 'Product Film - Fast charging technology showcase',
      year: '2024',
      client: 'itel India',
      featured: false,
    },
    {
      title: 'Unboxing the itel Buds Ace 2 TWS Earbuds | 50 hrs Playback',
      videoId: 'YnkPGjlk71s',
      category: 'product',
      description: 'Product Film - TWS earbuds unboxing and features',
      year: '2024',
      client: 'itel India',
      featured: false,
    },
    // {
    //   title: 'itel | Jode Bharat Ka Har Dil | Cricket World Cup | 2mins',
    //   videoId: 'W27wOTPahDk',
    //   category: 'brands',
    //   description: 'Brand Campaign - Cricket World Cup celebration campaign',
    //   year: '2024',
    //   client: 'itel India',
    //   featured: false,
    // },
    {
      title: 'itel | itel Smartphone | unboxing P40+',
      videoId: 'QHD_BJmJtn0',
      category: 'product',
      description: 'Product Film - Smartphone unboxing and features',
      year: '2024',
      client: 'itel India',
      featured: false,
    },
    {
      title: 'itel Smartwatch 2ES | Smartwatch | Fitness Watch',
      videoId: '4jN9Yb2MqK0',
      category: 'product',
      description: 'Product Film - Smartwatch and fitness features showcase',
      year: '2024',
      client: 'itel India',
      featured: false,
    },
    {
      title: 'Stunning TV Ads Shot with Excellence! | Itel | 55Inch',
      videoId: '-rZnKxE-Af4',
      category: 'brands',
      description: 'TV Commercial - Television advertisement showcase',
      year: '2024',
      client: 'itel India',
      featured: false,
    },

    // Jumpin Heights Adventure Videos
    {
      title: 'Wilderness Adventure – Epic Journey',
      videoId: 'FCIu2yfWHtc',
      category: 'adventure',
      description:
        'Adventure Film - Epic wilderness journey showcasing extreme outdoor experiences',
      year: '2024',
      client: 'Jumpin Heights',
      featured: false,
      tags: [
        'Adventure',
        'Wilderness',
        'Extreme Sports',
        'Nature',
        'Cinematography',
      ],
    },
    {
      title: 'Wilderness Extreme – Mountain Adventure',
      videoId: 'SrEH_a3L7qg',
      category: 'adventure',
      description:
        'Adventure Film - Mountain adventure capturing extreme outdoor challenges',
      year: '2024',
      client: 'Jumpin Heights',
      featured: false,
      tags: [
        'Adventure',
        'Mountain',
        'Extreme Sports',
        'Nature',
        'Cinematography',
      ],
    },

    // Documentary and Educational Content
    {
      title:
        '7 Year Win Streak with @UnGraduateGamer | 7th Anniversary | Full Video',
      videoId: 'R_-MOeWMfvU',
      category: 'documentary',
      description:
        "Documentary AdFilm - Celebration of 7-year gaming milestone with India's gaming community",
      year: '2024',
      client: 'Free Fire INDIA',
      featured: false,
      tags: [
        'Gaming',
        'Documentary',
        'Anniversary',
        'Esports',
        'Content Creator',
        'Free Fire',
      ],
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
      tags: [
        'Adventure',
        'Skiing',
        'Himalayas',
        'Munsiyari',
        'Alpine Sports',
        'Drone Cinematography',
      ],
    },

    // The Vagabond Films Documentary Series
    {
      title: 'Vrindavan Spiritual Journey - Part 2',
      videoId: 'Ox8Vvx8ENU0',
      category: 'documentary',
      description: 'Documentary Film - Spiritual journey continuation',
      year: '2024',
      client: 'The Vagabond Films',
      featured: false,
    },
    {
      title: 'Vrindavan Divine Experience - Part 3',
      videoId: 'ZN2Ktk-2At0',
      category: 'documentary',
      description: 'Documentary Film - Divine experience exploration',
      year: '2024',
      client: 'The Vagabond Films',
      featured: false,
    },
    {
      title: 'Vrindavan Sacred Moments - Part 4',
      videoId: 'DV1tXKLrKPM',
      category: 'documentary',
      description: 'Documentary Film - Sacred moments documentation',
      year: '2024',
      client: 'The Vagabond Films',
      featured: false,
    },
    {
      title: 'Vrindavan Devotional Film - Part 5',
      videoId: 'MoQCWKwzqxs',
      category: 'documentary',
      description: 'Documentary Film - Devotional film conclusion',
      year: '2024',
      client: 'The Vagabond Films',
      featured: false,
    },

    // Corporate and Brand Films - Tata Motors
    {
      title: '#HeroStories from Vietnam | Tata Super Ace | Cargo',
      videoId: 'PmX_y3ApaDs',
      category: 'brands',
      description:
        'Global Customer Stories Campaign - Powerful brand film showcasing real-world impact of Tata vehicles',
      year: '2024',
      client: 'Tata Motors',
      featured: true,
      tags: [
        'Automotive',
        'Global Campaign',
        'Customer Stories',
        'Brand Film',
        'Vietnam',
        'Commercial',
      ],
    },
    {
      title: 'Hero Stories from Indonesia | Tata Prima | Mining & Construction',
      videoId: '4P_0BSWME5E',
      category: 'brands',
      description:
        'Brand Campaign - Commercial vehicle showcase highlighting durability and performance in Indonesia mining sector',
      year: '2024',
      client: 'Tata Motors',
      featured: false,
      tags: [
        'Automotive',
        'Global Campaign',
        'Customer Stories',
        'Mining',
        'Indonesia',
        'Commercial Vehicles',
      ],
    },
    {
      title: '#HeroStories from Vietnam | Tata Super Ace | FMCG',
      videoId: 'AT94cyerIPo',
      category: 'brands',
      description:
        'Brand Film - Corporate storytelling showcasing Tata Motors heritage and innovation in Vietnam FMCG sector',
      year: '2024',
      client: 'Tata Motors',
      featured: false,
      tags: [
        'Automotive',
        'Global Campaign',
        'Customer Stories',
        'Vietnam',
        'FMCG',
        'Distribution',
      ],
    },
    {
      title: '#HeroStories from Indonesia | Tata Prima | Mining',
      videoId: '0BsWJDmjGWs',
      category: 'brands',
      description:
        'Product Film - Vehicle features and capabilities demonstration in Indonesian mining operations',
      year: '2024',
      client: 'Tata Motors',
      featured: false,
      tags: [
        'Automotive',
        'Product Demo',
        'Mining Operations',
        'Indonesia',
        'Heavy Industry',
        'Reliability',
      ],
    },
    {
      title:
        "How One Man 'Bridged' the Dreams of Millions! - Ingenious Indians EP 1",
      videoId: 'ea2oVP1U4Fw',
      category: 'documentary',
      description:
        'Stories of Change Across India - Impactful visual campaign spotlighting grassroots transformation stories',
      year: '2024',
      client: 'The Better India',
      featured: true,
      tags: [
        'Documentary',
        'Social Impact',
        'Grassroots',
        'Change Makers',
        'India',
        'Storytelling',
      ],
    },
    {
      title: 'Employee Value Proposition | Jindal Stainless',
      videoId: '_KWw7k4lptk',
      category: 'brands',
      description:
        "Corporate Identity Film - Dynamic showcase of India's leading stainless steel manufacturer",
      year: '2024',
      client: 'Jindal Stainless',
      featured: false,
      tags: [
        'Corporate',
        'Industrial',
        'Manufacturing',
        'Steel Industry',
        'Brand Film',
        'Infrastructure',
      ],
    },
    {
      title: 'Iss Yoga Diwas par #IndiaRahegaFit | Dwarkadhish Temple',
      videoId: 'N2auTayZ978',
      category: 'brands',
      description:
        'International Yoga Day Campaign - Visually uplifting film celebrating transformative power of yoga',
      year: '2024',
      client: 'Adani Foundation',
      featured: false,
      tags: [
        'Yoga',
        'Health & Wellness',
        'Spiritual',
        'Community',
        'CSR',
        'Campaign',
      ],
    },
    {
      title: 'Shiksha Ka Ghar: Ek Chidiyaghar || A Day in College by Infinix',
      videoId: '4ZXiuOQn7bw',
      category: 'brands',
      description:
        'Lifestyle Campaign - In-house brand content showcasing college life and tech integration',
      year: '2022',
      client: 'Infinix India',
      featured: false,
      tags: [
        'Lifestyle',
        'Brand Campaign',
        'College',
        'Technology',
        'Social Media',
        'Product Integration',
      ],
    },

    // Additional Infinix Videos
    {
      title: 'Infinix Brand Campaign Video 1',
      videoId: 'NVGPApf1-xA',
      category: 'brands',
      description:
        'Brand Campaign - Lifestyle and technology integration showcase',
      year: '2022',
      client: 'Infinix India',
      featured: false,
      tags: ['Lifestyle', 'Brand Campaign', 'Technology', 'Social Media'],
    },
    {
      title: 'Infinix Brand Campaign Video 2',
      videoId: 'JMrJR72wkes',
      category: 'brands',
      description:
        'Brand Campaign - Product features and lifestyle integration',
      year: '2022',
      client: 'Infinix India',
      featured: false,
      tags: ['Brand Campaign', 'Product Features', 'Technology', 'Lifestyle'],
    },

    // Music Videos
    {
      title: 'Ameen | Muhfaad | AELAAN EP | Latest Rap 2020 | MAHARAJ',
      videoId: 'RTCcswAXtn0',
      category: 'music',
      description:
        'Hip-Hop Music Video - Visually captivating music video blending performance and cinematic storytelling',
      year: '2020',
      client: 'Muhfaad',
      featured: false,
      tags: [
        'Music Video',
        'Hip-Hop',
        'Rap',
        'Performance',
        'Cinematography',
        'Indian Music',
      ],
    },
    {
      title: 'Music Production Vol. 2',
      videoId: 'o21H1tiTKOM',
      category: 'music',
      description:
        'Professional Music Video - High-quality music video production',
      year: '2024',
      client: 'Music Video Productions',
      featured: false,
    },
    {
      title: 'Music Video Production 3',
      videoId: 'CdBX0NTjlII',
      category: 'music',
      description: 'Professional Music Video - Creative music video production',
      year: '2024',
      client: 'Music Video Productions',
      featured: false,
      tags: ['Music Video', 'Professional Production', 'Creative Direction'],
    },
    {
      title: 'Music Video Production 4',
      videoId: '9hIyf0FyYZ0',
      category: 'music',
      description: 'Professional Music Video - High-quality music production',
      year: '2024',
      client: 'Music Video Productions',
      featured: false,
      tags: ['Music Video', 'Production', 'Cinematography'],
    },

    // Educational Institution Content - IMI
    {
      title: 'Campus Life – IMI Bhubaneswar Kritva 2024',
      videoId: 'mgfNKKeKrYc',
      category: 'documentary',
      description:
        'Event Video - Campus festival documentation showcasing vibrant student culture and academic excellence',
      year: '2024',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: [
        'Campus Life',
        'Event',
        'Student Culture',
        'Academic Excellence',
        'Festival',
      ],
    },
    {
      title:
        "IMI Insights Podcast | Ep 4 - HR: A Catalyst in India's Orange Economy",
      videoId: 'nWRGCuiJMy8',
      category: 'podcast',
      description:
        'Podcast Film - Professional academic discussion on HR and economic development',
      year: '2024',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: [
        'Podcast',
        'HR',
        'Economy',
        'Academic Discussion',
        'Professional Development',
      ],
    },
    {
      title: 'IMI Delhi | 41st Annual Convocation Ceremony Highlights',
      videoId: 'CwWf5C9PUJE',
      category: 'documentary',
      description:
        'Event Documentation - Annual convocation ceremony highlights showcasing academic achievements',
      year: '2024',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: [
        'Convocation',
        'Academic Achievement',
        'Graduation',
        'Ceremony',
        'Milestone',
      ],
    },
    {
      title: 'SIP Experience | Anjali Singh | PGDM',
      videoId: 'ybMAVHPuuZo',
      category: 'documentary',
      description:
        'Student Testimonial - Summer Internship Program experience sharing and career insights',
      year: '2024',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: [
        'Student Testimonial',
        'Internship',
        'Career',
        'PGDM',
        'Professional Growth',
      ],
    },
    {
      title: 'WELCOME BATCH OF 2023-25',
      videoId: 'HI4nY13qkkA',
      category: 'documentary',
      description:
        'Institutional Film - Welcome video for new student batch showcasing campus facilities and culture',
      year: '2024',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: [
        'Welcome Video',
        'New Students',
        'Campus Tour',
        'Institutional',
        'Orientation',
      ],
    },
    {
      title: 'National Alumni Meet 2023',
      videoId: 'VUh78cxA_04',
      category: 'documentary',
      description:
        'Event Documentation - Alumni reunion showcasing professional networks and institutional legacy',
      year: '2023',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: [
        'Alumni',
        'Networking',
        'Professional Development',
        'Legacy',
        'Business Leadership',
      ],
    },
    {
      title: 'IMI Additional Content',
      videoId: '3xMRzd0VN_E',
      category: 'documentary',
      description:
        'Institutional Content - Additional IMI video content showcasing academic excellence',
      year: '2024',
      client: 'IMI (International Management Institute)',
      featured: false,
      tags: ['Academic Excellence', 'Institutional', 'Educational Content'],
    },

    // Additional Educational Institution Content
    {
      title: 'IRMA – A Tribute to Shyam Benegal by IRMA Students',
      videoId: 'OVX7WipsO7o',
      category: 'documentary',
      description:
        'Events | Testimonials | Digital Content - Visual storytelling for leading rural management institute',
      year: '2024',
      client: 'IRMA',
      featured: false,
      tags: [
        'Education',
        'Rural Management',
        'Events',
        'Testimonials',
        'Institutional',
        'Documentary',
      ],
    },
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
                      {/* Video Thumbnail */}
                      <img
                        src={
                          project.client === 'Gates Foundation'
                            ? '/Gates_thumbnail.png'
                            : `https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`
                        }
                        alt={project.title}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          if (project.client === 'Gates Foundation') {
                            // If Gates Foundation thumbnail fails, use a fallback
                            e.target.src = '/Gates_thumbnail.png';
                          } else {
                            // Fallback to medium quality thumbnail if maxres fails
                            e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                          }
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
                        src={
                          project.client === 'Gates Foundation'
                            ? '/Gates_thumbnail.png'
                            : `https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`
                        }
                        alt={project.title}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres fails
                          if (project.client !== 'Gates Foundation') {
                            e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                          }
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
