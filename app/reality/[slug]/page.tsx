import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingWorlds from "@/components/TrendingWorlds";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <TrendingWorlds />
      <Footer />
    </main>
  );
}