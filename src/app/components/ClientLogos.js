'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientLogos = () => {
  const logos = [
    { src: 'Honda_Logo.svg.png', alt: 'Honda', needsBorder: false },
    { src: 'Samsung_logo_blue.png', alt: 'Samsung', needsBorder: false },
    { src: 'maruti-suzuki-logo-maruiti-icon-free-free-vector.jpg', alt: 'Maruti Suzuki', needsBorder: false },
    { src: 'Rajputana_Customs.png', alt: 'Rajputana Customs', needsBorder: true },
    { src: 'HCL-TBI-partnership-logo.png', alt: 'HCL TBI', needsBorder: false },
    { src: 'piagio.png', alt: 'Piaggio', needsBorder: false },
    { src: 'Itel_Mobile_Logo.jpg', alt: 'Itel Mobile', needsBorder: false },
    { src: 'EapS2XXw_400x400.jpg', alt: 'Client Logo', needsBorder: false },
    { src: 'PPVTPP.jpg', alt: 'PPVTPP', needsBorder: false },
    { src: 'channels4_profile.jpg', alt: 'YouTube Channel', needsBorder: false },
    { src: 'idbi-federal-life-insurance-co-ltd-lower-parel-mumbai-life-insurance-agents-w7bxw.avif', alt: 'IDBI Federal Life Insurance', needsBorder: false },
    { src: 'logo.svg', alt: 'Client Logo', needsBorder: false },
    { src: '2c4bae37e7c5bab64a87cdaa84c0b56e.jpg', alt: 'Client Logo', needsBorder: false },
    { src: '3ad89fbb778598e05929ecd5287b3a55.png', alt: 'Client Logo', needsBorder: false },
    { src: '98a32e0ef25e6148b8a08954956eb0e4.png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (1)(1).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (1).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (10).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (11).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (12).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (13).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (14).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (2)(1).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (2).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (20).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (21).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (22).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (23).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (24).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (25).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (26).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (27).jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images (3)(1).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (3).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (4).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (5).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (6).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (8).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images (9).png', alt: 'Client Logo', needsBorder: false },
    { src: 'images.jpeg', alt: 'Client Logo', needsBorder: false },
    { src: 'images.png', alt: 'Client Logo', needsBorder: false }
  ];

  return (
    <section className='py-16 bg-soft-white'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-blue mb-4'>
            Trusted by Leading Brands
          </h2>
          <p className='text-slate-gray text-lg max-w-2xl mx-auto'>
            We've had the privilege of working with some of the most innovative
            companies across industries
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center'>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`flex justify-center items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
                logo.needsBorder ? 'bg-gray-700 border-2 border-gray-600' : 'bg-white'
              }`}
            >
              <Image
                src={`/Website/CompanyLogo/${logo.src}`}
                alt={logo.alt}
                width={120}
                height={80}
                className='max-w-full max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
