import { Link } from 'react-router-dom';
import { Users, Clock, Palette, Layers } from 'lucide-react';

const paths = [
  {
    title: 'By Artist',
    description: 'Explore works organized by the masters who created them',
    icon: Users,
    href: '/artists',
    color: 'bg-primary/10 text-primary'
  },
  {
    title: 'By Timeline',
    description: 'Journey through art history from ancient to modern',
    icon: Clock,
    href: '/timeline',
    color: 'bg-secondary/20 text-secondary-foreground'
  },
  {
    title: 'By Style',
    description: 'Discover different painting styles and techniques',
    icon: Palette,
    href: '/styles',
    color: 'bg-primary/10 text-primary'
  },
  {
    title: 'By Theme',
    description: 'Browse art categorized by subject and meaning',
    icon: Layers,
    href: '/gallery',
    color: 'bg-secondary/20 text-secondary-foreground'
  }
];

const LearningPaths = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Learning Paths
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Choose Your Journey
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Multiple ways to explore and learn about art. Pick a path that suits your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path) => (
            <Link
              key={path.title}
              to={path.href}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${path.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <path.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {path.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
