import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import { artists, artworks } from '@/data/artData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bookmark, BookmarkCheck } from 'lucide-react';
import { useBookmarks } from '@/context/BookmarkContext';

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleArtistBookmark, isArtistBookmarked } = useBookmarks();
  
  const artist = artists.find(a => a.id === id);
  const artistWorks = artworks.filter(a => a.artistId === id);
  const isBookmarked = artist ? isArtistBookmarked(artist.id) : false;

  if (!artist) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Artist not found</h1>
          <Link to="/artists">
            <Button className="mt-4">Back to Artists</Button>
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
        <Link to="/artists" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Artists
        </Link>

        {/* Artist Header */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {artist.name}
                </h1>
                <p className="text-muted-foreground mt-1">
                  {artist.birthYear} - {artist.deathYear}
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => toggleArtistBookmark(artist.id)}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="h-5 w-5 text-primary" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
              </Button>
            </div>

            <div className="flex gap-2 mb-6">
              <Badge>{artist.nationality}</Badge>
              <Badge variant="secondary">{artist.style}</Badge>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {artist.biography}
            </p>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Notable Works</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {artist.notableWorks.map((work) => (
                  <li key={work}>{work}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Artist's Works */}
        {artistWorks.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Works in Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {artistWorks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ArtistDetail;
