import { useMutation } from "@tanstack/react-query";
import { Download, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const { toast } = useToast();

  const resumeDownloadMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("GET", "/api/resume");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Resume Download",
        description: "Your resume download would start here.",
      });
    },
    onError: () => {
      toast({
        title: "Download Error",
        description: "Sorry, resume download is not available at the moment.",
        variant: "destructive",
      });
    },
  });

  const handleResumeDownload = () => {
    resumeDownloadMutation.mutate();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Richard Adeyemo</h3>
            <p className="text-slate-300 mb-4">
              UI/UX Designer & Web Developer creating intuitive digital experiences.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#skills")}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#portfolio")}
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Development</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Download Resume</h4>
            <Button 
              onClick={handleResumeDownload}
              disabled={resumeDownloadMutation.isPending}
              className="mb-4 transition-colors"
              style={{ 
                backgroundColor: "hsl(221, 83%, 53%)",
                color: "white"
              }}
            >
              <Download size={16} className="mr-2" />
              {resumeDownloadMutation.isPending ? "Loading..." : "Download CV"}
            </Button>
            <p className="text-slate-300 text-sm">
              Always open to new opportunities and collaborations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-600 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
