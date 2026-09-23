import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ToolsMarquee } from "@/components/ToolsMarquee";
import { SelectedWork } from "@/components/SelectedWork";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div
      suppressHydrationWarning
      className="relative min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col selection:bg-[var(--accent)] selection:text-white"
    >
      <Nav />
      <main className="flex-1" suppressHydrationWarning>
        <Hero />
        <About />
        <ToolsMarquee />
        <SelectedWork />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
