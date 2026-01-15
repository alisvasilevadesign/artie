import { Link } from 'react-router-dom';
import { themes } from '@/data/artData';

const ThemesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Explore by Theme
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Art Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {themes.map((theme) => (
            <Link
              key={theme.id}
              to={`/gallery?theme=${theme.id}`}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform">
                {theme.icon}
              </span>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {theme.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {theme.count} works
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesGrid;
