import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookmarkProvider } from "@/context/BookmarkContext";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";
import ArtworkDetail from "./pages/ArtworkDetail";
import Timeline from "./pages/Timeline";
import Styles from "./pages/Styles";
import Quiz from "./pages/Quiz";
import Bookmarks from "./pages/Bookmarks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookmarkProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artist/:id" element={<ArtistDetail />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BookmarkProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
