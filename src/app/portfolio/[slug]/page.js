'use client';

import { motion } from 'framer-motion';
import {
  Play,
  Calendar,
  User,
  Camera,
  ArrowLeft,
  ExternalLink,
  Building,
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Import the same video data from the portfolio component
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
    subtitle: 'Podcast Film',
    scope: 'End-to-End Production (Pre to Post)',
    featuring: 'Rajiv Makhni',
    productionHouse: 'TND Films',
    fullDescription:
      "TND Films proudly led the full-cycle production of the engaging tech talk show \"Attuned With AT\" featuring India's leading tech voice, Rajiv Makhni. From the initial ideation to the final export, our team managed the entire process with precision, creativity, and technical finesse.\n\nPre-Production: We began with in-depth concept development in close collaboration with the host, Arijeet Tiwari. Our team handled scripting, shoot planning, location scouting, technical setup, and scheduling to create a seamless foundation for production.\n\nProduction: Our cinematography crew ensured a clean, multi-angle setup with cinematic lighting and crisp audio capturing. The studio environment was tailored to reflect the show's modern, tech-savvy tone, while live direction helped maintain energy and clarity throughout the shoot.\n\nPost-Production: The project was brought to life in post, with meticulous video editing, smooth transitions, dynamic B-roll integration, color grading, and professional sound design. We added custom graphics, titles, and lower thirds to enhance storytelling and brand identity.\n\nTND Films delivered a polished, engaging episode aligned with the client's vision and viewer expectations.",
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
    subtitle: 'Adventure Film',
    scope: 'Cinematography & Post-Production',
    fullDescription:
      "TND Films had the exciting opportunity to collaborate with Jumpin Heights, India's leading adventure sports destination, on this thrilling visual journey into the heart of raw nature and extreme adventure.\n\nPre-Shoot Planning: Working closely with the Jumpin Heights team, we mapped out a visually engaging shoot plan to capture the adrenaline-fueled experience of trekking, bungee jumping, and nature exploration. Our crew prepped gear logistics, location camera angles, drone coverage strategies, and timing to maximize natural lighting and impact.\n\nOn-Site Filming: Our cinematography team brought the story to life on the ground and in the air. Using professional-grade cameras, drones, and stabilizers, we captured breathtaking wide shots, detailed close-ups, and immersive point-of-view moments. The dramatic landscapes, extreme stunts, and serene wild elements were all filmed with a cinematic eye and real-time adaptability.\n\nPost-Production: Back in the studio, our editing team stitched together the visual narrative—balancing intense action with quiet reflection. We color graded the footage to enhance natural tones and added rich soundscapes for an immersive viewer experience.",
    tags: [
      'Adventure',
      'Extreme Sports',
      'Bungee Jumping',
      'Nature',
      'Cinematography',
    ],
  },
  {
    title: 'Wilderness Adventure – Epic Journey',
    videoId: 'FCIu2yfWHtc',
    category: 'adventure',
    description:
      'Adventure Film - Epic wilderness journey showcasing extreme outdoor experiences',
    year: '2024',
    client: 'Jumpin Heights',
    featured: false,
    subtitle: 'Adventure Film',
    scope: 'Cinematography & Post-Production',
    fullDescription:
      'An epic wilderness adventure capturing the raw beauty and extreme challenges of outdoor exploration. This film showcases the untamed landscapes and adrenaline-pumping activities that define the adventure experience.',
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
    subtitle: 'Adventure Film',
    scope: 'Cinematography & Post-Production',
    fullDescription:
      'A thrilling mountain adventure film that captures the essence of extreme outdoor challenges in pristine wilderness settings. From rugged terrain to breathtaking vistas, this film showcases the spirit of adventure.',
    tags: [
      'Adventure',
      'Mountain',
      'Extreme Sports',
      'Nature',
      'Cinematography',
    ],
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
  //   subtitle: 'Brand Campaign Film',
  //   scope:
  //     'Story Development • Pre-Production • Cinematography • Post-Production',
  //   fullDescription:
  //     "For the launch of itel's Super Guru 4G, TND Films crafted a visual story that celebrated the power of entertainment in the palm of your hand—even with a feature phone.\n\nPre-Production: We developed a concept that wasn't just about specs—but about emotion. Our narrative showcased how even a simple device can become a gateway to entertainment, connection, and joy for everyday users. We scripted the storyline, visualized scenes, locked locations, cast talent, and scheduled the shoot—all while ensuring the brand voice remained loud and clear.\n\nProduction: Shot across vibrant everyday settings, we brought realism and energy to each frame—capturing family interactions, joyful reactions, and moments where the Super Guru 4G transformed boring routines into entertainment-packed experiences. We used dynamic camerawork, natural lighting, and subtle direction to keep it authentic and engaging.\n\nPost-Production: Editing was fast-paced and punchy—mirroring the phone's promise of quick, smooth 4G access. We enhanced the visuals with color grading that emphasized warmth and vibrancy. Sound design added life with cheerful music and real-world ambiance.",
  //   tags: [
  //     'Brand Campaign',
  //     'itel',
  //     '4G Technology',
  //     'Entertainment',
  //     'Feature Phone',
  //   ],
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
    subtitle: 'Product Film',
    scope: 'Pre‑Production • Studio Shoot • Post‑Production',
    fullDescription:
      "TND Films partnered with itel India to bring the itel Pad One to life through a sleek & informative product video, shot entirely in our in‑house studio.\n\nPre‑Production: Creative Vision & Storyboard - We started with a clear vision—demonstrate how the Pad One empowers users through features like speed, versatility, and style. Studio Planning - Our team designed the shoot environment, selecting studio backdrops, lighting setups, and camera angles to highlight the Pad One's sleek build, port configurations, and UI interface.\n\nStudio Shoot: Product Cinematography - We captured the Pad One from all angles—dramatic rotations, UI close‑ups, and real‑use scenarios like browsing, gaming, and multitasking. Lighting Precision - Controlled studio lighting brought out the device's metallic finish, reflective screen, and design details.\n\nPost‑Production: Video editing focused on clean, fast-paced cuts to maintain viewer attention and clearly communicate each feature's benefit. Color grading delivered a crisp, modern aesthetic. Sound design and motion graphics reinforced feature highlights like AI-powered processor, battery life, and display specs.",
    tags: ['Product Video', 'itel', 'Tablet', 'Studio Shoot', 'Technology'],
  },
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
    subtitle: 'Documentary AdFilm',
    scope: 'Production & Shoot Execution',
    dop: 'Vipin Kumar Pal',
    productionLead: 'Nitin Kumar Pal',
    fullDescription:
      "TND Films collaborated with Free Fire INDIA to create a celebratory documentary film honoring the 7-year gaming milestone of @UnGraduateGamer. This project captured the fast-paced, high-stakes world of competitive gaming through cinematic storytelling that reflects the passion driving India's gaming community.\n\nFrom lighting design to framing and motion shots, every frame was crafted to reflect the fast-paced, high-stakes world of competitive gaming. The duo executed smooth camera movements, cinematic angles, and rich lighting setups that elevated the narrative and brought visual depth to the story.\n\nThis project stands as a tribute to India's gaming community and the passion that drives creators like @UnGraduateGamer—with every shot designed to inspire and energize.\n\nTeam Credits:\nVipin Kumar Pal served as Director of Photography (DOP), leading the visual storytelling of the film—handling the primary camera, shot composition, cinematography, and overall visual tone. His expertise ensured every frame was captured with cinematic precision and artistic depth.\n\nNitin Kumar Pal managed the production lighting setup and operated the second camera unit, playing a vital role in maintaining consistency across multi-cam shots and ensuring optimal lighting conditions throughout the shoot. His support in technical execution and production management helped streamline the entire shooting process.\n\nTogether, they executed the full production on-ground—managing both creative and technical responsibilities to deliver a high-quality visual output that celebrates gaming excellence and community spirit.",
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
    title: 'VRINDAVAN- CINEMATIC FILM | Banke Bihari Temple | 2021 | 4K',
    videoId: 'fGZPdgu2ZJY',
    category: 'documentary',
    description:
      "Documentary Film - Cinematic exploration of Banke Bihari Temple's divine atmosphere in Vrindavan",
    year: '2021',
    client: 'The Vagabond Films',
    featured: true,
    subtitle: 'Documentary Film',
    role: 'Pre-Production | Cinematography | Post-Production',
    dop: 'Nitin Kumar Pal',
    postProductionHead: 'Kuldeep Chauhan',
    productionDuration: 'Multiple Documentary Episodes Across Varied Locations',
    fullDescription:
      "This documentary-style cinematic film explores the divine atmosphere of Banke Bihari Temple in Vrindavan. The project beautifully captures the spiritual energy, timeless rituals, and vibrant devotion that make the temple a sacred destination.\n\nOur team handled the entire production shoot on location, using cinematic techniques to showcase Vrindavan's essence—golden morning light, temple details, and candid moments of devotion.\n\nIn post-production, we shaped the footage into a visually rich narrative with rhythmic editing, atmospheric sound design, and color grading that honored the soulful tone of the subject.\n\n📽️ All videos on The Vagabond Films YouTube channel are shot and edited by our team.\n\nTeam Credits:\n🎥 Nitin Kumar Pal – Director of Photography & Production Head\n🎬 Kuldeep Chauhan – Second Camera & Post Production Head\n\nExplore the channel to discover more of our documentary films showcasing India's spiritual and cultural heritage.",
    details: [
      { label: 'Location', value: 'Vrindavan, India' },
      { label: 'Resolution', value: '4K' },
      { label: 'Year', value: '2021' },
      { label: 'Temple', value: 'Banke Bihari Temple' },
      {
        label: 'Production Duration',
        value: 'Multiple Documentary Episodes Across Varied Locations',
      },
    ],
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
    title: 'Skiing in Munsiyari',
    videoId: '9xFB1qmpF3k',
    category: 'adventure',
    description:
      'Documentary Adventure Film - Breathtaking skiing through snow-clad slopes of Munsiyari, Uttarakhand',
    year: '2024',
    client: 'TRAVNAT FILMS',
    featured: false,
    subtitle: 'Documentary Adventure Film',
    role: 'Cinematography (Production Shoot Only)',
    dop: 'Vipin Kumar Pal',
    fullDescription:
      "This breathtaking documentary adventure film captures the thrill of skiing through the snow-clad slopes of Munsiyari, Uttarakhand. The shoot was led by Vipin Kumar Pal as Director of Photography, who brought the dynamic energy of the sport and the raw beauty of the Himalayas to the screen through immersive and cinematic visuals.\n\nFrom drone shots slicing through mountain air to close-up action on skis, every frame reflects the adrenaline and atmosphere of alpine adventure.\n\nAll videos on Travnat Films' YouTube Channel are shot by Vipin Kumar Pal as DOP. Explore the channel for more nature and adventure-based storytelling.",
    details: [
      { label: 'Location', value: 'Munsiyari, Uttarakhand' },
      { label: 'Sport', value: 'Skiing' },
      { label: 'Terrain', value: 'Himalayan Slopes' },
      { label: 'Equipment', value: 'Drones, Action Cameras' },
    ],
    tags: [
      'Adventure',
      'Skiing',
      'Himalayas',
      'Munsiyari',
      'Alpine Sports',
      'Drone Cinematography',
    ],
  },
  {
    title:
      "Mountain Dew Real Heroes presents The Fall - India's First Frozen Waterfall Ascent",
    videoId: 'T_bIUw7GdTU', // Replace with actual video ID
    category: 'documentary',
    description:
      "Documentary Adventure Film - India's first adventure documentary shot at a frozen waterfall in extreme Himalayan conditions",
    year: '2024',
    client: 'Mountain Dew India',
    featured: true,
    subtitle: 'Documentary Adventure Film',
    role: 'Director of Photography (Production Shoot Only)',
    dop: 'Vipin Kumar Pal',
    fullDescription:
      '"The Fall" marks a historic milestone as India\'s first adventure documentary film shot at a frozen waterfall—a bold and physically demanding ascent captured in the extreme conditions of the Himalayas.\n\nLed by Vipin Kumar Pal as Director of Photography, the shoot pushed both gear and crew to the limit. From high-altitude drone shots to intense handheld sequences across icy cliffs, every frame reflects the spirit of courage, resilience, and raw adventure.\n\nThis groundbreaking project was executed with precision, focus, and a deep respect for the terrain and story being told.',
    details: [
      { label: 'Location', value: 'Himalayas, India' },
      { label: 'Milestone', value: "India's First Frozen Waterfall Ascent" },
      { label: 'Equipment', value: 'High-altitude drones, Handheld cameras' },
      { label: 'Conditions', value: 'Extreme cold, High altitude' },
    ],
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
    title: 'IMI Bhubaneswar – Campus Life Video Production',
    videoId: 'T_bIUw7GdTU', // Replace with actual video ID
    category: 'brands',
    description:
      'Institutional Brand Film - Showcasing vibrant student life and academic culture of premier B-School',
    year: '2024',
    client: 'International Management Institute (IMI) Bhubaneswar',
    featured: false,
    subtitle: 'Institutional Brand Film for Digital Platforms',
    scope: 'Pre-Production | Camera | Editing',
    role: 'Complete Freelance Production',
    producer: 'Kuldeep Chauhan',
    agency: 'Ripul Aggarwal – AVR Events',
    fullDescription:
      "This video project for IMI Bhubaneswar was aimed at showcasing the vibrant student life, academic culture, and infrastructure of one of India's top management institutes. With a focus on authenticity and engagement, the film gives prospective students and stakeholders a closer look into the dynamic IMI campus environment.\n\nHandled entirely as a freelance production by Kuldeep Chauhan, the video highlights his ability to translate a campus' identity into a compelling digital narrative. The project was executed in close coordination with Ripul Aggarwal from AVR Events, ensuring a streamlined production and timely delivery.\n\n🎥 Responsibilities & Workflow:\n● Pre-Production: Initial planning, storyboarding, and coordination with IMI's campus staff and students to design the shoot around real-time activities and authentic student interactions.\n● Cinematography: Kuldeep led the entire on-ground camera operation, covering classrooms, dorms, activity areas, and candid student interactions to present a well-rounded view of the campus.\n● Post-Production: Complete editing, color grading, music sync, motion graphics integration, and export formatting suitable for YouTube and other social media platforms.\n\nThis film reflects the academic vibrancy and holistic culture that IMI offers—and stands as a successful collaboration between creative execution and institutional vision.",
    tags: [
      'Education',
      'Campus Life',
      'B-School',
      'Institutional',
      'Brand Film',
      'Digital Marketing',
    ],
  },
  {
    title: 'IRMA – A Tribute to Shyam Benegal by IRMA Students',
    videoId: 'OVX7WipsO7o',
    category: 'events',
    description:
      'Events | Testimonials | Digital Content - Visual storytelling for leading rural management institute',
    year: '2024',
    client: 'IRMA - Institute of Rural Management Anand',
    featured: false,
    subtitle: 'Events | Testimonials | Digital Content',
    scope: 'Cinematography / On-Ground Video Production',
    role: 'Freelance Video Production',
    producer: 'Kuldeep Chauhan',
    agency: 'Ayush – BrandHermit',
    fullDescription:
      "Kuldeep Chauhan has been actively involved in freelance video production for IRMA, one of India's most prestigious institutions in the field of rural management. With a focus on authenticity and institutional ethos, the projects cover a wide array of campus activities—from flagship events and academic programs to student testimonials and brand films.\n\nThis ongoing collaboration is executed under the creative direction and coordination of Ayush (BrandHermit), who has entrusted Kuldeep with handling all of IRMA's video requirements across platforms.\n\n🎥 Scope of Work:\n● Event Coverage: Capturing conferences, convocations, cultural fests, and institutional celebrations with a mix of cinematic and documentary-style shooting.\n● Testimonial Videos: Filming and framing real, unscripted stories from students, faculty, and alumni, ensuring both emotional impact and narrative clarity.\n● Social Media Films: Shooting crisp and visually appealing video snippets tailored for IRMA's Instagram, YouTube, and LinkedIn presence.\n● Institutional Highlights: Visual storytelling that reflects the unique rural management identity of IRMA through real-time campus visuals, candid interactions, and informative B-roll.\n\nWhile Ayush (BrandHermit) provided creative alignment and content strategy, Kuldeep Chauhan led the on-ground video execution, managing the entire shoot process independently—from gear setup to final footage delivery.",
    tags: [
      'Education',
      'Rural Management',
      'Events',
      'Testimonials',
      'Institutional',
      'Documentary',
    ],
  },
  {
    title: '#HeroStories from Vietnam | Tata Super Ace | Cargo',
    videoId: 'T_bIUw7GdTU', // Replace with actual video ID
    category: 'brands',
    description:
      'Global Customer Stories Campaign - Powerful brand film showcasing real-world impact of Tata vehicles',
    year: '2024',
    client: 'Tata Motors',
    featured: true,
    subtitle: 'Global Customer Stories Campaign',
    scope: 'Director of Photography (DOP)',
    dop: 'Vipin Kumar Pal',
    fullDescription:
      "This powerful brand film was part of a global storytelling campaign by Tata Motors, aimed at showcasing the real-world impact of their vehicles through the voices of customers across different geographies. From rugged terrains to city landscapes, the film highlights how Tata Motors products enable mobility, progress, and reliability in people's lives.\n\nAs the Director of Photography, Vipin Kumar Pal led the visual narrative for this extensive campaign. His responsibility was to capture authentic customer journeys in diverse environments—ranging from rural routes to industrial hubs—each reflecting unique stories of resilience, innovation, and trust in Tata Motors.\n\nThe shoot demanded high adaptability, technical precision, and a human-centric approach to cinematography. Vipin's expertise in framing real people in real settings allowed the stories to unfold naturally, while still maintaining a polished and brand-aligned visual aesthetic.\n\nFrom handheld run-and-gun setups to carefully orchestrated cinematic sequences, the camera work served as the emotional bridge between the viewer and the featured individuals—drivers, fleet owners, business operators—who rely daily on Tata vehicles to drive their dreams forward.\n\nThe result is a visually compelling film that not only celebrates the legacy of Tata Motors but also amplifies the voice of its global customer base with authenticity and heart.",
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
    title: 'Iss Yoga Diwas par #IndiaRahegaFit | Dwarkadhish Temple',
    videoId: 'T_bIUw7GdTU', // Replace with actual video ID
    category: 'brands',
    description:
      'International Yoga Day Campaign - Visually uplifting film celebrating transformative power of yoga',
    year: '2024',
    client: 'Adani Foundation',
    featured: false,
    subtitle: 'International Yoga Day Campaign',
    scope: 'Director of Photography (DOP)',
    dop: 'Vipin Kumar Pal',
    fullDescription:
      "This visually uplifting film was created to celebrate International Yoga Day, commissioned by the Adani Foundation as a tribute to the transformative power of yoga across communities. The campaign aimed to highlight how yoga is not just a practice but a way of life that connects the body, mind, and spirit—while also reflecting Adani Foundation's commitment to promoting holistic well-being among individuals.\n\nAs the Director of Photography, Vipin Kumar Pal was responsible for shaping the visual tone of the film, capturing serene and powerful moments of yoga practice in diverse settings—from sunlit outdoor spaces to tranquil community centers. His cinematography focused on fluid motion, natural light, and graceful framing to evoke calmness, strength, and inner balance—the core essence of yoga.\n\nThe challenge was to present yoga not just as a physical routine, but as a cultural and spiritual movement accessible to all ages and backgrounds. Vipin approached this with a meditative lens—balancing dynamic movements with still compositions, aerial perspectives with intimate close-ups, all while honoring the discipline and serenity of the practice.\n\nThis campaign successfully blends purpose with visual poetry, resonating with audiences nationwide and reinforcing the message that yoga is a universal journey of self-awareness and harmony.",
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
    title: 'Employee Value Proposition | Jindal Stainless',
    videoId: '_KWw7k4lptk',
    category: 'brands',
    description:
      "Corporate Identity Film - Dynamic showcase of India's leading stainless steel manufacturer",
    year: '2024',
    client: 'Jindal Stainless',
    featured: false,
    subtitle: 'Corporate Identity Film',
    scope: 'Cinematography',
    dop: 'Vipin Kumar Pal',
    secondDop: 'Nitin Kumar Pal',
    aerialCinematography: 'Kuldeep Chauhan',
    fullDescription:
      "This dynamic and high-impact corporate film for Jindal Stainless highlights the brand's strength, scale, and legacy as one of India's leading stainless steel manufacturers. The film showcases the vastness of Jindal's manufacturing units, technological innovation, skilled workforce, and its contribution to various industries—delivered through a powerful visual narrative.\n\nAt the heart of the film's visual execution is the cinematography team led by Vipin Kumar Pal, who served as the Director of Photography (DOP). Vipin was instrumental in shaping the core visual tone—capturing the enormity of the industrial setup, intricate detailing of machinery, and the disciplined rhythm of the plant's workflow. His cinematographic approach brought clarity, energy, and cinematic polish to every frame.\n\nNitin Kumar Pal contributed as the Second DOP, focusing on supplementary ground coverage, industrial close-ups, and coordinated multi-cam setups to ensure seamless production in the high-paced factory environment.\n\nAll aerial cinematography—which plays a key role in emphasizing the scale and infrastructure—was handled by Kuldeep Chauhan, who provided sweeping drone shots and tracking movements to enhance the visual narrative and give the audience a bird's-eye view of Jindal's expansive operations.\n\nThis film stands as a powerful visual representation of Jindal Stainless' strength, innovation, and national pride—brought to life through well-crafted, high-production-value cinematography that aligns with the brand's legacy and vision for the future.",
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
    title:
      "How One Man 'Bridged' the Dreams of Millions! - Ingenious Indians EP 1",
    videoId: 'ea2oVP1U4Fw',
    category: 'documentary',
    description:
      'Stories of Change Across India - Impactful visual campaign spotlighting grassroots transformation stories',
    year: '2024',
    client: 'The Better India',
    featured: true,
    subtitle: 'Documentary Film - Stories of Change Across India',
    scope: 'Director of Photography (DOP)',
    dop: 'Vipin Kumar Pal',
    fullDescription:
      "This impactful visual campaign for The Better India was designed to spotlight powerful grassroots stories from across the nation—narratives that often go unheard, yet drive real social change. The video series showcases individuals and communities who are transforming lives through innovation, sustainability, education, women empowerment, and environmental action.\n\nVipin Kumar Pal, as the Director of Photography, played a crucial role in shaping the visual identity of this ambitious, pan-India project. From the narrow lanes of remote villages to the vibrant pulse of Indian cities, his lens traveled far and wide to capture the essence of positive change in its most authentic form.\n\nEach story posed a unique challenge in terms of location, lighting, and cultural context. Vipin's approach was deeply rooted in naturalistic cinematography—using available light, real environments, and handheld techniques to keep the narratives grounded and emotionally resonant. His visuals complement the editorial voice of The Better India, bringing warmth, dignity, and cinematic depth to each frame.\n\nThe campaign stands as a celebration of everyday heroes—social entrepreneurs, change-makers, and community leaders—whose work reflects the heartbeat of a better tomorrow. Through careful framing, movement, and visual storytelling, Vipin helped elevate these stories beyond documentation, into a compelling visual tribute to India's spirit of transformation.",
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
    title: 'Ameen | Muhfaad | AELAAN EP | Latest Rap 2020 | MAHARAJ',
    videoId: 'T_bIUw7GdTU', // Replace with actual video ID
    category: 'music',
    description:
      'Hip-Hop Music Video - Visually captivating music video blending performance and cinematic storytelling',
    year: '2020',
    client: 'Muhfaad',
    featured: false,
    subtitle: 'Hip-Hop Music Video',
    scope: 'Director of Photography (DOP)',
    dop: 'Nitin Kumar Pal',
    fullDescription:
      "This visually dynamic hip-hop music video for Muhfaad's \"Ameen\" from the AELAAN EP showcases the evolving language of Indian indie music, where storytelling, performance, and style converge through cinematic visuals. The project reflects TND Films' expertise in music video production, creating immersive content that resonates with contemporary rap culture.\n\nNitin Kumar Pal served as Director of Photography, crafting expressive lighting setups, dynamic camera movements, and detailed shot compositions that elevate the storytelling and enhance the emotional beats of the music. His cinematography approach blended moody narrative lighting to reflect the song's intensity while maintaining visual tempo aligned with beats and rhythm.\n\nThe production involved creative collaboration with the artist, director, and creative team to ensure the visuals synced with the overall artistic vision. From performance setups to story-driven scenes, the cinematography adapted seamlessly to deliver both high production value and authentic artistic expression that connects with the target audience.",
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
    title: 'Shiksha Ka Ghar: Ek Chidiyaghar || A Day in College by Infinix',
    videoId: 'T_bIUw7GdTU', // Replace with actual video ID
    category: 'brands',
    description:
      'Lifestyle Campaign - In-house brand content showcasing college life and tech integration',
    year: '2022',
    client: 'Infinix India',
    featured: false,
    subtitle: 'Product & Lifestyle Video Campaign',
    scope: 'Second DOP & Video Editor',
    producer: 'Kuldeep Chauhan',
    fullDescription:
      "This engaging lifestyle campaign for Infinix India was produced during Kuldeep Chauhan's full-time tenure with the brand in 2022. The project exemplifies the fast-paced, high-energy content strategy that Infinix employed to connect with their digital-first, young audience.\n\nKuldeep played a dual role as Second Director of Photography and Lead Video Editor, managing both on-ground multi-cam shoots and complete post-production workflow. The video featured stylized indoor lighting setups and collaborative shooting approaches under the direction of Infinix's core brand marketing team.\n\nAs Video Editor, Kuldeep assembled high-energy, product-centric edits that maintained brand consistency across all digital formats—whether for YouTube, social platforms, or in-store displays. His approach ensured seamless blend of performance, graphics, and audio cues, all tailored to resonate with Infinix's target demographic.\n\nThe project stands as an example of TND Films' ability to deliver commercially effective content within tight brand timelines while maintaining visual engagement and technical excellence.",
    tags: [
      'Lifestyle',
      'Brand Campaign',
      'College',
      'Technology',
      'Social Media',
      'Product Integration',
    ],
  },
  {
    title: '25 Years of Partnership | Gates Foundation',
    videoId: 'LOCAL:/GATES%20FOUNDATION.mp4',
    category: 'brands',
    description: 'Strategic partnership celebration film',
    year: '2024',
    client: 'Gates Foundation',
    featured: true,
  },
  // {
  //   title: 'BMW Films',
  //   videoId: 'wTjB4bLzHKo',
  //   category: 'brands',
  //   description: 'Premium motorcycle brand campaign',
  //   year: '2024',
  //   client: 'BMW',
  //   featured: true,
  // },
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
  
  // IMI (International Management Institute) Videos
  {
    title: 'Campus Life – IMI Bhubaneswar Kritva 2024',
    videoId: 'T_bIUw7GdTU',
    category: 'documentary',
    description: 'Event Video - Campus festival documentation showcasing vibrant student culture and academic excellence',
    year: '2024',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Event Video',
    scope: 'Complete Video Production (Camera & Editing)',
    fullDescription:
      "TND Films captured the essence of IMI Bhubaneswar's annual cultural festival Kritva 2024, showcasing the vibrant student culture, academic excellence, and campus energy. Through freelance producer Kuldeep Chauhan's complete production approach, we documented the festival's key moments, student performances, and institutional highlights, creating authentic content that reflects the dynamic spirit of one of India's premier management institutes.",
    tags: ['Campus Life', 'Event', 'Student Culture', 'Academic Excellence', 'Festival'],
  },
  {
    title: 'IMI Insights Podcast | Ep 4 - HR: A Catalyst in India\'s Orange Economy',
    videoId: 'wTjB4bLzHKo',
    category: 'podcast',
    description: 'Podcast Film - Professional academic discussion on HR and economic development',
    year: '2024',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Podcast Film',
    scope: 'Complete Production (Pre to Post)',
    fullDescription:
      "Professional podcast production featuring academic discourse on Human Resources as a catalyst in India's Orange Economy. Our team handled the complete production pipeline from setup to final delivery, ensuring crisp audio quality, professional cinematography, and engaging visual elements that enhance the educational content for IMI's digital platforms.",
    tags: ['Podcast', 'HR', 'Economy', 'Academic Discussion', 'Professional Development'],
  },
  {
    title: 'IMI Delhi | 41st Annual Convocation Ceremony Highlights',
    videoId: 'PmX_y3ApaDs',
    category: 'documentary',
    description: 'Event Documentation - Annual convocation ceremony highlights showcasing academic achievements',
    year: '2024',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Event Documentation',
    scope: 'Ceremonial Coverage & Post-Production',
    fullDescription:
      "Comprehensive documentation of IMI Delhi's 41st Annual Convocation Ceremony, capturing the milestone moments of academic achievement and institutional pride. Our production team ensured every significant moment was preserved with dignity and professionalism, from graduate recognition to keynote speeches, creating lasting memories for students, faculty, and families.",
    tags: ['Convocation', 'Academic Achievement', 'Graduation', 'Ceremony', 'Milestone'],
  },
  {
    title: 'SIP Experience | Anjali Singh | PGDM',
    videoId: 'YnkPGjlk71s',
    category: 'documentary',
    description: 'Student Testimonial - Summer Internship Program experience sharing and career insights',
    year: '2024',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Student Testimonial',
    scope: 'Interview Production & Editing',
    fullDescription:
      "Authentic student testimonial featuring Anjali Singh sharing her Summer Internship Program (SIP) experience as part of the PGDM curriculum. Through careful interview production and thoughtful editing, we captured genuine insights about career development, industry exposure, and the transformative impact of IMI's academic programs on student growth and professional readiness.",
    tags: ['Student Testimonial', 'Internship', 'Career', 'PGDM', 'Professional Growth'],
  },
  {
    title: 'WELCOME BATCH OF 2023-25',
    videoId: 'W27wOTPahDk',
    category: 'documentary',
    description: 'Institutional Film - Welcome video for new student batch showcasing campus facilities and culture',
    year: '2024',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Institutional Film',
    scope: 'Campus Tour Production & Branding',
    fullDescription:
      "Welcoming video for the incoming PGDM batch of 2023-25, designed to introduce new students to IMI's campus culture, facilities, and academic environment. Our production approach balanced institutional branding with authentic student perspectives, creating an engaging orientation experience that helps new students feel connected to the IMI community from day one.",
    tags: ['Welcome Video', 'New Students', 'Campus Tour', 'Institutional', 'Orientation'],
  },
  {
    title: 'National Alumni Meet 2023',
    videoId: 'lyBQYLtnKdM',
    category: 'documentary',
    description: 'Event Documentation - Alumni reunion showcasing professional networks and institutional legacy',
    year: '2023',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Event Documentation',
    scope: 'Alumni Event Coverage & Networking Documentation',
    fullDescription:
      "Documentation of IMI's National Alumni Meet 2023, capturing the reunion of successful graduates and celebrating the institution's legacy of excellence. Our coverage focused on professional networking moments, success stories, and the strong alumni-institution bond that defines IMI's continuing impact on business leadership across India and beyond.",
    tags: ['Alumni', 'Networking', 'Professional Development', 'Legacy', 'Business Leadership'],
  },

  // Additional Tata Motors Videos
  {
    title: 'Hero Stories from Indonesia | Tata Prima | Mining & Construction',
    videoId: '4P_0BSWME5E',
    category: 'brands',
    description: 'Brand Campaign - Commercial vehicle showcase highlighting durability and performance in Indonesia mining sector',
    year: '2024',
    client: 'Tata Motors',
    featured: false,
    subtitle: 'Global Customer Stories Campaign',
    scope: 'Director of Photography (DOP)',
    fullDescription:
      "Part of Tata Motors' global HeroStories campaign, this powerful brand film showcases the real-world impact of Tata Prima vehicles in Indonesia's challenging mining and construction environments. As Director of Photography, Vipin Kumar Pal captured authentic customer journeys, demonstrating how Tata Motors vehicles enable progress and reliability in demanding industrial settings.\n\nThe shoot demanded technical precision and adaptability in harsh mining environments, with handheld run-and-gun setups combined with carefully orchestrated cinematic sequences. The cinematography served as an emotional bridge between viewers and the featured operators who rely daily on Tata vehicles to drive their industrial operations forward.\n\nThis film celebrates not only the legacy of Tata Motors but also amplifies the voice of its global customer base with authenticity and heart, showcasing the durability and performance that define Tata's commercial vehicle excellence.",
    tags: ['Automotive', 'Global Campaign', 'Customer Stories', 'Mining', 'Indonesia', 'Commercial Vehicles'],
  },
  {
    title: '#HeroStories from Vietnam | Tata Super Ace | FMCG',
    videoId: 'AT94cyerIPo',
    category: 'brands',
    description: 'Brand Film - Corporate storytelling showcasing Tata Motors heritage and innovation in Vietnam FMCG sector',
    year: '2024',
    client: 'Tata Motors',
    featured: false,
    subtitle: 'Global Customer Stories Campaign',
    scope: 'Director of Photography (DOP)',
    fullDescription:
      "Another compelling chapter in Tata Motors' global HeroStories campaign, this brand film explores how Tata Super Ace vehicles support Vietnam's FMCG (Fast-Moving Consumer Goods) distribution network. Through authentic customer storytelling, the film demonstrates the vehicle's reliability and efficiency in last-mile delivery operations.\n\nVipin Kumar Pal's cinematography captures the dynamic energy of Vietnam's bustling FMCG distribution system, from warehouse operations to street-level deliveries. The visual narrative focuses on human-centric moments while maintaining a polished, brand-aligned aesthetic that celebrates both the vehicle's capabilities and the entrepreneurial spirit of its operators.\n\nThe film stands as a testament to Tata Motors' commitment to enabling mobility and economic progress across diverse global markets, showcasing how their vehicles become integral partners in local business success stories.",
    tags: ['Automotive', 'Global Campaign', 'Customer Stories', 'Vietnam', 'FMCG', 'Distribution'],
  },
  {
    title: '#HeroStories from Indonesia | Tata Prima | Mining',
    videoId: '0BsWJDmjGWs',
    category: 'brands',
    description: 'Product Film - Vehicle features and capabilities demonstration in Indonesian mining operations',
    year: '2024',
    client: 'Tata Motors',
    featured: false,
    subtitle: 'Global Customer Stories Campaign',
    scope: 'Director of Photography (DOP)',
    fullDescription:
      "The third installment in Tata Motors' Indonesian HeroStories series, this product-focused film showcases the Tata Prima's exceptional performance in mining operations. The documentary-style narrative captures real operators and their daily reliance on Tata vehicles in one of the world's most demanding industrial environments.\n\nThe cinematography challenge involved documenting heavy machinery operations while maintaining safety protocols and capturing the scale of mining operations. Vipin Kumar Pal employed a combination of wide establishing shots and intimate operator profiles to tell a complete story of industrial partnership and reliability.\n\nThis film reinforces Tata Motors' position as a trusted partner in global heavy industry, demonstrating how their commercial vehicles are engineered to withstand extreme conditions while supporting the livelihoods of operators who depend on them daily.",
    tags: ['Automotive', 'Product Demo', 'Mining Operations', 'Indonesia', 'Heavy Industry', 'Reliability'],
  },

  // Additional Portfolio Videos
  {
    title: 'Super Guru 4G – Entertainment Ki Duniya Ka Baap',
    videoId: 'lyBQYLtnKdM',
    category: 'brands',
    description: 'Brand Campaign - Entertainment power of itel Super Guru 4G feature phone',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'Brand Campaign Film',
    scope: 'End-to-End Production',
    fullDescription:
      "This vibrant brand campaign for itel India celebrates the entertainment capabilities of the Super Guru 4G feature phone, positioning it as the ultimate entertainment device for India's feature phone market. The film showcases the device's multimedia capabilities while connecting with young, aspirational audiences through energetic storytelling.\n\nOur production team handled the complete creative and technical execution, from concept development to final delivery. The campaign required a balance of product demonstration and lifestyle messaging, ensuring the Super Guru 4G's entertainment features were highlighted within relatable usage scenarios.\n\nThe visual approach emphasized dynamic editing, vibrant color palettes, and engaging performance sequences that reflect the energy and entertainment value proposition of the itel Super Guru 4G.",
    tags: ['Brand Campaign', 'Feature Phone', 'Entertainment', 'itel', 'Youth Marketing'],
  },
  {
    title: 'Power your gadgets with itel VoltX 65 GaN charger | 65W Fast Charging',
    videoId: 'yW7DNblm2dg',
    category: 'product',
    description: 'Product Film - Fast charging technology showcase demonstrating 65W GaN charger capabilities',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'Product Film',
    scope: 'Studio Production & Technical Demo',
    fullDescription:
      "A technical product film showcasing the itel VoltX 65 GaN charger's fast charging capabilities and advanced technology. The production focused on demonstrating real-world charging performance while highlighting the compact design and multi-device compatibility of this innovative charging solution.\n\nOur studio setup was designed to capture the technical aspects of the charger while maintaining visual appeal. Close-up shots of the charging process, device compatibility tests, and thermal performance demonstrations were combined with clean product cinematography to create an informative yet engaging product showcase.\n\nThe film successfully communicates the technical advantages of GaN technology while positioning the itel VoltX as a premium charging solution for modern device users.",
    tags: ['Product Film', 'Fast Charging', 'GaN Technology', 'itel', 'Technical Demo'],
  },
  {
    title: 'Unboxing the itel Buds Ace 2 TWS Earbuds | 50 hrs Playback',
    videoId: 'YnkPGjlk71s',
    category: 'product',
    description: 'Product Film - TWS earbuds unboxing and features demonstration',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'Product Film',
    scope: 'Unboxing Production & Feature Demo',
    fullDescription:
      "An engaging unboxing and product demonstration video for the itel Buds Ace 2 TWS earbuds, highlighting the impressive 50-hour playback capability and premium audio features. The production combined satisfying unboxing sequences with practical feature demonstrations to create compelling product content.\n\nOur filming approach emphasized the premium unboxing experience while showcasing key product features including battery life, audio quality, and ergonomic design. Clean studio lighting and precise camera movements enhanced the product's premium positioning within the competitive TWS market.\n\nThe video successfully demonstrates the value proposition of the itel Buds Ace 2, combining technical specifications with lifestyle usage scenarios to appeal to audio enthusiasts and everyday users alike.",
    tags: ['Product Film', 'TWS Earbuds', 'Audio Technology', 'itel', 'Unboxing'],
  },
  {
    title: 'itel | Jode Bharat Ka Har Dil | Cricket World Cup | 2mins',
    videoId: 'W27wOTPahDk',
    category: 'brands',
    description: 'Brand Campaign - Cricket World Cup celebration campaign connecting with Indian cricket fans',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'Sports Marketing Campaign',
    scope: 'Campaign Production & Sports Marketing',
    fullDescription:
      "A patriotic brand campaign celebrating itel's connection with Indian cricket fans during the Cricket World Cup. The campaign 'Jode Bharat Ka Har Dil' (Connecting Every Heart of India) positioned itel as the brand that unites cricket-loving Indians across the nation.\n\nThe production captured the emotional connection between cricket and Indian identity, showcasing how itel devices enable fans to stay connected with matches and share their passion. Dynamic editing and emotional storytelling created a campaign that resonated with cricket enthusiasts nationwide.\n\nThis campaign successfully leveraged the Cricket World Cup's massive reach to strengthen itel's brand connection with Indian consumers, demonstrating the brand's understanding of local culture and national pride.",
    tags: ['Brand Campaign', 'Cricket World Cup', 'Sports Marketing', 'itel', 'National Pride'],
  },
  {
    title: 'itel | itel Smartphone | unboxing P40+',
    videoId: 'QHD_BJmJtn0',
    category: 'product',
    description: 'Product Film - Smartphone unboxing and features showcase for P40+ model',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'Product Film',
    scope: 'Product Cinematography & Demo',
    fullDescription:
      "A comprehensive unboxing and product showcase video for the itel P40+ smartphone, highlighting key features and value proposition within the competitive budget smartphone segment. The production focused on demonstrating practical usage scenarios while showcasing the device's design and capabilities.\n\nOur cinematography approach combined satisfying unboxing sequences with real-world usage demonstrations, ensuring viewers could appreciate both the product's physical qualities and functional capabilities. Clean studio work and practical lighting showcased the smartphone's design and interface effectively.\n\nThe video successfully positions the itel P40+ as an accessible yet feature-rich smartphone option, appealing to budget-conscious consumers without compromising on quality presentation.",
    tags: ['Product Film', 'Smartphone', 'Unboxing', 'itel', 'Budget Technology'],
  },
  {
    title: 'itel Smartwatch 2ES | Smartwatch | Fitness Watch',
    videoId: '4jN9Yb2MqK0',
    category: 'product',
    description: 'Product Film - Smartwatch and fitness features showcase highlighting health monitoring capabilities',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'Product Film',
    scope: 'Lifestyle Product Demo',
    fullDescription:
      "A lifestyle-focused product film showcasing the itel Smartwatch 2ES and its comprehensive fitness tracking capabilities. The production demonstrated real-world usage scenarios while highlighting the watch's health monitoring features, design aesthetics, and user interface.\n\nOur approach combined product cinematography with lifestyle demonstrations, showing the smartwatch in various fitness and daily life contexts. The visual narrative emphasized the device's role as a comprehensive health and lifestyle companion rather than just a tech accessory.\n\nThe video effectively communicates the value proposition of the itel Smartwatch 2ES, positioning it as an accessible entry point into smart wearables for health-conscious consumers.",
    tags: ['Product Film', 'Smartwatch', 'Fitness Technology', 'itel', 'Health Monitoring'],
  },
  {
    title: 'Stunning TV Ads Shot with Excellence! | Itel | 55Inch',
    videoId: '-rZnKxE-Af4',
    category: 'brands',
    description: 'TV Commercial - Television advertisement showcase highlighting itel TV excellence',
    year: '2024',
    client: 'itel India',
    featured: false,
    subtitle: 'TV Commercial Campaign',
    scope: 'Commercial Production',
    fullDescription:
      "A high-impact television commercial showcasing itel's 55-inch TV excellence and visual quality. The campaign emphasized the superior viewing experience and value proposition of itel's large-screen television offerings within the competitive smart TV market.\n\nThe production utilized dynamic visual techniques to demonstrate screen quality, smart features, and entertainment capabilities. Professional lighting and cinematography ensured the TV's visual capabilities were effectively communicated while maintaining commercial advertising standards.\n\nThis commercial successfully positioned itel TVs as premium yet accessible entertainment solutions, appealing to families and entertainment enthusiasts seeking quality large-screen experiences.",
    tags: ['TV Commercial', 'Large Screen TV', 'Entertainment', 'itel', 'Visual Excellence'],
  },

  // Music Videos
  {
    title: 'Music Production Vol. 2',
    videoId: 'o21H1tiTKOM',
    category: 'music',
    description: 'Professional Music Video - High-quality music video production with cinematic storytelling',
    year: '2024',
    client: 'Music Video Productions',
    featured: false,
    subtitle: 'Professional Music Video',
    scope: 'Music Video Production & Direction',
    fullDescription:
      "A professionally produced music video showcasing TND Films' expertise in music video production. The project combined dynamic cinematography with creative storytelling to create visually compelling content that enhances the musical narrative.\n\nOur production approach integrated performance sequences with cinematic storytelling, using professional lighting, camera movement, and post-production techniques to create a high-impact visual experience. The music video demonstrates our capability to work across different musical genres while maintaining visual excellence.\n\nThis production stands as an example of TND Films' versatility in music video creation, combining technical expertise with creative vision to deliver professional music content.",
    tags: ['Music Video', 'Professional Production', 'Cinematography', 'Creative Direction', 'Performance'],
  },

  // Additional Missing Videos from PortfolioDetailed.js
  {
    title: 'Infinix Brand Campaign Video 1',
    videoId: 'NVGPApf1-xA',
    category: 'brands',
    description: 'Brand Campaign - Lifestyle and technology integration showcase',
    year: '2022',
    client: 'Infinix India',
    featured: false,
    subtitle: 'Brand Campaign',
    scope: 'Brand Content Creation',
    fullDescription:
      "Additional brand campaign content for Infinix India showcasing lifestyle and technology integration. This video demonstrates Infinix's commitment to creating engaging content that resonates with their target audience through authentic storytelling and modern visual aesthetics.\n\nThe production approach focused on capturing real-world usage scenarios while highlighting the brand's technological innovation and user-centric design philosophy.",
    tags: ['Lifestyle', 'Brand Campaign', 'Technology', 'Social Media'],
  },
  {
    title: 'Infinix Brand Campaign Video 2',
    videoId: 'JMrJR72wkes',
    category: 'brands',
    description: 'Brand Campaign - Product features and lifestyle integration',
    year: '2022',
    client: 'Infinix India',
    featured: false,
    subtitle: 'Brand Campaign',
    scope: 'Product Features & Lifestyle Integration',
    fullDescription:
      "Second brand campaign video for Infinix India focusing on product features and lifestyle integration. The production showcased how Infinix products seamlessly integrate into modern lifestyles while highlighting key technological features and user benefits.\n\nThis campaign video emphasizes the brand's understanding of consumer needs and their commitment to delivering technology solutions that enhance daily life experiences.",
    tags: ['Brand Campaign', 'Product Features', 'Technology', 'Lifestyle'],
  },
  {
    title: 'Music Video Production 3',
    videoId: 'CdBX0NTjlII',
    category: 'music',
    description: 'Professional Music Video - Creative music video production',
    year: '2024',
    client: 'Music Video Productions',
    featured: false,
    subtitle: 'Professional Music Video',
    scope: 'Music Video Production & Creative Direction',
    fullDescription:
      "A creatively produced music video showcasing TND Films' expertise in music video production. The project combined innovative cinematography with artistic storytelling to create a visually compelling music video that enhances the musical narrative.\n\nOur production approach integrated dynamic visual techniques, creative lighting setups, and engaging performance sequences to deliver a high-impact music video that stands out in the competitive music video landscape.",
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
    subtitle: 'Professional Music Video',
    scope: 'High-Quality Music Video Production',
    fullDescription:
      "High-quality music video production demonstrating TND Films' technical excellence and creative vision in music video creation. The project showcased professional production values while maintaining artistic integrity and visual impact.\n\nThe production utilized advanced cinematography techniques, professional lighting setups, and creative post-production workflows to deliver a music video that meets industry standards for quality and creativity.",
    tags: ['Music Video', 'Production', 'Cinematography'],
  },
  {
    title: 'IMI Additional Content',
    videoId: '3xMRzd0VN_E',
    category: 'documentary',
    description: 'Institutional Content - Additional IMI video content showcasing academic excellence',
    year: '2024',
    client: 'IMI (International Management Institute)',
    featured: false,
    subtitle: 'Institutional Content',
    scope: 'Educational Institution Documentation',
    fullDescription:
      "Additional institutional content for IMI showcasing the academic excellence and institutional values that define one of India's premier management institutes. This content captures the essence of IMI's educational philosophy and commitment to developing future business leaders.\n\nThe production approach focused on authentic documentation of academic life, institutional culture, and the transformative educational experience that IMI provides to its students across all three campuses.",
    tags: ['Academic Excellence', 'Institutional', 'Educational Content'],
  },
];

