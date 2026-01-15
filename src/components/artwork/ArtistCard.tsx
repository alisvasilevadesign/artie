import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useBookmarks } from '@/context/BookmarkContext';
import { Artist } from '@/data/artData';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const { toggleArtistBookmark, isArtistBookmarked } = useBookmarks();
  const isBookmarked = isArtistBookmarked(artist.id);

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/artist/${artist.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
          
          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif font-bold text-lg text-accent">
              {artist.name}
            </h3>
            <p className="text-sm text-accent/80">
              {artist.birthYear} - {artist.deathYear}
            </p>
          </div>
        </div>
      </Link>
      
      {/* Bookmark Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card"
        onClick={(e) => {
          e.preventDefault();
          toggleArtistBookmark(artist.id);
        }}
      >
        {isBookmarked ? (
          <BookmarkCheck className="h-4 w-4 text-primary" />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
      </Button>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{artist.nationality}</Badge>
          <Badge variant="outline">{artist.style}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {artist.biography}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
