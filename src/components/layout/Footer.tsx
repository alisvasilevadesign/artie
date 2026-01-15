import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-foreground mb-4">
              <Palette className="h-6 w-6 text-primary" />
              <span>ArtVerse</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Discover the world of art through interactive learning paths. Explore masterpieces, 
              understand artists, and dive into art history.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/artists" className="hover:text-primary transition-colors">Artists</Link></li>
              <li><Link to="/timeline" className="hover:text-primary transition-colors">Timeline</Link></li>
              <li><Link to="/styles" className="hover:text-primary transition-colors">Styles</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learn</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/quiz" className="hover:text-primary transition-colors">Take a Quiz</Link></li>
              <li><Link to="/bookmarks" className="hover:text-primary transition-colors">Your Bookmarks</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ArtVerse. Bringing art education to everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
