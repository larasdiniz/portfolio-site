import ProjectCarousel from "./ProjectCarousel";
import { Smartphone, Globe } from "lucide-react";

// Imagens Mobile
import taskflowImage from "@/assets/taskflowBanner.jpeg";
import lumeBanner from "@/assets/lume-banner.png";

// Imagens Full Stack
import frontendProject1 from "@/assets/frontend-project.jpg";
import ReBook from "@/assets/ReBook.png";
import backendProject1 from "@/assets/backend-project.jpg";
import ChronoElite from "@/assets/ChronoElite.png";
import AtosCapital from "@/assets/AtosCapital.jpg";
import backendProject2 from "@/assets/backend-project.jpg";

const ProjectsSection = () => {
  // Projetos Mobile
  const mobileProjects = [
    {
      title: "TaskFlow",
      description:
        "Projeto de gerenciamento de tarefas em Flutter, com telas funcionais, navegação fluida e design intuitivo, focado em melhorar a organização do dia a dia.",
      image: taskflowImage,
      link: "https://larasdiniz.github.io/taskflow/",
      tags: ["Flutter", "Dart", "UI/UX", "Mobile Development"],
    },
    {
      title: "Lume",
      description:
        "Aplicativo mobile de saúde mental desenvolvido em React Native. Atuei na implementação técnica do app, transformando o protótipo de UX/UI em uma aplicação funcional, responsiva e escalável.",
      image: lumeBanner,
      link: "https://github.com",
      tags: ["React Native", "Mobile Development", "Firebase", "JavaScript"],
    },
  ];

  // Projetos Full Stack (Web)
  const fullStackProjects = [
    {
      title: "Plataforma de BI com IA",
      description:
        "Plataforma de Business Intelligence com Inteligência Artificial que permite aos usuários realizar perguntas em linguagem natural e obter insights automáticos a partir de consultas SQL geradas por IA. A solução se conecta diretamente a bancos de dados relacionais, oferecendo dashboards dinâmicos, interativos e em tempo real, sem necessidade de processos complexos de ETL.",
      image: AtosCapital,
      link: "https://github.com",
      tags: ["React", "Node.js", "Business Intelligence", "Inteligência Artificial", "SQL", "Dashboards", "Data Analytics"],
    },
     {
      title: "ChronoElite",
      description:
        "E-commerce de venda de relógios com arquitetura full stack. O front-end foi desenvolvido em React e hospedado na Vercel, enquanto o back-end utiliza banco de dados PostgreSQL no Neon e está deployado no Render, garantindo escalabilidade e boa performance.",
      image: ChronoElite, // se tiver uma imagem própria, é só trocar aqui
      link: "https://watch-reveal.vercel.app",
      tags: ["React", "PostgreSQL", "Neon", "Render", "Vercel", "Full Stack"],
    },
    {
      title: "ReBook",
      description:
        "Landing page moderna e responsiva desenvolvida com React e TypeScript para uma plataforma de livros usados, com foco em experiência do usuário, layout limpo e navegação intuitiva.",
      image: ReBook,
      link: "https://larasdiniz.github.io/bookish-loop/",
      tags: ["React", "TypeScript", "Vite", "GitHub Pages"],
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