// Helper function to create slug from title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Helper function to find video by slug
const findVideoBySlug = (slug) => {
  return VIDEO_ITEMS.find((video) => createSlug(video.title) === slug);
};

export default function VideoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const video = findVideoBySlug(params.slug);

  if (!video) {
    return (
      <main>
        <Navbar />
        <div className='pt-16 min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-light text-gray-900 mb-4'>
              Video Not Found
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
        <div className='max-w-5xl mx-auto px-6 lg:px-12 py-8'>
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

          {/* Video Player Section */}
          <motion.div
            className='mb-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='aspect-[16/10] bg-black shadow-lg overflow-hidden max-w-4xl mx-auto'>
              {isVideoPlaying ? (
                video.videoId.startsWith('LOCAL:') ? (
                  <video
                    width='100%'
                    height='100%'
                    controls
                    autoPlay
                    className='w-full h-full'
                  >
                    <source
                      src={video.videoId.replace('LOCAL:', '')}
                      type='video/mp4'
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    width='100%'
                    height='100%'
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                    title={video.title}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='w-full h-full'
                  />
                )
              ) : (
                <div
                  className='relative w-full h-full group cursor-pointer'
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {video.videoId.startsWith('LOCAL:') ? (
                    <div className='w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center'>
                      <div className='text-center text-white'>
                        <div className='mb-4'>
                          <Play
                            size={64}
                            className='mx-auto text-white/80'
                            fill='white'
                          />
                        </div>
                        <h3 className='text-xl font-medium mb-2'>
                          {video.title}
                        </h3>
                        <p className='text-gray-300 text-sm'>
                          Click to play video
                        </p>
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
                  <div className='absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300'>
                    <motion.div
                      className='w-20 h-20 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play
                        size={32}
                        className='text-white ml-1'
                        fill='white'
                      />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className='grid lg:grid-cols-4 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-3'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Title and Subtitle */}
                <div className='mb-6'>
                  <h1 className='text-2xl lg:text-3xl font-medium text-gray-900 mb-2 leading-tight'>
                    {video.title}
                  </h1>
                  {video.subtitle && (
                    <p className='text-sm text-red-500 font-normal mb-3'>
                      {video.subtitle}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className='flex flex-wrap gap-4 text-xs text-gray-500 uppercase tracking-wide'>
                    <span>{video.client}</span>
                    <span>•</span>
                    <span>{video.year}</span>
                    <span>•</span>
                    <span>{video.category}</span>
                  </div>
                </div>

                {/* Description */}
                <div className='prose max-w-none mb-6'>
                  <p className='text-sm text-gray-700 leading-relaxed mb-4'>
                    {video.description}
                  </p>
                  {video.fullDescription && (
                    <p className='text-sm text-gray-600 leading-relaxed whitespace-pre-line'>
                      {video.fullDescription}
                    </p>
                  )}
                </div>

                {/* Tags */}
                {video.tags && video.tags.length > 0 && (
                  <div className='mb-6'>
                    <div className='flex flex-wrap gap-2'>
                      {video.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='px-2 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='bg-gray-50 p-4'
              >
                <h3 className='text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider'>
                  Details
                </h3>

                {/* Basic Details */}
                <div className='space-y-3 mb-6'>
                  <div>
                    <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                      Client
                    </div>
                    <div className='text-sm text-gray-900'>{video.client}</div>
                  </div>

                  <div>
                    <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                      Year
                    </div>
                    <div className='text-sm text-gray-900'>{video.year}</div>
                  </div>

                  <div>
                    <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                      Category
                    </div>
                    <div className='text-sm text-gray-900 capitalize'>
                      {video.category}
                    </div>
                  </div>

                  {/* Scope */}
                  {video.scope && (
                    <div>
                      <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                        Scope
                      </div>
                      <div className='text-sm text-gray-900'>{video.scope}</div>
                    </div>
                  )}

                  {/* Role Information */}
                  {video.role && (
                    <div>
                      <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                        Role
                      </div>
                      <div className='text-sm text-gray-900'>{video.role}</div>
                    </div>
                  )}

                  {video.dop && (
                    <div>
                      <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                        DOP
                      </div>
                      <div className='text-sm text-gray-900'>{video.dop}</div>
                    </div>
                  )}

                  {/* Additional Fields */}
                  {video.featuring && (
                    <div>
                      <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                        Featuring
                      </div>
                      <div className='text-sm text-gray-900'>
                        {video.featuring}
                      </div>
                    </div>
                  )}

                  {video.productionHouse && (
                    <div>
                      <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                        Production House
                      </div>
                      <div className='text-sm text-gray-900'>
                        {video.productionHouse}
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  {video.details &&
                    video.details.map((detail, index) => (
                      <div key={index}>
                        <div className='text-xs text-gray-500 mb-1 uppercase tracking-wide'>
                          {detail.label}
                        </div>
                        <div className='text-sm text-gray-900'>
                          {detail.value}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Client Page Link */}
                {(() => {
                  // Hide client page link for 7 year gamer video
                  if (
                    video.title?.includes(
                      '7 Year Win Streak with @UnGraduateGamer'
                    )
                  ) {
                    return null;
                  }

                  const clientLower = video.client?.toLowerCase();
                  let clientSlug, clientName;

                  if (
                    clientLower?.includes('itel') ||
                    clientLower === 'itel india'
                  ) {
                    clientSlug = 'itel-india';
                    clientName = 'itel';
                  // } else if (clientLower?.includes('gates')) {
                  //   clientSlug = 'gates-foundation';
                  //   clientName = 'Gates Foundation';
                  } else if (clientLower?.includes('jumpin')) {
                    clientSlug = 'jumpin-heights';
                    clientName = 'Jumpin Heights';
                  } else if (clientLower?.includes('tata motors')) {
                    clientSlug = 'tata-motors';
                    clientName = 'Tata Motors';
                  } else if (clientLower?.includes('better india')) {
                    clientSlug = 'the-better-india';
                    clientName = 'The Better India';
                  } else if (clientLower?.includes('free fire')) {
                    clientSlug = 'free-fire-india';
                    clientName = 'Free Fire INDIA';
                  } else if (clientLower?.includes('vagabond')) {
                    clientSlug = 'the-vagabond-films';
                    clientName = 'The Vagabond Films';
                  } else if (clientLower?.includes('travnat')) {
                    clientSlug = 'travnat-films';
                    clientName = 'TRAVNAT FILMS';
                  } else if (
                    clientLower?.includes('imi') ||
                    clientLower?.includes('bhubaneswar')
                  ) {
                    clientSlug = 'imi-bhubaneswar';
                    clientName = 'IMI Bhubaneswar';
                  } else if (clientLower?.includes('irma')) {
                    clientSlug = 'irma-anand';
                    clientName = 'IRMA';
                  } else if (clientLower?.includes('adani')) {
                    clientSlug = 'adani-foundation';
                    clientName = 'Adani Foundation';
                  } else if (clientLower?.includes('jindal')) {
                    clientSlug = 'jindal-stainless';
                    clientName = 'Jindal Stainless';
                  } else if (clientLower?.includes('infinix')) {
                    clientSlug = 'infinix-india';
                    clientName = 'Infinix India';
                  } else if (video.category === 'music') {
                    clientSlug = 'music-videos';
                    clientName = 'Music Videos';
                  }

                  if (clientSlug) {
                    return (
                      <div className='border-t border-gray-200 pt-4'>
                        <h4 className='text-xs font-medium text-gray-900 mb-2 uppercase tracking-wider'>
                          Client Portfolio
                        </h4>
                        <Link href={`/clients/${clientSlug}`}>
                          <div className='w-full border border-gray-300 hover:border-red-500 hover:bg-red-50 text-gray-700 hover:text-red-600 py-2 px-3 text-sm transition-all duration-300 flex items-center justify-center gap-2 group'>
                            <Building size={14} />
                            <span>View All {clientName} Projects</span>
                            <ExternalLink
                              size={12}
                              className='group-hover:translate-x-0.5 transition-transform'
                            />
                          </div>
                        </Link>
                      </div>
                    );
                  }
                  return null;
                })()}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
