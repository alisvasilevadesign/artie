import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArtistCard from '@/components/artwork/ArtistCard';
import { artists } from '@/data/artData';

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Learn From The Masters
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Iconic Artists
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the lives and works of history's most influential artists.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Artists;
