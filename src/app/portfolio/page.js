// app/portfolio/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioDetailed from '@/components/PortfolioDetailed';

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <div className='pt-16'>
        <PortfolioDetailed />
      </div>
      <Footer />
    </main>
  );
}
