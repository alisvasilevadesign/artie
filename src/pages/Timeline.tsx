import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { artPeriods, artists } from '@/data/artData';
import { Badge } from '@/components/ui/badge';

const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const sortedPeriods = [...artPeriods].sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Journey Through Time
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Art History Timeline
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the evolution of art through major movements and periods.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          <div className="space-y-12">
            {sortedPeriods.map((period, index) => (
              <div
                key={period.id}
                className={`relative md:flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div
                    className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                      selectedPeriod === period.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedPeriod(selectedPeriod === period.id ? null : period.id)}
                  >
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <Badge variant="secondary" className="font-mono">
                        {period.startYear} - {period.endYear}
                      </Badge>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      {period.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {period.description}
                    </p>

                    {selectedPeriod === period.id && (
                      <div className="mt-4 pt-4 border-t border-border space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-2">Key Artists</h4>
                          <div className="flex flex-wrap gap-2">
                            {period.keyArtists.map((artist) => (
                              <Badge key={artist} variant="outline" className="text-xs">
                                {artist}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-2">Characteristics</h4>
                          <ul className={`text-sm text-muted-foreground space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            {period.characteristics.map((char) => (
                              <li key={char}>• {char}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Timeline;
