import ProjectCarousel from "./ProjectCarousel";
import { Smartphone, Code, Server } from "lucide-react";

// Imagens Mobile
import taskflowImage from "@/assets/taskflowBanner.jpeg";
import healthAppImage from "@/assets/mobile-project.jpg";

// Imagens Front-end
import frontendProject1 from "@/assets/frontend-project.jpg";
import frontendProject2 from "@/assets/frontend-project.jpg";

// Imagens Back-end
import backendProject1 from "@/assets/backend-project.jpg";
import backendProject2 from "@/assets/backend-project.jpg";

const ProjectsSection = () => {
  // Projetos Mobile
  const mobileProjects = [
    {
      title: "TaskFlow",
      description: "Projeto de gerenciamento de tarefas em Flutter, com telas funcionais, navegação fluida e design intuitivo, focado em melhorar a organização do dia a dia.",
      image: taskflowImage,
      link: "https://github.com/larasdiniz/taskflow",
      tags: ["Flutter", "Dart", "UI/UX", "Mobile Development"]
    },
    {
      title: "App de Saúde",
      description: "Aplicativo para monitoramento de saúde com gráficos, lembretes de medicamentos e histórico médico.",
      image: healthAppImage,
      link: "https://github.com",
      tags: ["React Native", "Firebase", "HealthKit"],
    },
  ];

  // Projetos Front-end
  const frontendProjects = [
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo com gráficos em tempo real, visualização de dados complexos e relatórios customizados.",
      image: frontendProject1,
      link: "https://github.com",
      tags: ["React", "Chart.js", "Tailwind CSS"],
    },
    {
      title: "Landing Page SaaS",
      description: "Landing page moderna e responsiva para plataforma SaaS com animações suaves e design elegante.",
      image: frontendProject2,
      link: "https://github.com",
      tags: ["React", "TypeScript", "Framer Motion"],
    },
  ];

  // Projetos Back-end
  const backendProjects = [
    {
      title: "API RESTful E-commerce",
      description: "API robusta com autenticação, gestão de produtos, pedidos e integração com gateways de pagamento.",
      image: backendProject1,
      link: "https://github.com",
      tags: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Sistema de Gestão Java",
      description: "Sistema completo de gestão empresarial com Java Spring Boot, incluindo módulos de vendas, estoque e relatórios.",
      image: backendProject2,
      link: "https://github.com",
      tags: ["Java", "Spring Boot", "MySQL"],
    },
  ];

  // Seções
  const sections = [
    { 
      id: "mobile", 
      title: "Mobile", 
      icon: Smartphone, 
      projects: mobileProjects,
      description: "Aplicativos mobile nativos e híbridos"
    },
    { 
      id: "frontend", 
      title: "Front-end", 
      icon: Code, 
      projects: frontendProjects,
      description: "Interfaces web modernas e responsivas"
    },
    { 
      id: "backend", 
      title: "Back-end", 
      icon: Server, 
      projects: backendProjects,
      description: "APIs robustas e sistemas escaláveis"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-gradient-hero shadow-glow">
                  <section.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{section.title}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>
              
              <ProjectCarousel projects={section.projects} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
