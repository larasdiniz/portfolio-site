import ProjectCarousel from "./ProjectCarousel";
import { Smartphone, Code, Server } from "lucide-react";
import mobileProject from "@/assets/mobile-project.jpg";
import frontendProject from "@/assets/frontend-project.jpg";
import backendProject from "@/assets/backend-project.jpg";

const ProjectsSection = () => {
  const mobileProjects = [
    {
      title: "App Mobile E-commerce",
      description: "Aplicativo completo de e-commerce com React Native, incluindo carrinho, pagamentos e perfil de usuário.",
      image: mobileProject,
      link: "https://github.com",
      tags: ["React Native", "TypeScript", "Redux"],
    },
    {
      title: "App de Saúde",
      description: "Aplicativo para monitoramento de saúde com gráficos, lembretes de medicamentos e histórico médico.",
      image: mobileProject,
      link: "https://github.com",
      tags: ["React Native", "Firebase", "HealthKit"],
    },
  ];

  const frontendProjects = [
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo com gráficos em tempo real, visualização de dados complexos e relatórios customizados.",
      image: frontendProject,
      link: "https://github.com",
      tags: ["React", "Chart.js", "Tailwind CSS"],
    },
    {
      title: "Landing Page SaaS",
      description: "Landing page moderna e responsiva para plataforma SaaS com animações suaves e design elegante.",
      image: frontendProject,
      link: "https://github.com",
      tags: ["React", "TypeScript", "Framer Motion"],
    },
  ];

  const backendProjects = [
    {
      title: "API RESTful E-commerce",
      description: "API robusta com autenticação, gestão de produtos, pedidos e integração com gateways de pagamento.",
      image: backendProject,
      link: "https://github.com",
      tags: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Sistema de Gestão Java",
      description: "Sistema completo de gestão empresarial com Java Spring Boot, incluindo módulos de vendas, estoque e relatórios.",
      image: backendProject,
      link: "https://github.com",
      tags: ["Java", "Spring Boot", "MySQL"],
    },
  ];

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
