// app/about/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamDetailed from '../components/TeamDetailed';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className='pt-16'>
        <TeamDetailed />
      </div>
      <Footer />
    </main>
  );
}
