import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { MembersSection } from "@/components/MembersSection";
import { GallerySection } from "@/components/GallerySection";
import { VideoGallery } from "@/components/VideoGallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FiguresBanner } from "@/components/FiguresBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <FiguresBanner />
      <div id="home">
        <Hero />
      </div>
      
      <div className="flex-grow">
          <AboutSection />
          <EventsSection />
          <MembersSection />
          <GallerySection />
          <VideoGallery />
          <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
