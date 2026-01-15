import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { artworks, artists } from '@/data/artData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bookmark, BookmarkCheck, ZoomIn } from 'lucide-react';
import { useBookmarks } from '@/context/BookmarkContext';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleArtworkBookmark, isArtworkBookmarked } = useBookmarks();
  
  const artwork = artworks.find(a => a.id === id);
  const artist = artwork ? artists.find(a => a.id === artwork.artistId) : null;
  const isBookmarked = artwork ? isArtworkBookmarked(artwork.id) : false;

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Artwork not found</h1>
          <Link to="/gallery">
            <Button className="mt-4">Back to Gallery</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Back Button */}
        <Link to="/gallery" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        {/* Artwork View */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-zoom-in rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-12 w-12 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {artwork.title}
                </h1>
                {artist && (
                  <Link 
                    to={`/artist/${artist.id}`}
                    className="text-lg text-primary hover:underline mt-1 block"
                  >
                    {artist.name}
                  </Link>
                )}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => toggleArtworkBookmark(artwork.id)}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="h-5 w-5 text-primary" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary" className="text-sm">{artwork.year}</Badge>
              <Badge variant="outline">{artwork.style}</Badge>
              <Badge variant="outline">{artwork.period}</Badge>
              <Badge variant="outline">{artwork.theme}</Badge>
            </div>

            <div className="prose prose-neutral max-w-none">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">About This Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {artist && (
              <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">About the Artist</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {artist.biography}
                </p>
                <Link to={`/artist/${artist.id}`}>
                  <Button variant="secondary" size="sm">
                    View Artist Profile
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtworkDetail;
