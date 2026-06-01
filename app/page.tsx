import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedRealities from "@/components/FeaturedRealities";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="bg-[#090611]">
      <Navbar />
      <Hero />
      <FeaturedRealities />
      <HowItWorks />
    </main>
  );
}