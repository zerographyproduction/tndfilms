'use client';

import { motion } from 'framer-motion';
import {
  Play,
  ArrowLeft,
  ExternalLink,
  Users,
  Video,
  Calendar,
  Eye,
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

// Client data
const CLIENT_DATA = {
  'itel-india': {
    name: 'itel India',
    subtitle: 'Integrated Video Campaigns',
    description: 'Leading mobile and smart tech brand',
    role: 'Pre-Production | Production | Post-Production',
    overview:
      "TND Films partnered with itel India, a leading mobile and smart tech brand, to execute a series of engaging visual campaigns designed to connect with India's young and aspirational audience. Across multiple projects, our team handled the complete end-to-end production pipeline — from initial concept development to the final delivery of high-impact videos optimized for digital platforms.",

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director & Pre-Production Head',
        description:
          'Visionary direction, script supervision, casting input, and on-ground creative leadership.',
      },
      {
        name: 'Nitin Kumar Pal',
        role: 'Director of Photography & Production Head',
        description:
          'Led camera work, lighting design, and on-location visual storytelling with cinematic precision.',
      },
      {
        name: 'Kuldeep Chauhan',
        role: 'Editor & Post-Production Head',
        description:
          'Spearheaded editing, color grading, sound design, and visual continuity across all films.',
      },
    ],

    services: [
      'Creative Development & Pre-Planning',
      'Full-Scale Production',
      'Post-Production Excellence',
    ],

    highlights: [
      "Multiple Cities, One Brand Voice: Films shot across dynamic urban and semi-urban locations to represent itel's wide market reach.",
      "High Visual Value: Crisp imagery, vibrant tone, and human-centered storytelling that reflect the brand's energy.",
      "Strategic Consistency: Each video uniquely crafted yet collectively reinforcing itel's brand identity and product vision.",
    ],

    videos: [
      {
        title: 'Attuned With AT | Ft. Rajiv Makhni | Coming Soon',
        videoId: 'wTjB4bLzHKo',
        category: 'Podcast Film',
        slug: 'attuned-with-at-ft-rajiv-makhni-coming-soon',
      },
      {
        title: 'Super Guru 4G – Entertainment Ki Duniya Ka Baap',
        videoId: 'lyBQYLtnKdM',
        category: 'Brand Campaign',
        slug: 'super-guru-4g-entertainment-ki-duniya-ka-baap',
      },
      {
        title: "Unleash the power of technology with itel's Pad One",
        videoId: 'Ll846ArEzAQ',
        category: 'Product Film',
        slug: 'unleash-the-power-of-technology-with-itels-pad-one',
      },
      {
        title:
          'Power your gadgets with itel VoltX 65 GaN charger | 65W Fast Charging',
        videoId: 'yW7DNblm2dg',
        category: 'Product Film',
        slug: 'power-your-gadgets-with-itel-voltx-65-gan-charger-65w-fast-charging',
      },
      {
        title: 'Unboxing the itel Buds Ace 2 TWS Earbuds | 50 hrs Playback',
        videoId: 'YnkPGjlk71s',
        category: 'Product Film',
        slug: 'unboxing-the-itel-buds-ace-2-tws-earbuds-50-hrs-playback',
      },
      {
        title: 'itel | Jode Bharat Ka Har Dil | Cricket World Cup | 2mins',
        videoId: 'W27wOTPahDk',
        category: 'Brand Campaign',
        slug: 'itel-jode-bharat-ka-har-dil-cricket-world-cup-2mins',
      },
      {
        title: 'itel | itel Smartphone | unboxing P40+',
        videoId: 'QHD_BJmJtn0',
        category: 'Product Film',
        slug: 'itel-itel-smartphone-unboxing-p40',
      },
      {
        title: 'itel Smartwatch 2ES | Smartwatch | Fitness Watch',
        videoId: '4jN9Yb2MqK0',
        category: 'Product Film',
        slug: 'itel-smartwatch-2es-smartwatch-fitness-watch',
      },
      {
        title: 'Stunning TV Ads Shot with Excellence! | Itel | 55Inch',
        videoId: '-rZnKxE-Af4',
        category: 'TV Commercial',
        slug: 'stunning-tv-ads-shot-with-excellence-itel-55inch',
      },
    ],

    btsImages: [
      '/bts_itel/DSC_5169.jpg',
      '/bts_itel/DSC_5193.jpg',
      '/bts_itel/DSC_6379.jpg',
      '/bts_itel/DSC_6414.jpg',
      '/bts_itel/DSC_6417.jpg',
      '/bts_itel/DSC_6449.jpg',
      '/bts_itel/DSC_6556.jpg',
      '/bts_itel/DSC_6561.jpg',
      '/bts_itel/DSC_6621.jpg',
      '/bts_itel/DSC_6622.jpg',
      '/bts_itel/DSC_6744.jpg',
      '/bts_itel/DSC_6763.jpg',
      '/bts_itel/bts1.jpg',
    ],
  },

  'gates-foundation': {
    name: 'Gates Foundation',
    subtitle: 'Partnership Celebration Film',
    description: 'Global philanthropic organization',
    role: 'Full Production Services',
    overview:
      "TND Films partnered with the Gates Foundation to create a milestone celebration film highlighting 25 years of impactful partnership work. This project showcased the foundation's commitment to global health, education, and poverty alleviation through compelling visual storytelling.",

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director & Creative Lead',
        description:
          'Led creative vision and storytelling approach for the partnership celebration film.',
      },
      {
        name: 'Nitin Kumar Pal',
        role: 'Director of Photography',
        description:
          "Captured cinematic visuals that reflected the foundation's global impact and mission.",
      },
      {
        name: 'Kuldeep Chauhan',
        role: 'Post-Production Supervisor',
        description:
          'Supervised editing and post-production to create a compelling narrative flow.',
      },
    ],

    services: [
      'Strategic Creative Development',
      'Documentary-Style Production',
      'Global Impact Storytelling',
    ],

    highlights: [
      'Milestone Achievement: Celebrated 25 years of meaningful partnership and global impact.',
      'Authentic Storytelling: Captured real stories and testimonials from beneficiaries and partners.',
      'Professional Excellence: Delivered broadcast-quality content for international distribution.',
    ],

    videos: [
      {
        title: '25 Years of Partnership | Gates Foundation',
        videoId: 'LOCAL:/GATES%20FOUNDATION.mp4',
        category: 'Partnership Film',
        slug: '25-years-of-partnership-gates-foundation',
      },
    ],

    // btsImages: ['/bts-gates-1.jpg', '/bts-gates-2.jpg'],
  },

  'jumpin-heights': {
    name: 'Jumpin Heights',
    subtitle: 'Adventure Sports Documentation',
    description: "India's premier adventure sports destination",
    role: 'Cinematography & Adventure Documentation',
    overview:
      "TND Films collaborated with Jumpin Heights to capture the thrill and excitement of India's leading adventure sports destination. Our team documented extreme sports activities including bungee jumping, flying fox, and mountaineering expeditions in the breathtaking landscapes of Rishikesh.",

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Adventure Cinematographer',
        description:
          'Specialized in extreme sports cinematography and high-altitude filming techniques.',
      },
      {
        name: 'Production Crew',
        role: 'Safety & Equipment Specialists',
        description:
          'Ensured safe filming practices while capturing authentic adventure experiences.',
      },
    ],

    services: [
      'Adventure Sports Cinematography',
      'Drone & Aerial Footage',
      'Extreme Location Filming',
    ],

    highlights: [
      'High-Risk Filming: Successfully captured extreme sports activities with professional safety protocols.',
      'Authentic Adventure: Documented real adrenaline experiences in their natural environment.',
      'Technical Excellence: Used specialized equipment for challenging outdoor filming conditions.',
    ],

    videos: [
      {
        title: 'Wilderness Quest – Adventure Short',
        videoId: 'YFcB5XlFPF0',
        category: 'Adventure Film',
        slug: 'wilderness-quest-adventure-short',
      },
      {
        title: 'Wilderness Adventure – Epic Journey',
        videoId: 'FCIu2yfWHtc',
        category: 'Adventure Film',
        slug: 'wilderness-adventure-epic-journey',
      },
      {
        title: 'Wilderness Extreme – Mountain Adventure',
        videoId: 'SrEH_a3L7qg',
        category: 'Adventure Film',
        slug: 'wilderness-extreme-mountain-adventure',
      },
    ],

    // btsImages: ['/bts-jumpin-1.jpg', '/bts-jumpin-2.jpg', '/bts-jumpin-3.jpg'],
  },

  'tata-motors': {
    name: 'Tata Motors',
    subtitle: 'Global Customer Stories Campaign',
    description: "India's leading automotive manufacturer",
    role: 'Director of Photography (DOP)',
    overview:
      'TND Films collaborated with Tata Motors on their ambitious "HeroStories" global campaign, capturing authentic customer journeys across different geographies. This powerful storytelling initiative showcased how Tata Motors vehicles enable mobility, progress, and reliability in people\'s lives—from rugged terrains to city landscapes.',

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director of Photography',
        description:
          'Led the visual narrative for the extensive global campaign, capturing authentic customer stories across diverse environments.',
      },
    ],

    services: [
      'Global Campaign Cinematography',
      'Customer Story Documentation',
      'Multi-location Production',
    ],

    highlights: [
      'Global Reach: Shot across multiple countries including Vietnam and Indonesia.',
      'Authentic Storytelling: Captured real customer experiences with natural, documentary-style approach.',
      'Technical Excellence: Adapted to diverse environments with handheld and cinematic techniques.',
    ],

    videos: [
      {
        title: '#HeroStories from Vietnam | Tata Super Ace | Cargo',
        videoId: 'PmX_y3ApaDs',
        category: 'Global Campaign',
        slug: 'herostories-from-vietnam-tata-super-ace-cargo',
      },
      {
        title:
          'Hero Stories from Indonesia | Tata Prima | Mining & Construction',
        videoId: '4P_0BSWME5E',
        category: 'Brand Campaign',
        slug: 'tata-motors-commercial-campaign',
      },
      {
        title: '#HeroStories from Vietnam | Tata Super Ace | FMCG',
        videoId: 'AT94cyerIPo',
        category: 'Brand Film',
        slug: 'tata-motors-brand-film',
      },
      {
        title: '#HeroStories from Indonesia | Tata Prima | Mining',
        videoId: '0BsWJDmjGWs',
        category: 'Product Film',
        slug: 'tata-motors-product-showcase',
      },
    ],

    // btsImages: ['/bts-tata-1.jpg', '/bts-tata-2.jpg'],
  },

  'the-better-india': {
    name: 'The Better India',
    subtitle: 'Stories of Change Across India',
    description: "India's leading positive news platform",
    role: 'Director of Photography (DOP)',
    overview:
      'TND Films partnered with The Better India on their impactful documentary series "Ingenious Indians," designed to spotlight powerful grassroots stories from across the nation. This ambitious project captures narratives that often go unheard yet drive real social change through innovation, sustainability, and community transformation.',

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director of Photography',
        description:
          'Shaped the visual identity of this pan-India project, traveling from remote villages to urban centers capturing authentic transformation stories.',
      },
    ],

    services: [
      'Documentary Cinematography',
      'Social Impact Storytelling',
      'Pan-India Production',
    ],

    highlights: [
      'National Scope: Documented stories across diverse locations from rural villages to urban centers.',
      'Authentic Approach: Used naturalistic cinematography with available light and handheld techniques.',
      "Social Impact: Elevated grassroots stories into compelling visual tributes to India's transformation.",
    ],

    videos: [
      {
        title:
          "How One Man 'Bridged' the Dreams of Millions! - Ingenious Indians EP 1",
        videoId: 'ea2oVP1U4Fw',
        category: 'Documentary',
        slug: 'how-one-man-bridged-the-dreams-of-millions-ingenious-indians-ep-1',
      },
    ],

    // btsImages: ['/bts-better-india-1.jpg', '/bts-better-india-2.jpg'],
  },

  'free-fire-india': {
    name: 'Free Fire INDIA',
    subtitle: 'Gaming Community Celebration',
    description: 'Leading mobile gaming platform',
    role: 'Production & Shoot Execution',
    overview:
      "TND Films collaborated with Free Fire INDIA to create a celebratory documentary film honoring the 7-year gaming milestone of @UnGraduateGamer. This project captured the fast-paced, high-stakes world of competitive gaming through cinematic storytelling that reflects the passion driving India's gaming community.",

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director of Photography (DOP)',
        description:
          'Led visual storytelling, handling primary camera, shot composition, and overall visual tone with cinematic precision.',
      },
      {
        name: 'Nitin Kumar Pal',
        role: 'Production Lead & Second Camera',
        description:
          'Managed production lighting setup and operated second camera unit, ensuring consistency across multi-cam shots.',
      },
    ],

    services: [
      'Gaming Content Production',
      'Documentary-Style Filming',
      'Multi-Camera Setup',
    ],

    highlights: [
      'Gaming Expertise: Specialized approach to capture the energy and intensity of competitive gaming.',
      'Technical Excellence: Multi-camera rigs with dynamic tracking shots and cinematic lighting.',
      "Community Focus: Tribute to India's gaming community and content creator passion.",
    ],

    videos: [
      {
        title:
          '7 Year Win Streak with @UnGraduateGamer | 7th Anniversary | Full Video',
        videoId: 'R_-MOeWMfvU',
        category: 'Documentary',
        slug: '7-year-win-streak-with-ungraduategamer-7th-anniversary-full-video',
      },
    ],

    // btsImages: ['/bts-freefire-1.jpg', '/bts-freefire-2.jpg'],
  },

  'the-vagabond-films': {
    name: 'The Vagabond Films',
    subtitle: 'Spiritual & Cultural Heritage Documentation',
    description: 'Documentary film production house',
    role: 'Pre-Production | Cinematography | Post-Production',
    overview:
      "TND Films has been the complete production partner for The Vagabond Films, handling all video content for their YouTube channel. Our collaboration focuses on documenting India's spiritual and cultural heritage through cinematic documentary films that capture the divine atmosphere and timeless traditions of sacred destinations.",

    team: [
      {
        name: 'Nitin Kumar Pal',
        role: 'Director of Photography & Production Head',
        description:
          'Led cinematography and production across multiple documentary episodes in varied spiritual locations.',
      },
      {
        name: 'Kuldeep Chauhan',
        role: 'Second Camera & Post Production Head',
        description:
          'Managed second camera operations and complete post-production workflow for all episodes.',
      },
    ],

    services: [
      'Documentary Cinematography',
      'Spiritual Location Filming',
      'Complete Post-Production',
    ],

    highlights: [
      'Complete Channel Partnership: All videos on The Vagabond Films YouTube channel are shot and edited by our team.',
      "Cultural Preservation: Documenting India's spiritual heritage with cinematic authenticity.",
      'Technical Excellence: 4K production with atmospheric sound design and color grading.',
    ],

    videos: [
      {
        title: 'VRINDAVAN- CINEMATIC FILM | Banke Bihari Temple | 2021 | 4K',
        videoId: 'fGZPdgu2ZJY',
        category: 'Documentary Film',
        slug: 'vrindavan-cinematic-film-banke-bihari-temple-2021-4k',
      },
      {
        title: 'Vrindavan Spiritual Journey - Part 2',
        videoId: 'Ox8Vvx8ENU0',
        category: 'Documentary Film',
        slug: 'vrindavan-spiritual-journey-part-2',
      },
      {
        title: 'Vrindavan Divine Experience - Part 3',
        videoId: 'ZN2Ktk-2At0',
        category: 'Documentary Film',
        slug: 'vrindavan-divine-experience-part-3',
      },
      {
        title: 'Vrindavan Sacred Moments - Part 4',
        videoId: 'DV1tXKLrKPM',
        category: 'Documentary Film',
        slug: 'vrindavan-sacred-moments-part-4',
      },
      {
        title: 'Vrindavan Devotional Film - Part 5',
        videoId: 'MoQCWKwzqxs',
        category: 'Documentary Film',
        slug: 'vrindavan-devotional-film-part-5',
      },
    ],

    // btsImages: [
    //   '/bts-vagabond-1.jpg',
    //   '/bts-vagabond-2.jpg',
    //   '/bts-vagabond-3.jpg',
    // ],
  },

  'travnat-films': {
    name: 'TRAVNAT FILMS',
    subtitle: 'Adventure & Nature Cinematography',
    description: 'Adventure travel and nature documentation',
    role: 'Cinematography (Production Shoot Only)',
    overview:
      "TND Films provides specialized cinematography services for TRAVNAT FILMS, focusing on adventure travel and nature-based storytelling. Our Director of Photography, Vipin Kumar Pal, leads all cinematographic work for their YouTube channel, capturing breathtaking adventures across India's diverse landscapes.",

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director of Photography',
        description:
          'Leads all cinematography for TRAVNAT FILMS with expertise in adventure and nature documentation.',
      },
    ],

    services: [
      'Adventure Cinematography',
      'Nature Documentation',
      'Extreme Location Filming',
    ],

    highlights: [
      "Channel Partnership: All videos on Travnat Films' YouTube Channel are shot by Vipin Kumar Pal as DOP.",
      'Adventure Expertise: Specialized in capturing extreme sports and alpine adventures.',
      'Technical Innovation: Drone cinematography and handheld techniques for dynamic adventure footage.',
    ],

    videos: [
      {
        title: 'Skiing in Munsiyari',
        videoId: '9xFB1qmpF3k',
        category: 'Adventure Film',
        slug: 'skiing-in-munsiyari',
      },
    ],

    btsImages: ['/bts-travnat-1.jpg', '/bts-travnat-2.jpg'],
  },

  'imi-international-management-institute': {
    name: 'IMI (International Management Institute)',
    subtitle: "Complete Video Production for India's Premier B-Schools",
    description: 'International Management Institute - All Campuses',
    role: 'Complete Video Production (Camera & Editing)',
    overview:
      "TND Films has been entrusted with handling the entire video production journey for IMI's digital presence across all three campuses (Delhi, Bhubaneswar & Kolkata). Through freelance producer Kuldeep Chauhan and in partnership with Ripul Aggarwal from AVR Events, we've created a consistent visual voice spanning student testimonials, event coverage, placement success stories, and institutional branding films. Every video reflects a deep understanding of academic storytelling and campus energy, optimized for YouTube, Instagram, and LinkedIn platforms.",

    team: [
      {
        name: 'Kuldeep Chauhan',
        role: 'Video Producer & Editor',
        description:
          'Complete ownership of content creation from pre-shoot coordination to final delivery, working end-to-end with minimal supervision while ensuring brand-aligned, high-quality content.',
      },
      {
        name: 'Ripul Aggarwal',
        role: 'Agency Partner (AVR Events)',
        description:
          'Leading event production and providing creative alignment for smooth workflow across all IMI campaigns.',
      },
    ],

    services: [
      'Cross-Campus Video Production',
      'Student & Alumni Testimonials',
      'Event Coverage & Documentation',
      'Institutional Branding Films',
      'Social Media Content Creation',
      'Podcast Production',
    ],

    highlights: [
      'Multi-Campus Consistency: Maintaining consistent visual tone and storytelling format across IMI Delhi, IMI Bhubaneswar, and IMI Kolkata.',
      'Complete Production Pipeline: Solo/multi-cam shooting, full editing, color correction, audio treatment, graphics integration, and platform optimization.',
      'Long-term Partnership: Ongoing freelance collaboration showcasing trust, reliability, and consistent high-quality delivery across multiple campaigns and student intakes.',
      'Diverse Content Portfolio: From campus festivals and convocation ceremonies to student testimonials and professional podcasts.',
    ],

    videos: [
      {
        title: 'Campus Life – IMI Bhubaneswar Kritva 2024',
        videoId: 'mgfNKKeKrYc',
        category: 'Event Video',
        slug: 'campus-life-imi-bhubaneswar-kritva-2024',
      },
      {
        title:
          "IMI Insights Podcast | Ep 4 - HR: A Catalyst in India's Orange Economy",
        videoId: 'nWRGCuiJMy8',
        category: 'Podcast Film',
        slug: 'imi-insights-podcast-ep-4-hr-catalyst-orange-economy',
      },
      {
        title: 'IMI Delhi | 41st Annual Convocation Ceremony Highlights',
        videoId: 'CwWf5C9PUJE',
        category: 'Event Documentation',
        slug: 'imi-delhi-41st-annual-convocation-ceremony-highlights',
      },
      {
        title: 'SIP Experience | Anjali Singh | PGDM',
        videoId: 'ybMAVHPuuZo',
        category: 'Student Testimonial',
        slug: 'sip-experience-anjali-singh-pgdm',
      },
      {
        title: 'WELCOME BATCH OF 2023-25',
        videoId: 'HI4nY13qkkA',
        category: 'Institutional Film',
        slug: 'welcome-batch-of-2023-25',
      },
      {
        title: 'National Alumni Meet 2023',
        videoId: 'VUh78cxA_04',
        category: 'Event Documentation',
        slug: 'national-alumni-meet-2023',
      },
      {
        title: 'IMI Additional Content',
        videoId: '3xMRzd0VN_E',
        category: 'Institutional Content',
        slug: 'imi-additional-content',
      },
    ],

    // btsImages: ['/bts-imi-1.jpg', '/bts-imi-2.jpg', '/bts-imi-3.jpg'],
  },

  'irma-anand': {
    name: 'IRMA',
    subtitle: 'Rural Management Institute Documentation',
    description: 'Institute of Rural Management Anand',
    role: 'Cinematography / On-Ground Video Production',
    overview:
      'TND Films maintains an ongoing collaboration with IRMA through freelance producer Kuldeep Chauhan, creating comprehensive video content that reflects the unique rural management identity. Our work spans events, testimonials, and institutional highlights across multiple academic cycles.',

    team: [
      {
        name: 'Kuldeep Chauhan',
        role: 'Freelance Video Producer',
        description:
          'Leads on-ground video execution independently, managing entire shoot process from setup to delivery.',
      },
      {
        name: 'Ayush (BrandHermit)',
        role: 'Creative Director',
        description:
          'Provides creative alignment and content strategy for all IRMA video requirements.',
      },
    ],

    services: [
      'Event Coverage & Documentation',
      'Student & Alumni Testimonials',
      'Social Media Content Creation',
    ],

    highlights: [
      'Ongoing Partnership: Continuous collaboration across multiple academic cycles and marketing campaigns.',
      'Diverse Content: From flagship events to intimate testimonial videos.',
      'Digital Optimization: Content tailored for Instagram, YouTube, and LinkedIn presence.',
    ],

    videos: [
      {
        title: 'IRMA – A Tribute to Shyam Benegal by IRMA Students',
        videoId: 'OVX7WipsO7o',
        category: 'Event Documentation',
        slug: 'irma-a-tribute-to-shyam-benegal-by-irma-students',
      },
    ],

    // btsImages: ['/bts-irma-1.jpg', '/bts-irma-2.jpg', '/bts-irma-3.jpg'],
  },

  'adani-foundation': {
    name: 'Adani Foundation',
    subtitle: 'CSR & Community Wellness Campaigns',
    description: 'Corporate social responsibility initiatives',
    role: 'Director of Photography (DOP)',
    overview:
      "TND Films partnered with Adani Foundation to create visually compelling campaigns promoting holistic well-being and community development. Our cinematographic approach focuses on capturing authentic moments that reflect the foundation's commitment to social transformation and wellness initiatives.",

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director of Photography',
        description:
          'Shaped the visual narrative for wellness campaigns, emphasizing authenticity and community connection.',
      },
    ],

    services: [
      'CSR Campaign Cinematography',
      'Community Documentation',
      'Wellness Initiative Films',
    ],

    highlights: [
      'Social Impact Focus: Campaigns promoting yoga, wellness, and community development.',
      'Authentic Approach: Natural lighting and real community settings for genuine storytelling.',
      'Cultural Sensitivity: Respectful documentation of spiritual and wellness practices.',
    ],

    videos: [
      {
        title: 'Iss Yoga Diwas par #IndiaRahegaFit | Dwarkadhish Temple',
        videoId: 'N2auTayZ978',
        category: 'CSR Campaign',
        slug: 'iss-yoga-diwas-par-indiarahegafit-dwarkadhish-temple',
      },
    ],

    // btsImages: ['/bts-adani-1.jpg', '/bts-adani-2.jpg'],
  },

  'jindal-stainless': {
    name: 'Jindal Stainless',
    subtitle: 'Corporate Identity & Industrial Documentation',
    description: 'Leading stainless steel manufacturer',
    role: 'Cinematography',
    overview:
      'TND Films created a powerful corporate identity film for Jindal Stainless, showcasing their industrial strength, technological innovation, and manufacturing excellence. This high-production-value project required coordinated team effort across ground cinematography and aerial documentation.',

    team: [
      {
        name: 'Vipin Kumar Pal',
        role: 'Director of Photography',
        description:
          'Led cinematography team, capturing industrial operations with cinematic precision and clarity.',
      },
      {
        name: 'Nitin Kumar Pal',
        role: 'Second DOP',
        description:
          'Handled supplementary coverage and multi-cam coordination in high-paced factory environment.',
      },
      {
        name: 'Kuldeep Chauhan',
        role: 'Aerial Cinematographer',
        description:
          'Provided drone shots and aerial perspectives showcasing the scale of operations.',
      },
    ],

    services: [
      'Corporate Identity Films',
      'Industrial Documentation',
      'Aerial Cinematography',
    ],

    highlights: [
      'Team Collaboration: Coordinated effort across three cinematographers for comprehensive coverage.',
      'Industrial Expertise: Specialized approach to manufacturing and heavy industry documentation.',
      'Technical Excellence: High-production-value cinematography aligned with corporate brand vision.',
    ],

    videos: [
      {
        title: 'Employee Value Proposition | Jindal Stainless',
        videoId: '_KWw7k4lptk',
        category: 'Corporate Film',
        slug: 'employee-value-proposition-jindal-stainless',
      },
    ],

    // btsImages: ['/bts-jindal-1.jpg', '/bts-jindal-2.jpg', '/bts-jindal-3.jpg'],
  },

  'infinix-india': {
    name: 'Infinix India',
    subtitle: 'Product & Lifestyle Video Campaigns',
    description: 'Smart technology brand',
    role: 'Second DOP & Video Editor',
    overview:
      "During Kuldeep Chauhan's full-time tenure at Infinix India in 2022, TND Films provided comprehensive in-house video production services. This included product films, launch videos, social media content, and lifestyle promotions, with Kuldeep managing both cinematography and post-production.",

    team: [
      {
        name: 'Kuldeep Chauhan',
        role: 'Second DOP & Lead Video Editor',
        description:
          'Dual role managing on-ground camera work and complete post-production for all brand campaigns.',
      },
    ],

    services: [
      'Product Film Production',
      'Social Media Content',
      'Brand Campaign Videos',
    ],

    highlights: [
      'In-House Production: Full-time collaboration ensuring brand consistency across all formats.',
      'Multi-Format Content: From YouTube features to in-store displays and social media.',
      'Fast-Paced Environment: Delivered high-energy, product-centric content on tight timelines.',
    ],

    videos: [
      {
        title: 'Shiksha Ka Ghar: Ek Chidiyaghar || A Day in College by Infinix',
        videoId: '4ZXiuOQn7bw',
        category: 'Lifestyle Campaign',
        slug: 'shiksha-ka-ghar-ek-chidiyaghar-a-day-in-college-by-infinix',
      },
      {
        title: 'Infinix Brand Campaign Video 1',
        videoId: 'NVGPApf1-xA',
        category: 'Brand Campaign',
        slug: 'infinix-brand-campaign-video-1',
      },
      {
        title: 'Infinix Brand Campaign Video 2',
        videoId: 'JMrJR72wkes',
        category: 'Brand Campaign',
        slug: 'infinix-brand-campaign-video-2',
      },
    ],

    // btsImages: ['/bts-infinix-1.jpg', '/bts-infinix-2.jpg'],
  },

  'music-videos': {
    name: 'Music Video Productions',
    subtitle: 'Artist Collaborations & Music Cinematography',
    description: 'Music video production services',
    role: 'Director of Photography (DOP)',
    overview:
      'TND Films has collaborated with various music artists to create visually captivating music videos that blend storytelling, performance, and cinematic style. Our Director of Photography, Nitin Kumar Pal, specializes in music video cinematography, bringing creative vision and technical excellence to enhance the musical experience.',

    team: [
      {
        name: 'Nitin Kumar Pal',
        role: 'Director of Photography',
        description:
          'Leads music video cinematography with expertise in performance capture, creative lighting, and visual storytelling that complements musical narratives.',
      },
    ],

    services: [
      'Music Video Cinematography',
      'Performance Documentation',
      'Creative Visual Storytelling',
    ],

    highlights: [
      'Diverse Genres: Experience across hip-hop, Punjabi, indie, and commercial music videos.',
      'Artist Collaboration: Close coordination with artists, directors, and choreographers for unified artistic vision.',
      'Technical Versatility: From intimate acoustic setups to high-energy performance pieces.',
    ],

    videos: [
      {
        title: 'Ameen | Muhfaad | AELAAN EP | Latest Rap 2020 | MAHARAJ',
        videoId: 'RTCcswAXtn0',
        category: 'Hip-Hop Music Video',
        slug: 'ameen-muhfaad-aelaan-ep-latest-rap-2020-maharaj',
      },
      {
        title: 'Music Production Vol. 2',
        videoId: 'o21H1tiTKOM',
        category: 'Professional Music Video',
        slug: 'music-production-vol-2',
      },
      {
        title: 'Music Video Production 3',
        videoId: 'CdBX0NTjlII',
        category: 'Professional Music Video',
        slug: 'music-video-production-3',
      },
      {
        title: 'Music Video Production 4',
        videoId: '9hIyf0FyYZ0',
        category: 'Professional Music Video',
        slug: 'music-video-production-4',
      },
      // {
      //   title:
      //     'Ignore - Official song | Indeep Bakshi | Ashnoor kaur | Ayush Talniya | Punjabi song 2021',
      //   videoId: 'T_bIUw7GdTU',
      //   category: 'Punjabi Music Video',
      //   slug: 'ignore-official-song-indeep-bakshi-ashnoor-kaur-ayush-talniya-punjabi-song-2021',
      // },
      // {
      //   title:
      //     'Prabh Gill: Mera Good Luck (Video Song) Desi Routz | Esshanya S Maheshwari |Latest Punjabi Song 2021',
      //   videoId: 'T_bIUw7GdTU',
      //   category: 'Punjabi Music Video',
      //   slug: 'prabh-gill-mera-good-luck-video-song-desi-routz-esshanya-s-maheshwari-latest-punjabi-song-2021',
      // },
      // {
      //   title:
      //     'Ik Din (Full Song) Rajat Sahani | Mitanshi Adhikari | Akshay Upadhayay | Latest Punjabi Songs',
      //   videoId: 'T_bIUw7GdTU',
      //   category: 'Punjabi Music Video',
      //   slug: 'ik-din-full-song-rajat-sahani-mitanshi-adhikari-akshay-upadhayay-latest-punjabi-songs',
      // },
      // {
      //   title: 'Music Video Project',
      //   videoId: 'RTCcswAXtn0',
      //   category: 'Professional Music Video',
      //   slug: 'music-video-project',
      // },
      {
        title: 'Music Production Vol. 2',
        videoId: 'o21H1tiTKOM',
        category: 'Professional Music Video',
        slug: 'music-production-vol-2',
      },
    ],

    // btsImages: ['/bts-music-1.jpg', '/bts-music-2.jpg', '/bts-music-3.jpg'],
  },
};

