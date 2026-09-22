import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import PoemsFeed from "@/components/PoemsFeed";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import TestHero from "@/components/test-hero";
import FeaturedHomesSection from "@/components/featured-homes";
import FeaturedEstatesSection from "@/components/featured-estates";

export default function Home() {
  return (
    <main className="bg-paper">
      {/* <Header /> */}
      {/* <Hero /> */}
      <TestHero />
      <About />
      <FeaturedHomesSection />
      <FeaturedEstatesSection />
      <PoemsFeed />
      <Newsletter />
      {/* <Footer /> */}
    </main>
  );
}
