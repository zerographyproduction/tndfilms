// app/portfolio/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnhancedPortfolio from '../components/PortfolioDetailed';

export const metadata = {
  title: 'Portfolio - TND Films | Our Video Production Work & Case Studies',
  description:
    'Explore TND Films portfolio featuring documentaries, corporate videos, brand films, and commercials. See our work with IMI, IRMA, and social impact projects.',
  keywords: [
    'video production portfolio',
    'documentary films',
    'corporate video examples',
    'brand video portfolio',
    'IMI Bhubaneswar videos',
    'IRMA campus videos',
    'social impact documentaries',
    'video production case studies',
  ].join(', '),
  openGraph: {
    title: 'TND Films Portfolio - Video Production Work & Case Studies',
    description:
      'Explore our portfolio of documentaries, corporate videos, brand films, and commercials.',
    url: 'https://tndfilms.com/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <div className='pt-16'>
        <EnhancedPortfolio />
      </div>
      <Footer />
    </main>
  );
}
