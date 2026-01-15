import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import { artworks, artStyles } from '@/data/artData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Grid3X3, LayoutGrid } from 'lucide-react';

const Gallery = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [gridSize, setGridSize] = useState<'sm' | 'lg'>('lg');

  const filteredArtworks = selectedStyle
    ? artworks.filter(a => a.style.toLowerCase().includes(selectedStyle.toLowerCase()))
    : artworks;

  const styles = [...new Set(artworks.map(a => a.style))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Virtual Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of masterpieces from history's greatest artists.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedStyle === null ? 'default' : 'outline'}
              className="cursor-pointer text-sm px-4 py-1"
              onClick={() => setSelectedStyle(null)}
            >
              All
            </Badge>
            {styles.map((style) => (
              <Badge
                key={style}
                variant={selectedStyle === style ? 'default' : 'outline'}
                className="cursor-pointer text-sm px-4 py-1"
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant={gridSize === 'lg' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setGridSize('lg')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={gridSize === 'sm' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setGridSize('sm')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 ${
          gridSize === 'lg'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        }`}>
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              size={gridSize === 'lg' ? 'lg' : 'sm'}
            />
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No artworks found for this filter.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
