import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
