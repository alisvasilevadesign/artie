import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { artStyles } from '@/data/artData';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Styles = () => {
  const [expandedStyle, setExpandedStyle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Discover Different Approaches
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Art Styles Guide
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about the characteristics, techniques, and famous examples of each painting style.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid gap-6">
          {artStyles.map((style) => (
            <div
              key={style.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setExpandedStyle(expandedStyle === style.id ? null : style.id)}
              >
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                    {style.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 line-clamp-1 md:line-clamp-none">
                    {style.description}
                  </p>
                </div>
                {expandedStyle === style.id ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                )}
              </button>

              {expandedStyle === style.id && (
                <div className="px-6 pb-6 pt-0 grid md:grid-cols-3 gap-6 border-t border-border mt-0 pt-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Characteristics</h4>
                    <ul className="space-y-2">
                      {style.characteristics.map((char) => (
                        <li key={char} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Techniques</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.techniques.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Famous Examples</h4>
                    <ul className="space-y-2">
                      {style.examples.map((example) => (
                        <li key={example} className="text-sm text-muted-foreground italic">
                          "{example}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Styles;
