import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills: Skill[] = [
    { name: "HTML5 & CSS3", percentage: 95, color: "hsl(221, 83%, 53%)" },
    { name: "JavaScript & React", percentage: 88, color: "hsl(221, 83%, 53%)" },
    { name: "Responsive Web Design", percentage: 95, color: "hsl(221, 83%, 53%)" },
    { name: "Version Control (Git)", percentage: 80, color: "hsl(221, 83%, 53%)" },
    { name: "Web Accessibility", percentage: 85, color: "hsl(221, 83%, 53%)" },
    { name: "SEO Optimization", percentage: 75, color: "hsl(221, 83%, 53%)" },
  ];

  const designSkills: Skill[] = [
    { name: "UI/UX Design", percentage: 92, color: "hsl(43, 96%, 56%)" },
    { name: "Figma & Prototyping", percentage: 90, color: "hsl(43, 96%, 56%)" },
    { name: "Adobe Photoshop", percentage: 85, color: "hsl(43, 96%, 56%)" },
    { name: "CorelDRAW", percentage: 80, color: "hsl(43, 96%, 56%)" },
    { name: "User Research", percentage: 78, color: "hsl(43, 96%, 56%)" },
    { name: "Brand Identity Design", percentage: 85, color: "hsl(43, 96%, 56%)" },
  ];

  const professionalSkills: Skill[] = [
    { name: "Project Management", percentage: 85, color: "hsl(142, 71%, 45%)" },
    { name: "Client Communication", percentage: 90, color: "hsl(142, 71%, 45%)" },
    { name: "Problem Solving", percentage: 88, color: "hsl(142, 71%, 45%)" },
    { name: "Deadline Management", percentage: 87, color: "hsl(142, 71%, 45%)" },
    { name: "Creative Thinking", percentage: 92, color: "hsl(142, 71%, 45%)" },
    { name: "Attention to Detail", percentage: 94, color: "hsl(142, 71%, 45%)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-700">{skill.name}</span>
        <span className="text-slate-500">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div 
          className="h-3 rounded-full transition-all duration-2000 ease-in-out"
          style={{ 
            width: isVisible ? `${skill.percentage}%` : "0%",
            backgroundColor: skill.color
          }}
        />
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Skills & Expertise
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-slate-800">
                Technical Skills
              </h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-slate-800">
                Design Skills
              </h3>
              {designSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-slate-800">
                Professional Skills
              </h3>
              {professionalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
