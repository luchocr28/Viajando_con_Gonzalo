import { LanguageProvider } from './hooks/useLanguage';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import About from './components/About';
import CustomTours from './components/CustomTours';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Discover from './components/Discover';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function AppContent() {
  useScrollReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <PromoBanner />
        <About />
        <CustomTours />
        <Tours />
        <Gallery />
        <WhyChooseUs />
        <Discover />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
