// app/services/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';

export const metadata = {
  title: 'Video Production Services - TND Films | Expert Video Creation',
  description:
    'Comprehensive video production services including documentaries, short films, music videos, brand videos, corporate videos, and commercials. Professional quality with creative excellence.',
  keywords: [
    'video production services',
    'documentary production',
    'short film production',
    'music video production',
    'brand video production',
    'corporate video production',
    'commercial video production',
    'video production company India',
    'professional video services',
    '4K video production',
    'post-production services',
    'live event coverage',
  ].join(', '),
  openGraph: {
    title: 'Video Production Services - TND Films',
    description:
      'Professional video production services from documentaries to commercials. Creative excellence with strategic impact.',
    url: 'https://tndfilms.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className='pt-16'>
        <Services />
      </div>
      <Footer />
    </main>
  );
}