'use client';
import React, { useState, useEffect } from 'react';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = () => {
    if (email && email.includes('@') && email.includes('.')) {
      setShowSuccess(true);
      setEmail('');

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else {
      alert('Please enter a valid email address');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className='min-h-screen bg-white text-black relative overflow-hidden'>
      {/* Subtle Background Grid */}
      <div className='fixed inset-0 opacity-[0.03]'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Subtle Paper Texture Overlay */}
      <div
        className='fixed inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className='relative z-10 min-h-screen flex flex-col'>
        {/* Header */}
        <header className='p-8 md:p-12'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-light tracking-[0.2em] text-black/80'>
              TND FILMS
            </div>
            <div className='text-sm text-black/60 tracking-wider'>
              EST. JUNE 2025
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className='flex-1 flex flex-col justify-center px-8 md:px-12 max-w-7xl mx-auto w-full'>
          {/* Hero Section */}
          <div className='mb-16 animate-[fadeInUp_1.2s_ease-out_0.3s_both]'>
            <div className='mb-6'>
              <h1 className='text-7xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tight mb-4'>
                <span className='block text-black'>SOMETHING</span>
                <span className='block text-black/70'>EXTRAORDINARY</span>
                <span className='block text-black/40'>IS COMING</span>
              </h1>
            </div>

            <div className='max-w-2xl'>
              <p className='text-xl md:text-2xl text-black/70 leading-relaxed font-light mb-8'>
                We craft stories that move audiences. Revolutionary content
                meets cutting-edge production in our pursuit of cinematic
                excellence.
              </p>
              <p className='text-lg text-black/50 leading-relaxed font-light'>
                A new chapter in digital storytelling begins soon.
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className='mb-16 animate-[fadeInUp_1.2s_ease-out_0.6s_both]'>
            <div className='max-w-md'>
              <h2 className='text-sm text-black/60 tracking-[0.2em] uppercase mb-6'>
                Be the first to know
              </h2>

              <div className='flex flex-col gap-4'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='your.email@domain.com'
                  className='w-full px-0 py-4 bg-transparent border-0 border-b border-black/20 text-black placeholder-black/40 text-lg outline-none focus:border-black/60 transition-all duration-500'
                />

                <button
                  onClick={handleSubscribe}
                  className='self-start mt-4 px-8 py-3 bg-black text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-black/90 hover:scale-105 transition-all duration-300 hover:tracking-[0.15em]'
                >
                  Notify Me
                </button>
              </div>

              {showSuccess && (
                <div className='mt-6 p-4 border border-black/20 bg-black/5 animate-[fadeInUp_0.5s_ease-out]'>
                  <p className='text-black/80 text-sm'>
                    Thank you. You'll be among the first to witness what's
                    coming.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Featured Work Preview */}
          <div className='mb-16 animate-[fadeInUp_1.2s_ease-out_0.9s_both]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl'>
              <div className='group cursor-pointer'>
                <div className='aspect-[4/5] bg-black/5 mb-4 relative overflow-hidden border border-black/10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  <div className='absolute bottom-4 left-4 text-xs text-black/60 tracking-wider'>
                    NARRATIVE
                  </div>
                </div>
                <h3 className='text-sm text-black/80 tracking-wide'>
                  Stories that resonate
                </h3>
              </div>

              <div className='group cursor-pointer'>
                <div className='aspect-[4/5] bg-black/5 mb-4 relative overflow-hidden border border-black/10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  <div className='absolute bottom-4 left-4 text-xs text-black/60 tracking-wider'>
                    COMMERCIAL
                  </div>
                </div>
                <h3 className='text-sm text-black/80 tracking-wide'>
                  Brands with purpose
                </h3>
              </div>

              <div className='group cursor-pointer'>
                <div className='aspect-[4/5] bg-black/5 mb-4 relative overflow-hidden border border-black/10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  <div className='absolute bottom-4 left-4 text-xs text-black/60 tracking-wider'>
                    DOCUMENTARY
                  </div>
                </div>
                <h3 className='text-sm text-black/80 tracking-wide'>
                  Truth through lens
                </h3>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className='p-8 md:p-12 animate-[fadeInUp_1.2s_ease-out_1.2s_both]'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
            <div className='flex gap-12 text-sm text-black/50'>
              <a
                href='#'
                className='hover:text-black/80 transition-colors duration-300 tracking-wide'
              >
                Instagram
              </a>
              {/* <a
                href='#'
                className='hover:text-black/80 transition-colors duration-300 tracking-wide'
              >
                Vimeo
              </a>
              <a
                href='#'
                className='hover:text-black/80 transition-colors duration-300 tracking-wide'
              >
                LinkedIn
              </a> */}
            </div>

            <div className='text-xs text-black/40 tracking-wider'>
              © 2025 TND FILMS — COMING SOON
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input::placeholder {
          font-weight: 300;
        }

        button:hover {
          letter-spacing: 0.15em;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
