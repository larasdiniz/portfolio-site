import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "DL Info",
      role: "Desenvolvedor Web e Mobile",
      period: "Nov 2024 - Presente",
      description: "Descrição das principais responsabilidades e conquistas nesta posição. Tecnologias utilizadas e projetos desenvolvidos.",
      technologies: ["C#", ".NET", "ASP.NET", "MVC", "SQL Server", "Flutter", "Dart", "Visual Studio"],
    },
    {
      "company": "Atos Capital",
      "role": "Desenvolvedor Full Stack",
      "period": "Fev 2025 - Jun 2025",
      "description": "Em colaboração com minha equipe distribuída pelo Porto Digital, desenvolvi um dashboard de KPIs para o monitoramento e análise de dados estratégicos da empresa, facilitando a visualização de indicadores de desempenho e promovendo uma gestão orientada por dados. Além disso, integramos soluções de Inteligência Artificial para automatizar relatórios semanais, otimizando tempo e aumentando a precisão das análises.",
      "technologies": ["Python", "TypeScript", "Microsoft SQL Server", "n8n", "Agentes de IA", "Automação de Processos", "Inteligência de Negócios (BI)"]
    },
    {
      company: "Palynee",
      role: "Desenvolvedor Back end",
      period: "Jan 2024 - Jun 2024",
      description: "Atuei como desenvolvedora back-end em uma aplicação web integrada à AWS por meio do Porto Digital, utilizando Java, Spring Boot, Spring Framework, MySQL e SQL. Desenvolvi uma API para upload e gerenciamento de imagens na nuvem, com geração de chave e integração ao banco de dados, além de colaborar no levantamento de requisitos e aplicar metodologias ágeis.",
      technologies: ["Java", "Spring Boot", "Spring Framework", "MySQL", "SQL", "AWS", "GitHub", "VS Code"],
    },
    {
      "company": "Grupo Tiradentes",
      "role": "Desenvolvedora Front-end",
      "period": "Jan 2024 - Jun 2024",
      "description": "Desenvolvi a interface da página inicial e da área de login para pacientes de um centro odontológico, atuando como desenvolvedora front-end por meio do Porto Digital. Utilizei HTML, CSS e JavaScript, empregando ferramentas como VS Code e GitHub. Colaborei no levantamento de requisitos e apliquei metodologias ágeis para garantir entregas pontuais e de qualidade.",
      "technologies": ["HTML", "CSS", "JavaScript", "VS Code", "GitHub"]
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
