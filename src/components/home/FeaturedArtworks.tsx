import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import { artworks } from '@/data/artData';

const FeaturedArtworks = () => {
  const featured = artworks.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wide">
              Featured Collection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Masterpieces of the Week
            </h2>
          </div>
          <Link to="/gallery" className="hidden md:block">
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} size="lg" />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/gallery">
            <Button variant="outline" className="gap-2">
              View All Artworks <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
