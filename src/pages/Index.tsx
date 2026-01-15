import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedArtworks from '@/components/home/FeaturedArtworks';
import LearningPaths from '@/components/home/LearningPaths';
import ThemesGrid from '@/components/home/ThemesGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedArtworks />
        <LearningPaths />
        <ThemesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
