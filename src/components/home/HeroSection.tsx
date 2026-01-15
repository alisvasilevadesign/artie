import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-gallery.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Art Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm border border-primary/30">
            Your Journey Into Art Begins Here
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 leading-tight">
            Discover the Beauty of
            <span className="block text-primary">Art Through Time</span>
          </h1>
          
          <p className="text-lg text-accent/80 mb-8 max-w-lg">
            Explore masterpieces, understand movements, and learn from history's greatest artists. 
            Your interactive art education awaits.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/gallery">
              <Button size="lg" className="gap-2">
                Explore Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/quiz">
              <Button variant="outline" size="lg" className="gap-2 bg-accent/10 border-accent/30 text-accent hover:bg-accent/20 hover:text-accent">
                <Play className="h-4 w-4" />
                Take a Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
