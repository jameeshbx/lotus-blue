import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Training } from "@/components/sections/Training";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Training />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
