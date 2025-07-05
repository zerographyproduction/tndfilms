// app/about/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

export const metadata = {
  title: 'About Us - TND Films | Meet Our Expert Video Production Team',
  description:
    'Meet the visionaries behind TND Films. Our expert team combines 30+ years of experience in cinematography, creative direction, and post-production to bring your stories to life.',
  keywords: [
    'video production team',
    'cinematographer',
    'creative director',
    'post-production expert',
    'Vipin Kumar Pal',
    'Nitin Kumar Pal',
    'Kuldeep Chauhan',
    'video production company India',
  ].join(', '),
  openGraph: {
    title: 'About TND Films - Meet Our Expert Video Production Team',
    description:
      'Meet the visionaries behind TND Films. Expert team with 30+ years combined experience.',
    url: 'https://tndfilms.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className='pt-16'>
        <About />
      </div>
      <Footer />
    </main>
  );
}
