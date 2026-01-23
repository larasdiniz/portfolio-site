import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import NasaBadge from "./NasaBadge.tsx"; 
import { useNavigate } from "react-router-dom"; 

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página inicial, role para a seção
    if (window.location.pathname === '/' || window.location.pathname === '/portfolio-site/' || window.location.pathname === '/portfolio-site') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estamos em outra página, navegue de volta para a inicial com âncora
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Olá, eu sou{" "}
            <span className="gradient-text">Lara Diniz</span>
          </h1>
          
          {/* Nasa Badge */}
          <div className="mb-6 flex justify-center">
            <NasaBadge />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack & Mobile Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Apaixonada por tecnologia, mentorias e inovação. Experiência em desenvolvimento mobile, 
            frontend e backend, sempre buscando criar soluções impactantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow"
              onClick={() => scrollToSection('projects')}
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/larasdiniz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lara-diniz-29a996275" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:lara.diniztrabalho@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;