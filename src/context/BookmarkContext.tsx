import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BookmarkContextType {
  bookmarkedArtworks: string[];
  bookmarkedArtists: string[];
  toggleArtworkBookmark: (id: string) => void;
  toggleArtistBookmark: (id: string) => void;
  isArtworkBookmarked: (id: string) => boolean;
  isArtistBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarkedArtworks, setBookmarkedArtworks] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarkedArtworks');
    return saved ? JSON.parse(saved) : [];
  });

  const [bookmarkedArtists, setBookmarkedArtists] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarkedArtists');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkedArtworks', JSON.stringify(bookmarkedArtworks));
  }, [bookmarkedArtworks]);

  useEffect(() => {
    localStorage.setItem('bookmarkedArtists', JSON.stringify(bookmarkedArtists));
  }, [bookmarkedArtists]);

  const toggleArtworkBookmark = (id: string) => {
    setBookmarkedArtworks(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const toggleArtistBookmark = (id: string) => {
    setBookmarkedArtists(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const isArtworkBookmarked = (id: string) => bookmarkedArtworks.includes(id);
  const isArtistBookmarked = (id: string) => bookmarkedArtists.includes(id);

  return (
    <BookmarkContext.Provider value={{
      bookmarkedArtworks,
      bookmarkedArtists,
      toggleArtworkBookmark,
      toggleArtistBookmark,
      isArtworkBookmarked,
      isArtistBookmarked
    }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
