import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import PoemsFeed from "@/components/PoemsFeed";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Header />
      <Hero />
      <FeaturedBooks />
      <PoemsFeed />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}
