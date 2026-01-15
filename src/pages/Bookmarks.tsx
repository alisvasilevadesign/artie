import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArtworkCard from '@/components/artwork/ArtworkCard';
import ArtistCard from '@/components/artwork/ArtistCard';
import { artworks, artists } from '@/data/artData';
import { useBookmarks } from '@/context/BookmarkContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark } from 'lucide-react';

const Bookmarks = () => {
  const { bookmarkedArtworks, bookmarkedArtists } = useBookmarks();

  const savedArtworks = artworks.filter(a => bookmarkedArtworks.includes(a.id));
  const savedArtists = artists.filter(a => bookmarkedArtists.includes(a.id));

  const isEmpty = savedArtworks.length === 0 && savedArtists.length === 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Your Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Saved Bookmarks
          </h1>
          <p className="text-muted-foreground">
            Access your favorite artworks and artists anytime.
          </p>
        </div>

        {isEmpty ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Bookmark className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">No bookmarks yet</h2>
            <p className="text-muted-foreground mb-6">
              Start exploring and save your favorite artworks and artists.
            </p>
            <Link to="/gallery">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Explore Gallery
              </button>
            </Link>
          </div>
        ) : (
          <Tabs defaultValue="artworks" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="artworks">
                Artworks ({savedArtworks.length})
              </TabsTrigger>
              <TabsTrigger value="artists">
                Artists ({savedArtists.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="artworks">
              {savedArtworks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {savedArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No saved artworks yet.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="artists">
              {savedArtists.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {savedArtists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No saved artists yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Bookmarks;
