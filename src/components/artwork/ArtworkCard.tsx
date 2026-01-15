import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useBookmarks } from '@/context/BookmarkContext';
import { Artwork } from '@/data/artData';

interface ArtworkCardProps {
  artwork: Artwork;
  size?: 'sm' | 'md' | 'lg';
}

const ArtworkCard = ({ artwork, size = 'md' }: ArtworkCardProps) => {
  const { toggleArtworkBookmark, isArtworkBookmarked } = useBookmarks();
  const isBookmarked = isArtworkBookmarked(artwork.id);

  const sizeClasses = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80'
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/artwork/${artwork.id}`}>
        <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      {/* Bookmark Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.preventDefault();
          toggleArtworkBookmark(artwork.id);
        }}
      >
        {isBookmarked ? (
          <BookmarkCheck className="h-4 w-4 text-primary" />
        ) : (
          <Bookmark className="h-4 w-4" />
        )}
      </Button>

      {/* Info */}
      <div className="p-4">
        <Link to={`/artwork/${artwork.id}`}>
          <h3 className="font-serif font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
            {artwork.title}
          </h3>
        </Link>
        <Link to={`/artist/${artwork.artistId}`}>
          <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {artwork.artist}
          </p>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">
            {artwork.year}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {artwork.style}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
