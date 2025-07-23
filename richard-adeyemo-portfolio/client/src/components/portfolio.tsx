import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "Natoplus Mobile App",
      description: "Designed a futuristic and user-friendly mobile interface for an all-in-one platform featuring novels, comics, blogs, and merch. Complete UI/UX design with consistent branding and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Responsive Web Applications",
      description: "Custom responsive websites built with modern web technologies. Focused on accessibility, cross-platform compatibility, and optimal user experience across all devices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brand Identity Projects",
      description: "Created comprehensive brand identities including logos, flyers, posters, and marketing materials for small businesses and startups using modern design principles.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      technologies: ["Photoshop", "CorelDRAW", "Canva"],
      projectUrl: "#",
      githubUrl: "#"
    }
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-slate-800">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-sm"
              style={{ 
                backgroundColor: index === 0 ? "hsl(221, 83%, 53%, 0.1)" : 
                                index === 1 ? "hsl(142, 71%, 45%, 0.1)" : 
                                              "hsl(271, 81%, 56%, 0.1)",
                color: index === 0 ? "hsl(221, 83%, 53%)" : 
                       index === 1 ? "hsl(142, 71%, 45%)" : 
                                     "hsl(271, 81%, 56%)"
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-blue-600 hover:text-blue-700 p-0"
            onClick={() => window.open(project.projectUrl, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            View Project
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-slate-500 hover:text-slate-700 p-0"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github size={16} className="mr-2" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{ 
              backgroundColor: "hsl(221, 83%, 53%)",
              color: "white"
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