export default function ClientPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const client = CLIENT_DATA[params.slug];

  if (!client) {
    return (
      <main>
        <Navbar />
        <div className='pt-16 min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-light text-gray-900 mb-4'>
              Client Not Found
            </h1>
            <button
              onClick={() => router.push('/portfolio')}
              className='text-red-500 hover:text-red-600 transition-colors duration-300'
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6 lg:px-12 py-8'>
          {/* Back Button */}
          <motion.button
            onClick={() => router.push('/portfolio')}
            className='flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-300 mb-6'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ArrowLeft size={16} />
            <span className='text-sm'>Back to Portfolio</span>
          </motion.button>

          {/* Client Header */}
          <motion.div
            className='mb-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-red-500 rounded flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>📱</span>
              </div>
              <div>
                <h1 className='text-2xl lg:text-3xl font-medium text-gray-900 mb-1 leading-tight'>
                  {client.name} – {client.subtitle}
                </h1>
                <p className='text-sm text-gray-500 uppercase tracking-wide'>
                  {client.description}
                </p>
              </div>
            </div>

            <div className='bg-gray-50 p-4 rounded-lg mb-6'>
              <div className='flex items-center gap-2 mb-2'>
                <Users size={16} className='text-gray-600' />
                <span className='text-sm font-medium text-gray-900 uppercase tracking-wide'>
                  Role
                </span>
              </div>
              <p className='text-sm text-gray-700'>{client.role}</p>
            </div>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className='text-xl font-medium text-gray-900 mb-4'>
              🎥 Project Overview
            </h2>
            <p className='text-sm text-gray-700 leading-relaxed mb-6'>
              {client.overview}
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className='text-xl font-medium text-gray-900 mb-6'>
              👨‍💼 Core Leadership & Roles
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {client.team.map((member, index) => (
                <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                  <h3 className='font-medium text-gray-900 mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-sm text-red-500 mb-3'>{member.role}</p>
                  <p className='text-xs text-gray-600 leading-relaxed'>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What We Delivered */}
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className='text-xl font-medium text-gray-900 mb-4'>
              🛠️ What We Delivered
            </h2>
            <div className='space-y-3'>
              {client.services.map((service, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-sm text-gray-700'>{service}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Highlights */}
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className='text-xl font-medium text-gray-900 mb-4'>
              🌟 Project Highlights
            </h2>
            <div className='space-y-4'>
              {client.highlights.map((highlight, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-sm text-gray-700'>{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Videos Section */}
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className='flex items-center gap-2 mb-6'>
              <Video size={20} className='text-gray-600' />
              <h2 className='text-xl font-medium text-gray-900'>
                🔗 Watch Our Work
              </h2>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {client.videos.map((video, index) => (
                <motion.div
                  key={index}
                  className='group'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='bg-white border-0 hover:shadow-lg transition-all duration-300 overflow-hidden'>
                    <div className='aspect-[4/3] relative overflow-hidden'>
                      {video.videoId.startsWith('LOCAL:') ? (
                        <div className='w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center'>
                          <div className='text-center text-white'>
                            <Play
                              size={32}
                              className='mx-auto text-white/80 mb-2'
                              fill='white'
                            />
                            <p className='text-xs text-gray-300'>Local Video</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                          alt={video.title}
                          className='w-full h-full object-cover'
                          onError={(e) => {
                            e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                          }}
                        />
                      )}

                      <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex gap-3'>
                          <button
                            onClick={() => {
                              setSelectedVideo(video);
                              setIsVideoPlaying(true);
                            }}
                            className='w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300'
                          >
                            <Play
                              size={20}
                              className='text-white ml-0.5'
                              fill='white'
                            />
                          </button>
                          {video.slug && (
                            <Link href={`/portfolio/${video.slug}`}>
                              <button className='w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300'>
                                <Eye size={20} className='text-gray-800' />
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>

                      <div className='absolute top-4 right-4 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center'>
                        <Play
                          size={16}
                          className='text-white ml-0.5'
                          fill='white'
                        />
                      </div>
                    </div>

                    <div className='p-4'>
                      <div className='flex justify-between items-start mb-2'>
                        <span className='text-gray-600 text-xs uppercase tracking-wider bg-gray-100 px-2 py-1'>
                          {video.category}
                        </span>
                        <span className='text-xs text-gray-500'>
                          {index + 1}
                        </span>
                      </div>

                      <h3 className='text-base font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 leading-snug'>
                        {video.title}
                      </h3>

                      {/* {video.slug && (
                        <Link href={`/portfolio/${video.slug}`}>
                          <div className='text-xs text-red-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-1 mt-2'>
                            <Eye size={12} />
                            <span>View Details</span>
                          </div>
                        </Link>
                      )} */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BTS Photos Section - Only show for clients with actual BTS images */}
          {client.btsImages && client.btsImages.length > 0 && (
            <motion.div
              className='mb-12'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className='text-xl font-medium text-gray-900 mb-6'>
                📸 Behind The Scenes
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {client.btsImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className='aspect-square bg-gray-200 rounded-lg overflow-hidden'
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={image}
                      alt={`Behind the scenes ${index + 1}`}
                      className='w-full h-full object-cover'
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className='w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center'>
                      <span className='text-gray-600 text-sm'>
                        BTS {index + 1}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            className='text-center bg-gray-50 p-8 rounded-lg'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className='text-xl font-medium text-gray-900 mb-4'>
              💡 Want To Create Impactful Stories?
            </h2>
            <p className='text-sm text-gray-600 mb-6'>
              Let's connect and bring your vision to life – just like we did for{' '}
              {client.name}.
            </p>
            <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-medium transition-colors duration-300'>
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && selectedVideo && (
        <motion.div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            className='relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className='absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300'
            >
              ×
            </button>

            {selectedVideo.videoId.startsWith('LOCAL:') ? (
              <video className='w-full h-full' controls autoPlay>
                <source
                  src={selectedVideo.videoId.replace('LOCAL:', '')}
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                className='w-full h-full'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            )}
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
