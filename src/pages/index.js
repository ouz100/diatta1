import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import VideoModal from '@/components/VideoModal';
import Tutorils from '@/components/Tutorials';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <VideoModal/>
      <Testimonials />
      <ContactForm />
      <Tutorils/>
      <Footer />
      
    </>
  );
}
