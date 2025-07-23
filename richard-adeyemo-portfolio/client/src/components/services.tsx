import { Code, Palette, Smartphone, Check } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  color: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Web Development",
      description: "Responsive websites built with modern web technologies. Ensuring accessibility, cross-platform compatibility, and optimal user experience.",
      icon: Code,
      features: ["HTML5 & CSS3", "JavaScript & React", "Responsive Design"],
      color: "hsl(221, 83%, 53%)"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that focus on intuitive navigation and visual hierarchy. Creating mobile app interfaces that users love.",
      icon: Palette,
      features: ["User Research", "Figma Prototyping", "Mobile App Design"],
      color: "hsl(43, 96%, 56%)"
    },
    {
      title: "Graphic Design",
      description: "Comprehensive brand identity design including logos, marketing materials, and visual content that helps businesses grow their presence.",
      icon: Smartphone,
      features: ["Logo Design", "Brand Materials", "Marketing Visuals"],
      color: "hsl(142, 71%, 45%)"
    }
  ];

  const ServiceCard = ({ service }: { service: Service }) => {
    const IconComponent = service.icon;
    
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${service.color}20` }}
        >
          <IconComponent size={32} style={{ color: service.color }} />
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-slate-800">
          {service.title}
        </h3>
        
        <p className="text-slate-600 mb-6">
          {service.description}
        </p>
        
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-600">
              <Check size={16} style={{ color: service.color }} className="mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Services Offered
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
