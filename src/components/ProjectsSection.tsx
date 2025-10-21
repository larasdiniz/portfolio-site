import ProjectCarousel from "./ProjectCarousel";
import { Smartphone, Globe } from "lucide-react";

// Imagens Mobile
import taskflowImage from "@/assets/taskflowBanner.jpeg";
import healthAppImage from "@/assets/mobile-project.jpg";

// Imagens Full Stack
import frontendProject1 from "@/assets/frontend-project.jpg";
import frontendProject2 from "@/assets/frontend-project.jpg";
import backendProject1 from "@/assets/backend-project.jpg";
import backendProject2 from "@/assets/backend-project.jpg";

const ProjectsSection = () => {
  // Projetos Mobile
  const mobileProjects = [
    {
      title: "TaskFlow",
      description:
        "Projeto de gerenciamento de tarefas em Flutter, com telas funcionais, navegação fluida e design intuitivo, focado em melhorar a organização do dia a dia.",
      image: taskflowImage,
      link: "https://github.com/larasdiniz/taskflow",
      tags: ["Flutter", "Dart", "UI/UX", "Mobile Development"],
    },
    {
      title: "App de Saúde",
      description:
        "Aplicativo para monitoramento de saúde com gráficos, lembretes de medicamentos e histórico médico.",
      image: healthAppImage,
      link: "https://github.com",
      tags: ["React Native", "Firebase", "HealthKit"],
    },
  ];

  // Projetos Full Stack (Web)
  const fullStackProjects = [
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo com gráficos em tempo real, visualização de dados complexos e relatórios customizados.",
      image: frontendProject1,
      link: "https://github.com",
      tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    },
    {
      title: "Landing Page SaaS",
      description:
        "Landing page moderna e responsiva para plataforma SaaS com animações suaves e design elegante.",
      image: frontendProject2,
      link: "https://github.com",
      tags: ["React", "TypeScript", "Express", "MongoDB"],
    },
    {
      title: "API RESTful E-commerce",
      description:
        "API robusta com autenticação, gestão de produtos, pedidos e integração com gateways de pagamento.",
      image: backendProject1,
      link: "https://github.com",
      tags: ["Node.js", "Express", "React", "PostgreSQL"],
    },
    {
      title: "Sistema de Gestão Java",
      description:
        "Sistema completo de gestão empresarial com Java Spring Boot, incluindo módulos de vendas, estoque e relatórios.",
      image: backendProject2,
      link: "https://github.com",
      tags: ["Java", "Spring Boot", "React", "MySQL"],
    },
  ];

  // Seções
  const sections = [
    {
      id: "mobile",
      title: "Projetos Mobile",
      icon: Smartphone,
      projects: mobileProjects,
      description: "Aplicativos mobile nativos e híbridos desenvolvidos com Flutter e React Native",
    },
    {
      id: "fullstack",
      title: "Projetos Web Full Stack",
      icon: Globe,
      projects: fullStackProjects,
      description: "Aplicações web completas, do front-end ao back-end",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore minha jornada através de projetos mobile e full stack que demonstram 
            minhas habilidades em desenvolvimento de software
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