import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Team from '@/app/components/Team';
import Portfolio from '@/app/components/Portfolio';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className='bg-white text-gray-900'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
