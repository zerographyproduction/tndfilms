import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import ClientLogos from '@/app/components/ClientLogos';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className='bg-white text-gray-900'>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ClientLogos />
      <Contact />
      <Footer />
    </main>
  );
}
