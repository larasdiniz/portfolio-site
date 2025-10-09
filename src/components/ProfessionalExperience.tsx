import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "Nome da Empresa 1",
      role: "Cargo/Posição",
      period: "Jan 2023 - Presente",
      description: "Descrição das principais responsabilidades e conquistas nesta posição. Tecnologias utilizadas e projetos desenvolvidos.",
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      company: "Nome da Empresa 2",
      role: "Cargo/Posição",
      period: "Jun 2021 - Dez 2022",
      description: "Descrição das principais responsabilidades e conquistas nesta posição. Tecnologias utilizadas e projetos desenvolvidos.",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
    },
  ];

  return (
    <section id="professional" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Minha trajetória no mercado de tecnologia
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
