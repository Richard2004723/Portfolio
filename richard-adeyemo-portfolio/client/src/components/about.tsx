export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Modern workspace with laptop and design materials" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">
                Passionate about creating intuitive digital experiences
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 4 years of freelance experience in UI/UX design, web development, and graphic design, I believe 
                in the power of design to communicate, connect, and inspire. My approach focuses on user-centered design 
                principles and visual storytelling to create digital experiences that leave lasting impressions.
              </p>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                When I'm not designing, you can find me drawing, writing, or exploring new design trends. I specialize in 
                creating responsive websites, mobile app interfaces, and brand visuals that help businesses grow their 
                digital presence and connect with their audiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ 
                  backgroundColor: "hsl(221, 83%, 53%, 0.1)", 
                  color: "hsl(221, 83%, 53%)" 
                }}>
                  Visual Storyteller
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ 
                  backgroundColor: "hsl(43, 96%, 56%, 0.1)", 
                  color: "hsl(43, 96%, 56%)" 
                }}>
                  Creative Designer
                </span>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  Detail-Oriented
                </span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Certifications
                </h4>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ 
                      backgroundColor: "hsl(43, 96%, 56%, 0.1)" 
                    }}>
                      <svg className="w-6 h-6" style={{ color: "hsl(43, 96%, 56%)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Graphic Design Certificate</p>
                      <p className="text-sm text-slate-600">Advanced design principles and digital tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ 
                      backgroundColor: "hsl(221, 83%, 53%, 0.1)" 
                    }}>
                      <svg className="w-6 h-6" style={{ color: "hsl(221, 83%, 53%)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Web Development Certificate</p>
                      <p className="text-sm text-slate-600">Modern web technologies and responsive design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ 
                      backgroundColor: "hsl(142, 71%, 45%, 0.1)" 
                    }}>
                      <svg className="w-6 h-6" style={{ color: "hsl(142, 71%, 45%)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">UI/UX Designer Course</p>
                      <p className="text-sm text-slate-600">User-centered design and mobile app interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
