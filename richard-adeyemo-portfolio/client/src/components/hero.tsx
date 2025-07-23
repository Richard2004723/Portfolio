import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16"
      style={{ 
        background: "linear-gradient(135deg, hsl(221, 83%, 53%, 0.1) 0%, hsl(43, 96%, 56%, 0.1) 100%)" 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="fade-in">
          {/* Professional headshot */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
            <img 
              src="/richard-photo.jpg" 
              alt="Richard Adeyemo - Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-800">
            Richard Adeyemo
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-2xl mx-auto">
            UI/UX Designer & Web Developer crafting intuitive digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToPortfolio}
              className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{ 
                backgroundColor: "hsl(221, 83%, 53%)",
                color: "white"
              }}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="px-8 py-3 rounded-full border-2 transition-all hover:bg-blue-600 hover:text-white"
              style={{ 
                borderColor: "hsl(221, 83%, 53%)",
                color: "hsl(221, 83%, 53%)"
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
